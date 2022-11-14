<template>
    <ModalWindowBackdrop @closeWindow="hideModalWindow">
        <ModalWindow :title="modalWindow.title" @closeWindow="hideModalWindow">
            <div class="modal-window__sub-title">{{modalWindow.subTitle}}</div>
            <div class="modal-window_search">
                <div class="modal-window__icon-search"></div>
                <input type="text" placeholder="Поиск" v-model="textSearch">
            </div>
            <div class="modal-window_content my-scroll">
                <div class="modal-window_content__title" v-if="dialogUsers.length > 0">Мои контакты</div>
                <div class="modal-window_content_list" v-if="dialogUsers.length > 0">
                    <div class="modal-window_content_list_item" v-for="user in dialogUsers" :key="user.id" @click="handlerWriteToUser(user.id)">
                        <div class="modal-window_content_list_item__avatar">
                            <img :src="user.img" alt="">
                        </div>
                        <div class="modal-window_content_list_item__name">{{user.name}}</div>
                    </div>
                    
                </div>
                <div class="modal-window_content__split" v-if="dialogUsers.length > 0 && systemUsers.length > 0"></div>
                <div class="modal-window_content__title" v-if="systemUsers.length > 0">Пользователи системы</div>
                <div class="modal-window_content_list" v-if="systemUsers.length > 0">
                    <div class="modal-window_content_list_item" v-for="user in systemUsers" :key="user.id" @click="handlerWriteToUser(user.id)">
                        <div class="modal-window_content_list_item__avatar">
                            <img :src="user.img" alt="">
                        </div>
                        <div class="modal-window_content_list_item__name">{{user.name}}</div>
                    </div>
                </div>
            </div>
        </ModalWindow>
    </ModalWindowBackdrop>
</template>

<script>

    import ModalWindowBackdrop from '../ModalWindowBackdrop.vue';
    import ModalWindow from '../ModalWindow.vue';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

    export default {
        components: { ModalWindowBackdrop, ModalWindow },
        computed: {
            ...mapState('modalWindows', {
                modalWindow: 'forwardMessages'
            }),
            ...mapGetters('modalWindows', {
                forwardMessagesUsers: 'getUsersToForwardMessages'
            }),
            ...mapState(['selectedMessages']),
            dialogUsers() {
                return this.forwardMessagesUsers.filter(item => item.type === 'contact');
            },
            systemUsers() {
                return this.forwardMessagesUsers.filter(item => item.type === 'user');
            },
            textSearch: {
                get() {
                    return this.$store.state.modalWindows.forwardMessages.textSearch;
                },
                set(value) {
                    this.$store.commit('modalWindows/setTextSearchForwardMessage', value);
                }
            },
        },
        methods: {
            ...mapMutations('modalWindows', {
                hideModalWindow: 'hideModalWindow',
                setTextSearch: 'setTextSearchForwardMessage'
            }),
            ...mapMutations({
                writeToUser: 'writeToUser',
            }),
            ...mapActions(['forwardMessages']),
            handlerWriteToUser(id) {
                this.writeToUser(id);
                this.forwardMessages();
                this.hideModalWindow();
                this.setTextSearch('');
            }
        }
    }

</script>

<style lang="scss" scoped>
    .modal-window__sub-title {
        width: 100%;
        text-align: left;
        color: #2E5599;
        margin-bottom: 15px;
    }
    .modal-window_content__split {
        margin: 20px 0px;
        height: 1px;
        width: 100%;
        border-bottom: 1px solid #E9EDF5;
    }
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
    .modal-window_content {
        width: 100%;
        height: 100%;
        overflow-y: auto;

        &__title {
            position: sticky;
            top: 0px;
            width: 100%;
            background-color: #fff;
            padding-bottom: 5px;
            font-weight: 600;
            color: #7D95BD;
            margin-bottom: 12px;
        }

        &_list {
            display: flex;
            flex-direction: column;

            &_item {
                width: 100%;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                &:last-child {
                    margin-bottom: 0px;
                }

                &:hover {
                    background-color: #F7F8FA;
                }

                &__avatar {
                    margin-right: 10px;
                }

                &__name {
                    color: #102447;
                }
            }
        }
    }
</style>