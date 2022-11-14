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

    <ModalViewUsers v-if="visibleViewUser" />

    <ModalAddUser v-if="visibleAddUser" />

</template>

<script>

import Header from './header/Header.vue';
import HeaderChat from './header/HeaderChat.vue';
import HeaderNewChatToOrder from './header/HeaderNewChatToOrder.vue';
import HeaderNewChatToUser from './header/HeaderNewChatToUser.vue';
import Content from './content/Content.vue';
import Footer from './footer/Footer.vue';
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