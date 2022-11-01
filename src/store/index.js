import { createStore } from 'vuex';
import { messages, dialogs, orders, users } from '@/data/index';
import { formatingText } from '@/helpers/index';
import modalWindows from './modules/modalWindows';

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

        isCreateChat: false,
        
        isCreateChatToUser: false,
        isCreateChatToOrder: false,

        ChatDialogMenu: null,
        renameDialog: null,

        visibleChatHeaderActions: false,
        searchMessageText: '',
        messages: [],

        users,
        orders,
        createChatPopup: {
            users: {
                visible: false,
                selected: null,
                search: ''
            },
            orders: {
                visible: false,
                selected: null,
                search: ''
            }
        }
    },
    getters: {
        getDialogById: (state) => (id) => {
            return state.dialogs.find(item => item.id == id);
        },

        getDialogs(state) {
            return state.dialogs.filter(item => {
                const filterName = item.name.toLowerCase().includes(state.searchDialogText.toLowerCase());
                const filterUnRead = state.unReadMessages ? item.unReadCount > 0 : true;
                const filterArchiv = !item.archiveDialog;
                const filterFixed = !item.fixedDialog;

                return filterName && filterUnRead && filterArchiv && filterFixed;
            })
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

        getOrders(state) {
            const search = state.createChatPopup.orders.search;
            return state.orders.filter(item => {
                if (search) {
                    return item.name.toLowerCase().includes(search.toLowerCase());
                }
                return true;
            });
        },
        getOrderById(state) {
            const item = state.isCreateChatToUser ? 'users' : 'orders';
            const selected = state.createChatPopup[item].selected;

            return state.orders.find(item => item.id == selected);
        },

        getUsers(state) {
            const search = state.createChatPopup.users.search;
            return state.users.filter(item => {
                if (search) {
                    return item.name.toLowerCase().includes(search.toLowerCase());
                }
                return true;
            });
        },
        getUserById(state) {
            const item = state.isCreateChatToUser ? 'users' : 'orders';
            const selected = state.createChatPopup[item].selected;

            return state.users.find(item => item.id == selected);
        },

        getCreateChatSearch(state) {
            const item = state.isCreateChatToUser ? 'users' : 'orders';

            console.log('Вызываем...');

            return state.createChatPopup[item].search;
        },


        isUnreadDialogs(state) {
            return state.dialogs.filter(item => item.unReadCount > 0).length > 0;
        },
        getArchiveDialogs(state) {
            return state.dialogs.filter(item => {
                const filterArchiv = item.archiveDialog;

                return filterArchiv;
            })
        },
        getFixedDialogs(state) {
            return state.dialogs.filter(item => {

                const filterName = item.name.toLowerCase().includes(state.searchDialogText.toLowerCase());
                const filterUnRead = state.unReadMessages ? item.unReadCount > 0 : true;
                const filterArchiv = !item.archiveDialog;
                const filterFixed = item.fixedDialog;

                return filterName && filterUnRead && filterArchiv && filterFixed;
            })
        }
    },
    mutations: {
        sortDialogs(state) {
            state.dialogs.sort((a, b) => {
                const aDate = a.lastMessage.date.getTime();
                const bDate = b.lastMessage.date.getTime();
                if (state.descSort) {
                    return bDate - aDate;
                }
                return aDate - bDate
            });
        },
        sortFixedDialog(state) {
            state.dialogs.sort((a, b) => b.fixedDialog - a.fixedDialog)
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
        },
        toggleFixedDialog(state) {
            const id = state.activeDialogId;
            const dialog = state.dialogs.find(item => item.id == id);
            if (dialog) {
                dialog.fixedDialog = !dialog.fixedDialog
            }
        },
        moveDialogToArchive(state) {
            const id = state.activeDialogId;
            const dialog = state.dialogs.find(item => item.id == id);
            if (dialog) {
                dialog.archiveDialog = !dialog.archiveDialog;
                dialog.fixedDialog = false;
            }
        },
        toggleChatDialogMenu(state, id) {
            state.ChatDialogMenu == id ? state.ChatDialogMenu = null : state.ChatDialogMenu = id;
        },
        renameDialog(state, name) {
            const id = state.activeDialogId;
            const dialog = state.dialogs.find(item => item.id == id);
            if (dialog) {
                dialog.name = name;
            }
        },

        toggleCreateChat(state) {
            state.isCreateChat = !state.isCreateChat;
        },
        toggleCreateChatToUser(state) {
            state.isCreateChatToUser = !state.isCreateChatToUser;
            state.isCreateChatToOrder = false;
        },
        toggleCreateChatToOrder(state) {
            state.isCreateChatToOrder = !state.isCreateChatToOrder;
            state.isCreateChatToUser = false;
        },

        toggleVisibleListCreateChat(state) {
            const item = state.isCreateChatToUser ? 'users' : 'orders';

            state.createChatPopup[item].visible = !state.createChatPopup[item].visible;
        },
        selectItemCreateChat(state, id) {

            console.log(id);

            const item = state.isCreateChatToUser ? 'users' : 'orders';

            state.createChatPopup[item].selected = id;
        },
        inputSearchCreateChat(state, text) {
            const item = state.isCreateChatToUser ? 'users' : 'orders';

            state.createChatPopup[item].search = text;
            if (!state.createChatPopup[item].visible) {
                state.createChatPopup[item].visible = true;
            }
        }
    },
    actions: {
    },
    modules: {
        modalWindows
    }
})