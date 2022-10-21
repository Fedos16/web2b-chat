<template>
    <div class="menu" v-if="showMenu">
        <div class="menu_search" @click="switchMenuSearch">
            <img src="@/assets/images/search.svg" alt="">
            <input type="text" class="menu_search__find" placeholder="Поиск" @input="search" v-model="searchName">
        </div>
        <div class="menu_actions">
            <img class="img" src="@/assets/images/letter.svg" alt="" v-if="showUnreadLatter" @click="showNotReadMessage">
            <img class="img" src="@/assets/images/unreadletter.svg" alt="" v-else @click="showReadMessage">
            <img class="arrow img" src="@/assets/images/arrowup.svg" alt="" v-if="sortDialogDate" @click="sortDialogsLastMassege">
            <img class="arrow1 img" src="@/assets/images/arrowup.svg" alt="" v-else @click="sortDialogsNewMassege">
            <div class="menu_actions__button">
                <button class="actions_button" @click="popapCreateChat">Создать чат<img src="@/assets/images/checkmarkdown.svg" alt=""></button>
                    <div class="popap-create-chat" v-if="!CreateChat">
                        <button class="popap-create-chat__button">С пользователем</button>
                        <button class="popap-create-chat__button">По заказу</button>
                    </div>
            </div>
        </div>
    </div>
    <div class="menu_find" v-else>
        <div class="menu_search__search">
            <img src="@/assets/images/search.svg" alt="">
            <input type="text" class="menu_search__input" placeholder="Поиск" ref="searchInput" @input="search" v-model="searchName">
            <img src="@/assets/images/crossclose.svg" alt="" @click="switchMenuSearch">
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    props: {
        dialogs: {
            type: Array,
            required: true,
        },
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
            showMenu: {
                type: Boolean,
                default: true,
            },
            showUnreadLatter: {
                type: Boolean,
                default: true,
            },
            CreateChat: {
                type: Boolean,
                default: false,
            },
            sortDialogDate: {
                type: Boolean,
                default: true,
            },
            searchName: ''
        }
    },
    emits: {
        dialogSearch: null,
        sortDialogsNewMassege: null,
        sortDialogsLastMassege: null,
        showNotReadMessege: null,
        showReadMessege: null
    },
    methods: {
        switchMenuSearch() {
            this.showMenu = !this.showMenu;
            if (this.searchName) this.searchName = '';
            this.search();
        },
        sortDialogsNewMassege(){
            this.sortDialogDate = !this.sortDialogDate;
            this.$emit('sortDialogsNewMassege');
        },
        sortDialogsLastMassege(){
            this.sortDialogDate = !this.sortDialogDate;
            this.$emit('sortDialogsLastMassege');
        },
        search() {
            this.$emit('dialogSearch',this.searchName);
        },
        popapCreateChat(){
            this.CreateChat = !this.CreateChat;
        },
        showNotReadMessage(){
            this.showUnreadLatter = !this.showUnreadLatter;
            this.$emit('showNotReadMessege')
        },
        showReadMessage(){
            this.showUnreadLatter = !this.showUnreadLatter;
            this.$emit('showReadMessege')
        }
    },
}
</script>

<style scoped>
.menu {
    min-height: 56px;
    max-height: 56px;
    display: flex;
    padding: 0px 10px 0px 20px;
    align-items: center;
    border-bottom: 1px solid #E7EFFD;
}
.menu_search {
    min-height: 56px;
    max-height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.menu_find {
    min-height: 56px;
    max-height: 56px;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 0px 20px;
    align-items: center;
    border-bottom: 1px solid #E7EFFD;
}
.menu_search__search {
    width: 100%;
    display: flex;
    align-items: center;
}
.menu_search__input {
    width: 100%;
    height: 100%;
    color: #102447;
    margin-left: 20px;
    cursor: pointer;
    border: none;
}
.menu_search__find {
    width: 50%;
    height: 100%;
    color: #7D95BD;
    margin-left: 20px;
    cursor: pointer;
    border: none;
}
.menu_actions {
    display: flex;
}
.actions_button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 132px;
    height: 38px;
    background: #E9EDF5;
    border-radius: 4px;
    border: none;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #2E5599;
    cursor: pointer;
}
.arrow{
    transform: rotate(180deg);
}
.popap-create-chat{
    display: block;
    position: absolute;
    width: 100%;
    z-index: 1;
}
.menu_actions__button{
    position: relative;
}
.popap-create-chat__button{
    width: 100%;
    min-height: 30px;
    border: none;
    background-color: #fff;
    text-align: left;
    color: #2E5599;
}
.popap-create-chat__button:hover{
    background-color: #F7F8FA;
}
.img{
    cursor: pointer;
}
</style>