<template>
    <div class="menu" v-if="showMenu">
        <div class="menu_search" @click="switchMenuSearch">
            <img src="@/assets/images/search.svg" alt="">
            <div class="menu_search__find">Поиск</div>
        </div>
        <div class="menu_actions">
            <img src="@/assets/images/letter.svg" alt="" v-if="showUnreadLatter" @click="switchLatter">
            <img src="@/assets/images/unreadletter.svg" alt="" v-else @click="switchLatter">
            <img src="@/assets/images/arrowup.svg" alt="">
            <div class="menu_actions__button">
                <button class="actions_button">Создать чат <img src="@/assets/images/checkmarkdown.svg" alt=""></button>
            </div>
        </div>
    </div>
    <div class="menu_find" v-else>
        <div class="menu_search__search">
            <img src="@/assets/images/search.svg" alt="">
            <input type="text" class="menu_search__input" placeholder="Поиск" @input="search" v-model="searchName">
            <img src="@/assets/images/crossclose.svg" alt="" @click="switchMenuSearch">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dialogs: {
            type: Array,
            required: true,
        },
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
            searchName: ''
        }
    },
    emits: {
        dialogSearch: null,
    },
    methods: {
        switchMenuSearch() {
            this.showMenu = !this.showMenu;
            if (this.searchName) this.searchName = '';
            this.search();
        },
        switchLatter(){
            this.showUnreadLatter = !this.showUnreadLatter;
        },
        search() {
            this.$emit('dialogSearch',this.searchName);
        }
    },
}
</script>

<style scoped>
.menu {
    min-height: 56px;
    max-height: 56px;
    display: flex;
    justify-content: space-between;
    padding: 0px 8px;
    align-items: center;
    border-bottom: 1px solid #E7EFFD;
}
.menu_search {
    width: 100%;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
}
.menu_find {
    min-height: 56px;
    max-height: 56px;
    display: flex;
    justify-content: space-between;
    padding: 0px 8px;
    align-items: center;
    border-bottom: 1px solid #E7EFFD;
}
.menu_search__search {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.menu_search__input {
    width: 100%;
    height: 100%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #102447;
    margin-left: 21px;
    border: none;
    cursor: pointer;
}
.menu_search__find {
    width: 50px;
    height: 20px;
    line-height: 20px;
    color: #7D95BD;flex: none;
    cursor: pointer;
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
</style>