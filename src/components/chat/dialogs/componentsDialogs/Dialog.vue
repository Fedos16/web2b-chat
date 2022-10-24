<template>
<div class="dialog" :class="classActiveDialog" @click="setActiveDialog">
    <img src="@/assets/images/tehSupport.svg" alt="">
    <div class="dialog_info">
        <div class="dialog_info__top">
            <div class="dialog_info__name">{{ dialog.name }}</div>
            <div class="dialog_info__data">{{ formatingDateTime(dialog.dateLastMsg) }}</div>
        </div>
        <div class="dialog_info__bot">
            <div class="dialog_info__text">{{ dialog.textLastMsg }}</div>
            <div class="notReadMessage" v-if="dialog.unReadCount > 0">{{ dialog.unReadCount }}</div>
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
import { formatingDateTime } from '@/helpers/index';

export default {
    data() {
        return {
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
    computed: {
        activeDialogId() {
            return this.$store.state.activeDialog;
        },
        classActiveDialog() {
            return {
                'active': this.activeDialogId === this.dialog.id
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
        formatingDateTime,
        popapMenu(){
            if(this.dialog.whomDialog == 'moderator'){
                this.showMenuModerator = !this.showMenuModerator
            } else if(this.dialog.whomDialog == 'user'){
                this.showMenuUser = !this.showMenuUser
            }
        },
        setActiveDialog() {
            if (this.dialog.id !== this.activeDialogId) {
                this.$store.commit('setActiveDialog', this.dialog.id);
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
.dialog.active {
    background: #F7F8FA;
}
.dialog:hover{
    background-color: #F7F8FA;
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
    width: 16px;
    height: 16px;
    background: #2E5599;
    font-size: 10px;
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