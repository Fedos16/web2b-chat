<template>
<div class="dialog">
    <img src="@/assets/images/tehSupport.svg" alt="">
    <div class="dialogInfo">
        <div class="dialogInfoTop">
            <div class="dialogInfoName">{{ dialog.name }}</div>
            <div class="dialogInfoData">{{ dateFormat(dialog.dateLastMsg) }}</div>
        </div>
        <div class="dialogInfoBot">
            <div class="dialogInfoText">{{ dialog.textLastMsg }}</div>
            <img src="@/assets/images/pinbutton.svg" alt="" v-if="notReadMassege == 0">
            <div class="notReadMessage" v-else>{{ dialog.sumNotReadMassege }}</div>
        </div>
    </div>
    <img src="@/assets/images/menu.svg" alt="">
</div>
</template>

<script>
import { dateFormat } from '@/helpers/index';

export default {
    data() {
        return {
            notReadMassege: this.dialog.sumNotReadMassege
        }
    },
    props: {
        dialog: {
            type: Object,
            required: true,
        }
    },
    methods: {
        dateFormat,
    }
}
</script>

<style scoped>
.dialog {
    padding: 12px;
    display: flex;
    border-bottom: 1px solid #E7EFFD;
}
.dialog_active {
    padding: 12px;
    display: flex;
    border-bottom: 1px solid #E7EFFD;
    background: #F7F8FA;
}
.dialogInfo {
    width: 100%;
    margin-left: 8px;
}
.dialogInfoTop {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
.dialogInfoBot {
    display: flex;
    justify-content: space-between;
}
.dialogInfoName {
    font-weight: 600;
    color: #102447;
}
.dialogInfoData {
    color: #7D95BD;
}
.dialogInfoText {
    color: #102447;
}
.notReadMessage{
    width: 24px;
    height: 24px;
    background: #2E5599;
    border-radius: 50%;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>