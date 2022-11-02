<template>
    <div class="chat-body_header_user-info" v-if="!activeSearch">
        <div class="chat-body_header_user-info__avatar">
            <img src="@/assets/images/tehSupport.svg" alt="">
        </div>
        <div class="chat-body_header_user-info__user-name">
            <b :title="activeDialogData.name">{{ activeDialogData.name }}</b>
            <p v-show="typeDialog">{{ typeDialog }}</p>
        </div>
    </div>
    <div class="chat-body_header_actions" v-if="!activeSearch">
        <div class="chat-body_header_actions__item">
            <button class="chat-button-invisible" @click="switchSearch"><img src="@/assets/images/search.svg" alt=""></button>
        </div>
        <div class="chat-body_header_actions__item chat-popup">
            <button class="chat-button-invisible" @click="toggleChatActions"><img src="@/assets/images/menu.svg" alt=""></button>
            <ChatPopUp v-if="visibleChatHeaderActions" :data="actionsForType" @handlerClose="toggleChatActions" />
        </div>
    </div>
    <div class="chat-body_header_search" v-if="activeSearch">
        <img src="@/assets/images/search.svg" alt="">
        <input type="text" placeholder="Поиск по истории сообщений" :value="searchText" ref="searchInput">
        <button class="chat-button-invisible margin-r--15">
            <img src="@/assets/images/calendar.png" alt="">
        </button>
        <button class="chat-button main-button margin-r--10" @click="searchMessage">Найти</button>
        <button class="chat-button secondary-button" @click="switchSearch">Отмена</button>
    </div>
</template>

<script>

    import { ref, watch } from 'vue';
    import { typesDialog } from '@/data/index';
    import { setTypeDialog } from '@/helpers/index';
    import ChatPopUp from '@/components/chat/popup/ChatPopUp';

    export default {
        components: {
            ChatPopUp
        },
        setup() {
            const searchInput = ref(null);

            watch(searchInput, (current) => {

                if (current) {
                    current.focus()
                }

            });

            return {
                searchInput
            }
        },
        data() {
            return {
                activeSearch: false,
            }
        },
        computed: {
            searchText() {
                return this.$store.state.searchMessageText;
            },
            activeDialogId() {
                return this.$store.state.activeDialogId;
            },
            activeDialogData() {
                return this.$store.getters.getDialogById(this.activeDialogId);
            },
            typeDialog() {
                return setTypeDialog(this.activeDialogData);
            },
            actionsForType() {
                const { archiveDialog: isArchive, fixedDialog: isFixed } = this.activeDialogData;

                const list = {
                    [typesDialog['Пользователь']]: [
                        { id: 'ha-1', name: isFixed ? 'Открепить' : 'Закрепить', handler: this.changeStateFixed },
                        { id: 'ha-2', name: isArchive ? 'Вернуть из архива' : 'Переместить в архив', handler: this.changeStateArchive }
                    ],
                    [typesDialog['Заказ']]: [
                        { id: 'ha-1', name: isFixed ? 'Открепить' : 'Закрепить', handler: this.changeStateFixed },
                        { id: 'ha-2', name: 'Переименовать', handler: this.showWindowRenameDialog },
                        { id: 'ha-3', name: 'Добавить пользователя', handler: this.showWindowAddUser },
                        { id: 'ha-4', name: 'Показать участников', handler: this.showViewUsers },
                        { id: 'ha-5', name: isArchive ? 'Вернуть из архива' : 'Переместить в архив', handler: this.changeStateArchive },
                    ],
                    [typesDialog['Модератор']]: [
                        { id: 'ha-1', name: isFixed ? 'Открепить' : 'Закрепить', handler: this.changeStateFixed },
                        { id: 'ha-2', name: isArchive ? 'Вернуть из архива' : 'Переместить в архив', handler: this.changeStateArchive }
                    ],
                    [typesDialog['Поддержка']]: [ { id: 'ha-1', name: isFixed ? 'Открепить' : 'Закрепить' } ]
                }

                const type = this.activeDialogData?.typeDialog;

                const arrData = list[type] || [];

                return arrData.filter(item => (isArchive && !['Закрепить', 'Открепить'].includes(item.name)) || !isArchive );
            },
            visibleChatHeaderActions() {
                return this.$store.state.visibleChatHeaderActions;
            }
        },
        methods: {
            switchSearch() {
                this.activeSearch = !this.activeSearch;
                if (this.$store.state.searchMessageText) this.$store.commit('updateSearchMessageText', '');
            },
            searchMessage() {
                this.$store.commit('updateSearchMessageText', this.$refs.searchInput.value);
            },
            toggleChatActions() {
                this.$store.commit('toggleChatActions');
            },
            changeStateArchive() {
                this.$store.commit('moveDialogToArchive');
            },
            changeStateFixed() {
                this.$store.commit('sortDialogs');
                this.$store.commit('toggleFixedDialog');
            },
            showWindowRenameDialog() {
                this.$store.commit('toggleRenameDialog', this.activeDialogData.id);
            },
            showWindowAddUser() {
                this.$store.commit('modalWindows/showAddUser');
            },
            showViewUsers() {
                this.$store.commit('modalWindows/showViewUsers');
            }
        }
    }
    
</script>

<style lang="scss" scoped>
    @import './header.scss';
</style>