<template>
    <div class="chat-body">
        <Header v-if="activeDialogId || isCreateChatToOrder || isCreateChatToUser || isModeSelect">
            <HeaderChat v-if="activeDialogId && !isCreateChatToUser && !isCreateChatToOrder && !isModeSelect" />
            <HeaderNewChatToOrder v-if="isCreateChatToOrder" />
            <HeaderNewChatToUser v-if="isCreateChatToUser" />
            <HeaderSelectedMessages v-if="isModeSelect" />
        </Header>
        <Content />
        <Footer v-if="activeDialogId" />
    </div>

    <ModalViewUsers v-if="visibleViewUser" />

    <ModalAddUser v-if="visibleAddUser" />

    <ModalForwardMessages v-if="visibleForwardMessages" />

</template>

<script>

import Header from './header/Header.vue';
import HeaderChat from './header/HeaderChat.vue';
import HeaderNewChatToOrder from './header/HeaderNewChatToOrder.vue';
import HeaderNewChatToUser from './header/HeaderNewChatToUser.vue';
import HeaderSelectedMessages from './header/HeaderSelectedMessages.vue';
import Content from './content/Content.vue';
import Footer from './footer/Footer.vue';
import ModalAddUser from '../modalWindows/addUsers/ModalAddUser.vue';
import ModalViewUsers from '../modalWindows/viewUsers/ModalViewUsers.vue';
import ModalForwardMessages from '../modalWindows/forwardMessages/ModalForwardMessages.vue';
import { mapState } from 'vuex';

export default {
    components: {
        Header,
        HeaderChat,
        HeaderNewChatToOrder,
        HeaderNewChatToUser,
        HeaderSelectedMessages,
        Content,
        Footer,
        ModalAddUser,
        ModalViewUsers,
        ModalForwardMessages
    },
    computed: {
        activeDialogId() {
            return this.$store.state.activeDialogId;
        },
        visibleModalWindow() {
            return this.$store.state.modalWindows.visibleModalWindow;
        },
        visibleAddUser() {
            return this.$store.state.modalWindows.addUser.visible;
        },
        visibleForwardMessages() {
            return this.$store.state.modalWindows.forwardMessages.visible;
        },
        visibleViewUser() {
            return this.$store.state.modalWindows.viewUsers.visible;
        },
        titleModalWindow() {
            return this.$store.getters['modalWindows/getTitleModalWindow'];
        },
        isCreateChatToUser() {
            return this.$store.state.isCreateChatToUser;
        },
        isCreateChatToOrder() {
            return this.$store.state.isCreateChatToOrder;
        },
        ...mapState({
            isModeSelect: 'modeSelectMessages'
        })
    }
}
</script>

<style scoped>
    .chat-body {
        min-width: 300px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>