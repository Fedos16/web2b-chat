<template>
    <div class="menu">
        <div class="menu_search" @click="switchMenuSearch">
            <img src="@/assets/images/search.svg" alt="">
            <input type="text" class="menu_search__find" placeholder="Поиск" ref="searchInput" v-model="searchText" :readonly="!showMenu">
        </div>
        <div class="menu_actions" v-show="!showMenu">
            <button class="chat-button-invisible" :disabled="!isUnreadDialogs" @click="switchUnReadMessges"><img class="img" :src="imageUnReadMessages" alt="" ></button>
            <button class="chat-button-invisible"  @click="sortDialogs"><img :class="classTypeSort" src="@/assets/images/arrowup.svg" alt=""></button>
            <div class="menu_actions__button chat-popup">
                <button class="actions_button" @click="switchCreateChat">
                    Создать чат<img :class="classCreateChat" src="@/assets/images/checkmarkdown.svg">
                </button>
                <ChatPopup v-if="isCreateChat" :data="menuCreateChat" @handlerClose="switchCreateChat" />
            </div>
        </div>
        <img src="@/assets/images/crossclose.svg" alt="" @click="switchMenuSearch" v-show="showMenu">
    </div>
</template>

<script>

import ChatPopup from '@/components/chat/popup/ChatPopUp';

export default {
    components: { ChatPopup },
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
        isUnreadDialogs() {
            return this.$store.getters.isUnreadDialogs;
        },
        imageUnReadMessages() {
            return this.unReadMessages ? require('@/assets/images/unreadletter.svg') : require('@/assets/images/letter.svg');
        },
        classTypeSort() {
            return {
                'img': true,
                'arrow': !this.$store.state.descSort
            }
        },
        isCreateChat() {
            return this.$store.state.isCreateChat;
        },
        menuCreateChat() {
            return [
                { id: 'cch-1', name: 'С пользователем', icon: require('@/assets/images/user.svg'), handler: this.toggleCreateChatToUser },
                { id: 'cch-2', name: 'По заказу', icon: require('@/assets/images/order.svg'), handler: this.toggleCreateChatToOrder }
            ]
        },
        classCreateChat() {
            return this.isCreateChat ? 'top-arrow' : 'normal-arrow';
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
        switchCreateChat() {
            this.$store.commit('toggleCreateChat');
        },
        sortDialogs() {
            this.$store.commit('swithTypeSort');
            this.$store.commit('sortDialogs');
        },
        toggleCreateChatToUser() {
            this.$store.commit('toggleCreateChatToUser');
        },
        toggleCreateChatToOrder() {
            this.$store.commit('toggleCreateChatToOrder');
        }
    },
}
</script>

<style lang="scss" scoped>
    .menu {
        min-height: 56px;
        max-height: 56px;
        display: flex;
        padding: 0px 10px 0px 20px;
        align-items: center;
        border-bottom: 1px solid #E7EFFD;

        .menu_search {
            min-height: 56px;
            max-height: 56px;
            width: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;

            input {
                width: 100%;
                color: var(----input-text-color);

                &::placeholder {
                    color: var(--input-placeholder-color);
                }
            }

            &__find {
                width: 50%;
                height: 100%;
                color: #7D95BD;
                margin-left: 20px;
                cursor: pointer;
                border: none;
            }
        }

        .menu_actions {
            display: flex;

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

            .menu_actions__button{
                position: relative;
            }
        }
    }
    .arrow {
        transform: rotate(180deg);
    }
</style>