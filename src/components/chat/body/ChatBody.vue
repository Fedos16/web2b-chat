<template>
    <div class="chat-body">
        <Header v-if="activeDialogId || isCreateChatToOrder || isCreateChatToUser">
            {{  }}
            <HeaderChat v-if="activeDialogId && !isCreateChatToUser && !isCreateChatToOrder" />
            <HeaderNewChatToOrder v-if="isCreateChatToOrder" />
            <HeaderNewChatToUser v-if="isCreateChatToUser" />
        </Header>
        <Content />
        <Footer v-if="activeDialogId" />
    </div>

    <ModalWindowBackdrop v-if="visibleModalWindow && (visibleAddUser || visibleViewUser)" @closeWindow="hideModalWindow">
        <ModalWindow :title="titleModalWindow" @closeWindow="hideModalWindow">
            <ModalAddUser v-if="visibleAddUser" @closeWindow="hideModalWindow" />
            <ModalViewUsers v-if="visibleViewUser" />
        </ModalWindow>
    </ModalWindowBackdrop>
</template>

<script>

import Header from './header/Header.vue';
import HeaderChat from './header/HeaderChat.vue';
import HeaderNewChatToOrder from './header/HeaderNewChatToOrder.vue';
import HeaderNewChatToUser from './header/HeaderNewChatToUser.vue';
import Content from './content/Content.vue';
import Footer from './footer/Footer.vue';
import ModalWindowBackdrop from '../modalWindows/ModalWindowBackdrop.vue';
import ModalWindow from '../modalWindows/ModalWindow.vue';
import ModalAddUser from '../modalWindows/addUsers/ModalAddUser.vue';
import ModalViewUsers from '../modalWindows/viewUsers/ModalViewUsers.vue';

export default {
    components: {
        Header,
        HeaderChat,
        HeaderNewChatToOrder,
        HeaderNewChatToUser,
        Content,
        Footer,
        ModalWindowBackdrop,
        ModalWindow,
        ModalAddUser,
        ModalViewUsers
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
        }
    },
    methods: {
        hideModalWindow() {
            this.$store.commit('modalWindows/hideModalWindow');
        }
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