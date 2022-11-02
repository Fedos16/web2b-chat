<template>
    <div class="chat-body_header_search chat-popup">
        <img v-if="!selectedUser" src="@/assets/images/user.svg" alt="">
        <div class="chat-body_header_user-info" v-if="selectedUser">
            <div class="chat-body_header_user-info__avatar">
                <img :src="selectedUser.img || require('@/assets/images/tehSupport.svg')" alt="">
            </div>
            <div class="chat-body_header_user-info__user-name">
                <b :title="selectedUser.name">{{ selectedUser.name }}</b>
            </div>
        </div>
        <input v-if="!selectedUser" type="text" placeholder="Введите имя пользователя или выберите из списка" ref="searchInput" @input="inputSearchCreateChat">
        <button v-if="!selectedUser" class="chat-button-invisible margin-r--15" @click="toggleVisibleCreateChat">
            <img :class="popup.users.visible ? 'top-arrow' : ''" src="@/assets/images/checkmarkdown.svg" alt="">
        </button>
        <button v-if="selectedUser" class="chat-button-invisible margin-r--15" @click="hideListCreateChat">
            <img src="@/assets/images/crossclose.svg" alt="">
        </button>
        <button class="chat-button main-button margin-r--10" :disabled="!selectedUser" @click="createChat">Создать чат</button>
        <button class="chat-button secondary-button" @click="toggleCreateChatToUser">Отмена</button>
        <CreateChatPopup v-if="popup.users.visible" :data="users" :title="title" />
    </div>
</template>

<script>
import CreateChatPopup from '@/components/chat/popup/CreateChatPopup';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
    components: { CreateChatPopup },
    computed: {
        ...mapState({
            popup: 'createChatPopup'
        }),
        ...mapGetters({
            users: 'getUsers',
            selectedUser: 'getUserById'
        }),
        title() {
            return 'Контакты из заказов'
        }
    },
    methods: {
        ...mapMutations({
            toggleVisibleCreateChat: 'toggleVisibleListCreateChat',
            toggleCreateChatToUser: 'toggleCreateChatToUser',
            hideListCreateChat: 'hideListCreateChat'
        }),
        ...mapActions(['createChat']),
        inputSearchCreateChat() {
            this.$store.commit('inputSearchCreateChat', this.$refs.searchInput.value);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './header.scss';
</style>