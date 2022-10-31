import { users } from "@/data";

export default {
    namespaced: true,
    state: () => ({
        visibleModalWindow: false,
        addUser: {
            visible: false,
            title: 'Добавить пользователя',
            textSearch: '',
            selectedUsers: []
        },
        users
    }),
    getters: {
        getTitleModalWindow(state) {
            if (state.addUser.visible) return state.addUser.title;
        },
        getUsersToAdded(state) {

            const text = state.addUser.textSearch.toLowerCase();

            return state.users.filter(item => {
                if (text) {
                    return item.name.toLowerCase().includes(text);
                }
                return item.type === 'contact';
            }).sort((a, b) => a.sort - b.sort);
        }
    },
    mutations: {
        showAddUser(state) {
            state.addUser.visible = true;
            this.commit('modalWindows/showModalWindow');
            this.commit('modalWindows/setTextSearch', '');
        },
        showModalWindow(state) {
            state.visibleModalWindow = true;
        },
        hideModalWindow(state) {
            state.visibleModalWindow = false;
            state.addUser.visible = false;
        },
        setTextSearch(state, text) {
            state.addUser.textSearch = text;
        },
        appendOrRemoveUser(state, id) {
            const arr = state.addUser.selectedUsers;
            if (arr.includes(id)) {
                state.addUser.selectedUsers = arr.filter(item => item != id);
            } else {
                state.addUser.selectedUsers.push(id);
            }
        }
    },
    actions: {

    }
}