<template>
    <div class="chat-body_header_search">
        <img src="@/assets/images/order.svg" alt="">
        <input type="text" placeholder="Введите номер заказа или выберите из списка" ref="searchInput">
        <button class="chat-button-invisible margin-r--15">
            <img src="@/assets/images/checkmarkdown.svg" alt="">
        </button>
        <button class="chat-button main-button margin-r--10">Найти</button>
        <button class="chat-button secondary-button" @click="toggleCreateChatToOrder">Отмена</button>
    </div>
</template>

<script>
export default {
    methods: {
        toggleCreateChatToOrder() {
            this.$store.commit('toggleCreateChatToOrder');
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './header.scss';
</style>