<template>
    <ModalWindowBackdrop @closeWindow="hideModalWindow">
        <ModalWindow :title="windowTitle" @closeWindow="hideModalWindow">
            <div class="modal-window_list my-scroll">
                <ul>
                    <ViewUsersListItem v-for="user in usersFromChat" :key="user.id" :user="user" />
                </ul>
            </div>
        </ModalWindow>
    </ModalWindowBackdrop>
</template>

<script>
    import { mapGetters } from 'vuex';

    import ModalWindowBackdrop from '../ModalWindowBackdrop.vue';
    import ModalWindow from '../ModalWindow.vue';

    import ViewUsersListItem from './ViewUsersListItem.vue';
    
    export default {
        components: { ModalWindowBackdrop, ModalWindow, ViewUsersListItem },
        data() {
            return {
                windowTitle: 'Показать пользователей'
            }
        },
        computed: {
            ...mapGetters({
                usersFromChat: 'getUsersFromChat'
            })
        },
        methods: {
            hideModalWindow() {
                this.$store.commit('modalWindows/hideModalWindow');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal-window_list {
        position: relative;
        width: 100%;
        margin-bottom: 16px;
        overflow: auto;

        &__title {
            width: 100%;
            position: sticky;
            top: 0px;
            color: #7D95BD;
            background-color: #fff;
            margin-bottom: 16px;
        }
    }
</style>