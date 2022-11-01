<template>
    <div class="chat-body_header_search chat-popup">
        <img v-if="!selectedUser" src="@/assets/images/user.svg" alt="">
        <img v-else :src="selectedUser.img || require('@/assets/images/tehSupport.svg')" alt="">
        {{ selectedUser?.name || '' }}
        <!-- <input type="text" placeholder="Введите имя пользователя или выберите из списка" ref="searchInput" @input="inputSearchCreateChat"> -->
        <button class="chat-button-invisible margin-r--15" @click="toggleVisibleCreateChat">
            <img v-if="!selectedUser" src="@/assets/images/checkmarkdown.svg" alt="">
            <img v-else src="@/assets/images/crossclose.svg" alt="">
        </button>
        <button class="chat-button main-button margin-r--10">Найти</button>
        <button class="chat-button secondary-button" @click="toggleCreateChatToUser">Отмена</button>
        <CreateChatPopup v-if="popup.users.visible" :data="users" :title="title" />
    </div>
</template>

<script>
import CreateChatPopup from '@/components/chat/popup/CreateChatPopup';
import { mapGetters, mapMutations, mapState } from 'vuex';
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
        }),
        inputSearchCreateChat() {
            this.$store.commit('inputSearchCreateChat', this.$refs.searchInput.value);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './header.scss';
</style>