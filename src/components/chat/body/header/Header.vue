<template>
    <div class="chat-body_header" v-if="messages.length > 0">
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
                <ChatPopUp :visible="visibleChatHeaderActions" :data="actionsForType" @handlerClose="toggleChatActions" />
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
            messages() {
                return this.$store.getters.getMessages;
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
                        { id: 'ha-3', name: 'Добавить пользователя' },
                        { id: 'ha-4', name: 'Показать участников' },
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

                return arrData.filter(item => {
                    if (isArchive) {
                        return !['Закрепить', 'Открепить'].includes(item.name)
                    } 
                    return true;
                })
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
                return this.$store.commit('toggleRenameDialog', this.activeDialogData.id);
            }
        }
    }
    
</script>

<style scoped>
    .chat-body_header {
        width: 100%;
        min-height: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        border-bottom: 1px solid var(--border-color);
        user-select: none;
    }
    .chat-body_header_user-info {
        display: flex;
    }
    .chat-body_header_user-info__avatar {
        margin-right: 12px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
    .chat-body_header_user-info__avatar img {
        width: auto;
    }
    .chat-body_header_user-info__user-name {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .chat-body_header_user-info__user-name b {
        font-size: 18px;
        font-weight: 700;
        color: #102447;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .chat-body_header_user-info__user-name p {
        font-size: 12px;
        color: #102447;
    }

    .chat-body_header_actions {
        display: flex;
        align-items: center;
    }
    .chat-body_header_actions__item {
        display: flex;
        align-items: center;
        margin-right: 10px;
    }
    .chat-body_header_actions__item:last-child {
        margin-right: 0px;
    }

    .chat-body_header_search {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .chat-body_header_search input {
        width: 100%;
        border: none;
        margin: 0px 15px;
        color: var(--input-text-color);
    }
    .chat-body_header_search input::placeholder {
        color: var(--input-placeholder-color);
    }

</style>