import { createStore } from 'vuex';
import { messages, setMessage, dialogs, orders, users } from '@/data/index';
import { formatingText } from '@/helpers/index';
import modalWindows from './modules/modalWindows';

export default createStore({
    state: {
        userName: 'my_id',

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

        viewChatId: null,

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
        getUsersFromChat(state) {
            const dialog = state.dialogs.find(item => item.id == state.activeDialogId);
            const dialogUsers = dialog.users;

            const findedUsers = state.users.filter(item => dialogUsers.includes(item.id));

            return findedUsers;

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
            return state.dialogs.filter(item => item.archiveDialog);
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

                if (!a.lastMessage?.date) return 0;

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
            this.commit('setActiveDialog', null);
        },
        toggleCreateChatToUser(state) {
            state.isCreateChatToUser = !state.isCreateChatToUser;
            state.isCreateChatToOrder = false;

            if (!state.isCreateChatToUser) {
                state.createChatPopup.users.search = '';
                state.createChatPopup.users.visible = false;
                state.createChatPopup.users.selected = null;
            }
        },
        toggleCreateChatToOrder(state) {
            state.isCreateChatToOrder = !state.isCreateChatToOrder;
            state.isCreateChatToUser = false;

            if (!state.isCreateChatToOrder) {
                state.createChatPopup.orders.search = '';
                state.createChatPopup.orders.visible = false;
                state.createChatPopup.orders.selected = null;
            }
        },

        toggleVisibleListCreateChat(state) {
            const item = state.isCreateChatToUser ? 'users' : 'orders';

            state.createChatPopup[item].visible = !state.createChatPopup[item].visible;
        },
        hideListCreateChat(state) {
            const item = state.isCreateChatToUser ? 'users' : 'orders';
            state.createChatPopup[item].visible = false;
            state.createChatPopup[item].selected = null;
            state.createChatPopup[item].search = '';

        },
        selectItemCreateChat(state, id) {

            const item = state.isCreateChatToUser ? 'users' : 'orders';

            state.createChatPopup[item].selected = id;
            state.createChatPopup[item].visible = false;
        },
        inputSearchCreateChat(state, text) {
            const item = state.isCreateChatToUser ? 'users' : 'orders';

            state.createChatPopup[item].search = text;
            if (!state.createChatPopup[item].visible) {
                state.createChatPopup[item].visible = true;
            }
        },

        appendDialog(state, dialog) {
            state.dialogs.push(dialog);
        },
        appendMessage(state, message) {
            state.messages.push(message);
        },
        appendUsersForDialog(state, users) {
            const activeDialogId = state.activeDialogId;
            const dialog = state.dialogs.find(item => item.id == activeDialogId);
            dialog.users.push(...users);
        },

        setViewChatId(state, id) {
            if (state.viewChatId == id) return state.viewChatId = null;
            state.viewChatId = id;
        },
        writeToUser(state, id) {
            const dialog = state.dialogs.find(item => item.users.includes(id) && item.typeDialog == 'user');
            if (dialog) {
                state.activeDialogId = dialog.id;
            } else {
                const countDialogs = state.dialogs.length;
                const dialogID = countDialogs + 1;

                const user = state.users.find(item => item.id == id);

                const dialog = {
                    id: dialogID,
                    name: user.name,
                    icon: user?.img || null,
                    typeDialog: 'user',
                    unReadCount: 0,
                    additionalInfo: {
                        numOrder: null
                    },
                    archiveDialog: false,
                    fixedDialog: false,
                    lastMessage: {},
                    users: [state.userName, id],
                }

                this.commit('appendDialog', dialog);
                state.activeDialogId = dialogID;
            }

            state.viewChatId = null;
            state.modalWindows.viewUsers.visible = false;

            state.activeDialogId
        }
    },
    actions: {
        createChat({ state, commit }) {
            const item = state.isCreateChatToUser ? 'users' : 'orders';
            const idSelected = state.createChatPopup[item].selected;
            const essence = state[item].find(item => item.id == idSelected);

            const chatName = essence.name;

            const countDialogs = state.dialogs.length;
            const dialog = {
                id: countDialogs + 1,
                name: chatName,
                icon: essence?.img || null,
                typeDialog: item == 'users' ? 'user' : 'order',
                unReadCount: 0,
                additionalInfo: {
                    numOrder: item == 'users' ? null : essence.num
                },
                archiveDialog: false,
                fixedDialog: false,
                lastMessage: {},
                users: [state.userName, idSelected],
            }

            commit('appendDialog', dialog);

            if (item == 'users') {
                commit('toggleCreateChatToUser');
            } else {
                commit('toggleCreateChatToOrder');
            }

            commit('setActiveDialog', dialog.id);
        },
        sendMessage({ state, commit }, payload) {
            const countMessages = state.messages.length;
            const activeDialogId = state.activeDialogId;
            const activeUser = state.userName;

            const message = {
                id: countMessages + 1,
                chatId: activeDialogId,
                text: payload,
                user: activeUser,
                incoming: false,
                date: new Date()
            }

            if (payload) {
                setMessage(message);
                commit('appendMessage', message);

                const dialog = state.dialogs.find(item => item.id == activeDialogId);
                dialog.lastMessage = {
                    text: message.text,
                    user: message.user,
                    date: message.date
                }

            }
        }
    },
    modules: {
        modalWindows
    }
})