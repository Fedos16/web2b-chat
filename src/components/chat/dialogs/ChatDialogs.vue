<template>
    <div class="sidebar ">
        <Menu />
        <Archive />
        <div class="sidebar_chats my-scroll" v-show="dialogs.length > 0">
            <Dialog ref="dialog" v-for="dialog in dialogs" :dialog="dialog" :key="dialog.id" />
        </div>
        <div class="sidebar_chatNotFound" v-show="dialogs.length === 0">
            <p>Чатов с названием</p>
            <p><b>«{{chatName}}»</b> не найдено</p>
        </div>
    </div>

</template>

<script>

import Dialog from "./componentsDialogs/Dialog.vue";
import Menu from "./componentsDialogs/Menu.vue";
import Archive from "./componentsDialogs/Archive.vue";

export default {
    components: { Dialog, Menu, Archive },
    mounted() {
        this.$store.commit('sortDialogs');
    },
    computed: {
        dialogs() {
            return this.$store.getters.getDialogs;
        },
        chatName() {
            return this.$store.state.searchDialogText;
        }
    }
}
</script>


<style scoped>
.sidebar {
    border-right: 1px solid #E7EFFD;;
    max-height: 100%;
    max-width: 315px;
    min-width: 315px;
    display: flex;
    flex-direction: column;
}
.sidebar_chats{
    width: 100%;
    height: 100%;
        overflow-y: auto;
}
.sidebar_chatNotFound{
    Font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #7D95BD;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.dialog_active {
    padding: 12px;
    display: flex;
    border-bottom: 1px solid #E7EFFD;
    background: #F7F8FA;
}
</style>
