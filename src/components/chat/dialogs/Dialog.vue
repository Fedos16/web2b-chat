<template>
    <div class="dialog" :class="classActiveDialog" @click="setActiveDialog">
        <img src="@/assets/images/tehSupport.svg" alt="">
        <div class="dialog_info">
            <div class="dialog_info__row">
                <div class="dialog_info__name" :title="dialogName">{{ dialogName }}</div>
                <div class="dialog_info__date">{{ formatingDateTime(dialog.lastMessage.date) }}</div>
            </div>
            <div class="dialog_info__row" v-if="dialog.typeDialog === 'moderator'">
                <div class="dialog_info__text">
                    <span>Заказ №{{ dialog?.additionalInfo?.numOrder }}</span>
                </div>
            </div>
            <div class="dialog_info__row">
                <div class="dialog_info__text">
                    <p><span>{{ userLastMessage }}: </span>{{ dialog.lastMessage.text }}</p>
                </div>
                <div class="fixed-dialog"><img src="@/assets/images/pinbutton.svg" alt="" v-if="dialog.fixedDialog"></div>
                <div class="notReadMessage" v-if="dialog.unReadCount > 0">{{ dialog.unReadCount }}</div>
            </div>
        </div>
        <div class="dialog_menu" @click="toggleDialogMenu">
            <ChatPopup v-if="visiblePopUp" :data="menuUsersAndModerator" />
        </div>
    </div>
    <RenameDialog v-if="renameDialog == dialog.id" :dialog="dialog"/>
</template>

<script>
import { formatingDateTime} from '@/helpers/index';
import RenameDialog from './RenameDialog'
import ChatPopup from '@/components/chat/popup/ChatPopUp'
import { typesDialog } from '@/data/index';

export default {
    components:{
        RenameDialog,
        ChatPopup
    },
    computed: {
        activeDialogId() {
            return this.$store.state.activeDialogId;
        },
        classActiveDialog() {
            return {
                'active': this.activeDialogId === this.dialog.id
            }
        },
        visiblePopUp() {
            return this.$store.state.ChatDialogMenu == this.dialog.id;
        },
        userName() {
            return this.$store.state.userName;
        },
        userLastMessage() {
            return this.userName == this.dialog.lastMessage.user ? 'Вы' : this.dialog.lastMessage.user;
        },
        dialogName() {
            return this.dialog.name;
        },
        renameDialog(){
            return this.$store.state.renameDialog
        },
        activeDialogData() {
            return this.$store.getters.getDialogById(this.activeDialogId);
        },
        menuUsersAndModerator(){
            const list = {
                [typesDialog['Пользователь']]: [
                    { id: 'ha-1', name: !this.dialog.fixedDialog ? 'Закрепить' : 'Открепить' , handler: this.switchFixedDialog },
                    { id: 'ha-2', name: !this.dialog.archiveDialog ? 'Переместить в архив' : 'Вернуть из архива' , handler: this.moveDialogToArchive }
                ],
                [typesDialog['Модератор']]: [
                    { id: 'ha-1', name: !this.dialog.fixedDialog ? 'Закрепить' : 'Открепить' , handler: this.switchFixedDialog },
                    { id: 'ha-2', name: !this.dialog.archiveDialog ? 'Переместить в архив' : 'Вернуть из архива' , handler: this.moveDialogToArchive }
                ],
                [typesDialog['Заказ']]: [
                    { id: 'ha-1', name: !this.dialog.fixedDialog ? 'Закрепить' : 'Открепить' , handler: this.switchFixedDialog },
                    { id: 'ha-2', name: 'Переименовать', handler: this.switchRenameDialog  },
                    { id: 'ha-3', name: !this.dialog.archiveDialog ? 'Переместить в архив' : 'Вернуть из архива' , handler: this.moveDialogToArchive }
                ],
                [typesDialog['Поддержка']]: [ { id: 'ha-1', name: !this.dialog.fixedDialog ? 'Закрепить' : 'Открепить' , handler: this.switchFixedDialog } ]
            }
            const Archivelist = {
                [typesDialog['Пользователь']]: [
                    { id: 'ha-1', name: !this.dialog.archiveDialog ? 'Переместить в архив' : 'Вернуть из архива' , handler: this.moveDialogToArchive }
                ],
                [typesDialog['Модератор']]: [
                    { id: 'ha-1', name: !this.dialog.archiveDialog ? 'Переместить в архив' : 'Вернуть из архива' , handler: this.moveDialogToArchive }
                ],
                [typesDialog['Заказ']]: [
                    { id: 'ha-1', name: !this.dialog.archiveDialog ? 'Переместить в архив' : 'Вернуть из архива' , handler: this.moveDialogToArchive }
                ]
            }
            const type = this.activeDialogData?.typeDialog;
            if(!this.dialog.archiveDialog){
                return list[type] || {};
            }
            else{
                return Archivelist[type] || {};
            }
        },
    },
    props: {
        dialog: {
            type: Object,
            required: true,
        }
    },
    methods: {
        formatingDateTime,
        setActiveDialog() {
            if (this.dialog.id !== this.activeDialogId) {
                this.$store.commit('setActiveDialog', this.dialog.id);
            }
        },
        toggleDialogMenu(){
            console.log('Click to toggleDialogMenu');
            this.$store.commit('toggleChatDialogMenu', this.dialog.id);
        },
        moveDialogToArchive(){
            this.$store.commit('moveDialogToArchive');
        },
        switchRenameDialog(){
            this.$store.commit('toggleRenameDialog',this.dialog.id);
        },
        switchFixedDialog(){
            this.$store.commit('sortDialogs');
            this.$store.commit('toggleFixedDialog');
        }
    }
}
</script>

<style scoped>
.dialog {
    max-height: 73px;
    height: 73px;
    padding: 12px;
    display: flex;
    border-bottom: 1px solid #E7EFFD;
    align-items: center;
    user-select: none;
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
.dialog_info__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
.dialog_info__row:last-child {
    margin-bottom: 0px;
}
.dialog_info__name {
    font-weight: 600;
    color: #102447;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.dialog_info__date {
    color: #7D95BD;
    font-size: 12px;
}
.dialog_info__text {
    color: #102447;
    font-size: 12px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.dialog_info__text span {
    color: #7D95BD;
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
    width: 20px;
    height: 25px;
    position: relative;
    background-image: url('@/assets/images/menu.svg');
    background-size: cover;
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