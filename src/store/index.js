import { createStore } from 'vuex';
import { messages, dialogs } from '@/data/index';
import { formatingText, getNameChat } from '@/helpers/index';

export default createStore({
    state: {

        userName: 'Fedos16',

        activeDialogSearch: false,
        searchDialogText: '',
        dialogs,
        unReadMessages: false,
        descSort: true,
        showArchive: false,
        activeDialog: null,
        renameDialog: false,

        searchMessageText: '',
        messages: [],
        chatActions: ['Закрепить', 'Переименовать', 'Добавить пользователя', 'Показать участников', 'Переместить в архив'],
        isVisibleChatActions: false
    },
    getters: {
        getMessages(state) {
            return state.messages.filter(item => {
                return item.text.toLowerCase().includes(state.searchMessageText.toLowerCase());
            }).map(item => {
                if (state.searchMessageText !== '') {
                    item.findedText = formatingText(item.text, state.searchMessageText);
                } else {
                    delete item.findedText;
                }

                return item;
            });
        },
        getDialogs(state) {
            return state.dialogs.filter(item => {

                const filterName = getNameChat(item).toLowerCase().includes(state.searchDialogText.toLowerCase());
                const filterUnRead = state.unReadMessages ? item.unReadCount > 0 : true;
                const filterArchiv = !item.archiveDialog;

                return filterName && filterUnRead && filterArchiv;
            })
        },
        isUnreadDialogs(state) {
            return state.dialogs.filter(item => item.unReadCount > 0).length > 0;
        },
        getArchiveDialogs(state) {
            return state.dialogs.filter(item => {
                const filterArchiv = item.archiveDialog;

                return filterArchiv;
            })
        }
    },
    mutations: {
        sortDialogs(state) {
            state.dialogs = state.dialogs.sort((a, b) => {
                const aDate = a.lastMessage.date.getTime();
                const bDate = b.lastMessage.date.getTime();

                if (state.descSort) {
                    return bDate - aDate;
                }
                return aDate - bDate
            });
        },
        swithTypeSort(state) {
            state.descSort = !state.descSort;
        },

        toggleActiveDialogSearch(state) {
            state.activeDialogSearch = !state.activeDialogSearch;
            state.searchDialogText = '';
        },
        toggleUnReadMessages(state) {
            state.unReadMessages = !state.unReadMessages;
        },
        updateSearchDialogText(state, text) {
            state.searchDialogText = text;
        },
        updateSearchMessageText(state, text) {
            state.searchMessageText = text;
        },
        toggleChatActions(state) {
            state.isVisibleChatActions = !state.isVisibleChatActions;
        },

        setActiveDialog(state, id) {
            state.activeDialog = id;
            state.messages = messages.filter(item => item.chatId === id);
        },
        toggleShowArchive(state) {
            state.showArchive = !state.showArchive;
        },
        toggleRenameDialog(state) {
            state.renameDialog = !state.renameDialog;
        }
    },
    actions: {
    }
})