<template>
    <ModalWindowBackdrop @closeWindow="hideModalWindow">
        <ModalWindow :title="windowTitle" @closeWindow="hideModalWindow">
            <div class="modal-window_search">
                <div class="modal-window__icon-search"></div>
                <input type="text" placeholder="Поиск" v-model="textSearch">
            </div>
            <AddUserListUsers v-if="usersFromContacts.length > 0" :title="titleContacts" :users="usersFromContacts" />
            <AddUserListUsers v-if="usersFromSystem.length > 0" :title="titleUsers" :users="usersFromSystem" />
            <div class="modal-window_actions">
                <button class="chat-button btn-lg main-button margin-r--10" @click="appendUsersForChat">Добавить</button>
                <button class="chat-button btn-lg secondary-button" @click="hideModalWindow">Отмена</button>
            </div>
        </ModalWindow>
    </ModalWindowBackdrop>
</template>

<script>

import { mapActions } from 'vuex';
import AddUserListUsers from './AddUserListUsers.vue';
import ModalWindowBackdrop from '../ModalWindowBackdrop.vue';
import ModalWindow from '../ModalWindow.vue';

export default {
    components: { ModalWindowBackdrop, ModalWindow, AddUserListUsers },
    data() {
        return {
            windowTitle: 'Добавить пользователя',
            titleContacts: 'Мои контакты',
            titleUsers: 'Пользователи системы'
        }
    },
    computed: {
        usersFromContacts() {
            return this.$store.getters['modalWindows/getUsersToAdded'].filter(item => item.type === 'contact');
        },
        usersFromSystem() {
            return this.$store.getters['modalWindows/getUsersToAdded'].filter(item => item.type === 'user');
        },
        textSearch: {
            get() {
                return this.$store.state.modalWindows.addUser.textSearch;
            },
            set(value) {
                this.$store.commit('modalWindows/setTextSearch', value);
            }
        },
        selectedUsers() {
            return this.$store.state.modalWindows.addUser.selectedUsers;
        }
    },
    methods: {
        ...mapActions('modalWindows', ['appendUsersForDialog']),
        hideModalWindow() {
            this.$store.commit('modalWindows/hideModalWindow');
        },
        appendUsersForChat() {
            this.appendUsersForDialog(this.selectedUsers);
            this.closeWindow();
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal-window_search {
        width: 100%;
        margin-bottom: 16px;
        background-color: #E9EDF5;
        padding: 16px;
        border-radius: 4px;

        input {
            border: none;
            color: var(--input-text-color);
            background-color: transparent;
            width: 100%;

            &::placeholder {
                color: var(--input-placeholder-color)
            }
        }
    }
</style>