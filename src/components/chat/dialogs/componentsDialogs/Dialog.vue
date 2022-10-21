<template>
<div class="dialog">
    <img src="@/assets/images/tehSupport.svg" alt="">
    <div class="dialog_info">
        <div class="dialog_info__top">
            <div class="dialog_info__name">{{ dialog.name }}</div>
            <div class="dialog_info__data">{{ dateFormat(dialog.dateLastMsg) }}</div>
        </div>
        <div class="dialog_info__bot">
            <div class="dialog_info__text">{{ dialog.textLastMsg }}</div>
            <img class="img" src="@/assets/images/pinbutton.svg" alt="" v-if="notReadMassege == 0">
            <div class="notReadMessage" v-else>{{ dialog.sumNotReadMassege }}</div>
        </div>
    </div>
    <div class="dialog_menu">
        <img class="img" src="@/assets/images/menu.svg" alt="" @click="popapMenu">
        <div class="dialog_menu__moderator" v-if="!showMenuModerator">
            <button class="popap-menu-button">Закрепить</button>
            <button class="popap-menu-button">Переместить в архив</button>
        </div>
        <div class="dialog_menu__user" v-if="!showMenuUser">
            <button class="popap-menu-button">Закрепить</button>
            <button class="popap-menu-button">Переименовать</button>
            <button class="popap-menu-button">Переместить в архив</button>
        </div>
    </div>
</div>
</template>

<script>
import { dateFormat } from '@/helpers/index';

export default {
    data() {
        return {
            notReadMassege: this.dialog.sumNotReadMassege,
            showMenuModerator: {
                type: Boolean,
                default: false,
            },
            showMenuUser: {
                type: Boolean,
                default: false,
            }
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
        popapMenu(){
            if(this.dialog.whomDialog == 'moderator'){
                this.showMenuModerator = !this.showMenuModerator
            } else if(this.dialog.whomDialog == 'user'){
                this.showMenuUser = !this.showMenuUser
            }
        }
    }
}
</script>

<style scoped>
.dialog {
    padding: 12px;
    display: flex;
    border-bottom: 1px solid #E7EFFD;
}
.dialog:hover{
    background-color: #F7F8FA;
}
.dialog_active {
    padding: 12px;
    display: flex;
    border-bottom: 1px solid #E7EFFD;
    background: #F7F8FA;
}
.dialog_info {
    width: 100%;
    margin-left: 8px;
}
.dialog_info__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
.dialog_info__bot {
    display: flex;
    justify-content: space-between;
}
.dialog_info__name {
    font-weight: 600;
    color: #102447;
}
.dialog_info__data {
    color: #7D95BD;
}
.dialog_info__text {
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
.img{
    cursor: pointer;
}

.popap-menu-button{
    width: 150%;
    min-height: 30px;
    border: none;
    background-color: #fff;
    text-align: left;
    color: #2E5599;
}
.popap-menu-button:hover{
    background-color: #F7F8FA;
}
.dialog_menu{
    position: relative;
}
.dialog_menu__moderator{
    border-radius: 4px;
    position: absolute;
    right: 40px;
    width: 100px;
    z-index: 1;
}
.dialog_menu__user{
    width: 100px;
    border-radius: 4px;
    position: absolute;
    right: 40px;
    z-index: 1;
}
</style>