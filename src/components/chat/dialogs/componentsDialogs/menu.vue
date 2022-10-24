<template>
    <div class="menu">
        <div class="menu_search" @click="switchMenuSearch">
            <img src="@/assets/images/search.svg" alt="">
            <input type="text" class="menu_search__find" placeholder="Поиск" ref="searchInput" v-model="searchText" :readonly="!showMenu">
        </div>
        <div class="menu_actions" v-if="!showMenu">
            <img class="img" :src="imageUnReadMessages" alt="" @click="switchUnReadMessges">
            <img :class="classTypeSort" src="@/assets/images/arrowup.svg" alt="" @click="sortDialogs">
            <div class="menu_actions__button">
                <button class="actions_button" @click="popapCreateChat">Создать чат<img src="@/assets/images/checkmarkdown.svg" alt=""></button>
                <div class="popap-create-chat" v-if="!CreateChat">
                    <button class="popap-create-chat__button">С пользователем</button>
                    <button class="popap-create-chat__button">По заказу</button>
                </div>
            </div>
        </div>
        <img src="@/assets/images/crossclose.svg" alt="" @click="switchMenuSearch" v-if="showMenu">
    </div>
</template>

<script>
export default {
    data() {
        return {
            CreateChat: {
                type: Boolean,
                default: false,
            }
        }
    },
    computed: {
        showMenu() {
            return this.$store.state.activeDialogSearch;
        },
        searchText: {
            get() {
                return this.$store.state.searchDialogText;
            },
            set(value) {
                this.$store.commit('updateSearchDialogText', value);
            }
        },
        unReadMessages() {
            return this.$store.state.unReadMessages;
        },
        imageUnReadMessages() {
            return this.unReadMessages ? require('@/assets/images/unreadletter.svg') : require('@/assets/images/letter.svg');
        },
        classTypeSort() {
            return {
                'img': true,
                'arrow': !this.$store.state.descSort
            }
        }

    },
    methods: {
        switchMenuSearch() {
            this.$store.commit('toggleActiveDialogSearch');
            if (this.showMenu) {
                this.$refs.searchInput.focus();
            }
        },
        switchUnReadMessges() {
            this.$store.commit('toggleUnReadMessages');
        },
        sortDialogs() {
            this.$store.commit('swithTypeSort');
            this.$store.commit('sortDialogs');
        },
        popapCreateChat(){
            this.CreateChat = !this.CreateChat;
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
    .menu_search input::placeholder {
        color: var(--input-placeholder-color);
    }
    .menu_search input {
        color: var(----input-text-color);
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
        justify-content: space-around;
        align-items: center;
        width: 132px;
        height: 38px;
        background: #E9EDF5;
        border-radius: 4px;
        border: none;
        order: 1;
        flex-grow: 0;
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