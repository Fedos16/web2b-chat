<template>
    <div class="chat-body">
        <Header v-if="!emptyDialog" />
        <Content />
        <Footer v-if="!emptyDialog" />
    </div>

    <ModalWindowBackdrop v-if="true">
        <ModalWindow :title="titleAddUser">
            <ModalAddUser />
        </ModalWindow>
    </ModalWindowBackdrop>
</template>

<script>

import Header from './header/Header.vue';
import Content from './content/Content.vue';
import Footer from './footer/Footer.vue';
import ModalWindowBackdrop from '../modalWindows/ModalWindowBackdrop.vue';
import ModalWindow from '../modalWindows/ModalWindow.vue';
import ModalAddUser from '../modalWindows/addUser/ModalAddUser.vue';

export default {
    components: {
        Header,
        Content,
        Footer,
        ModalWindowBackdrop,
        ModalWindow,
        ModalAddUser
    },
    data() {
        return {
            emptyDialog: false,
            titleAddUser: 'Добавить пользователя'
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