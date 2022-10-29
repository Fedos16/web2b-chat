import { createStore } from 'vuex';
import { messages, dialogs } from '@/data/index';
import { formatingText } from '@/helpers/index';

export default createStore({
    state: {
        userName: 'Fedos16',
        activeDialogId: null,

        activeDialogSearch: false,
        searchDialogText: '',
        dialogs,
        unReadMessages: false,
        descSort: true,
        showArchive: false,
        renameDialog: null,

        visibleChatHeaderActions: false,
        searchMessageText: '',
        messages: []
    },
    getters: {
        getDialogById: (state) => (id) => {
            return state.dialogs.find(item => item.id == id);
        },

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

                const filterName = item.name.toLowerCase().includes(state.searchDialogText.toLowerCase());
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
            state.visibleChatHeaderActions = !state.visibleChatHeaderActions;
        },

        setActiveDialog(state, id) {
            state.activeDialogId = id;
            state.messages = messages.filter(item => item.chatId === id);
        },
        toggleShowArchive(state) {
            state.showArchive = !state.showArchive;
        },
        toggleRenameDialog(state, id) {
            state.renameDialog = id;
        }
    },
    actions: {
    }
})