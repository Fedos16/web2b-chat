<template>
    <div class="chat-body_header_search">
        <img src="@/assets/images/user.svg" alt="">
        <input type="text" placeholder="Введите имя пользователя или выберите из списка" ref="searchInput">
        <button class="chat-button-invisible margin-r--15">
            <img src="@/assets/images/checkmarkdown.svg" alt="">
        </button>
        <button class="chat-button main-button margin-r--10">Найти</button>
        <button class="chat-button secondary-button" @click="toggleCreateChatToUser">Отмена</button>
    </div>
</template>

<script>
export default {
    methods: {
        toggleCreateChatToUser() {
            this.$store.commit('toggleCreateChatToUser');
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './header.scss';
</style>