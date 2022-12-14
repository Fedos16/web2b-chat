import { createStore } from 'vuex';
import { messages, dialogs } from '@/data/index';
import { formatingText } from '@/helpers/index';

export default createStore({
    state: {
        activeDialogSearch: false,
        searchDialogText: '',
        dialogs,
        unReadMessages: false,
        descSort: true,

        activeDialog: null,

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

                const filterName = item.name.toLowerCase().includes(state.searchDialogText.toLowerCase());
                const filterUnRead = state.unReadMessages ? item.unReadCount > 0 : true;

                return filterName && filterUnRead;
            })
        },
    },
    mutations: {

        sortDialogs(state) {
            state.dialogs = state.dialogs.sort((a, b) => {
                const aDate = a.dateLastMsg.getTime();
                const bDate = b.dateLastMsg.getTime();

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
        }

    },
    actions: {
    }
})
