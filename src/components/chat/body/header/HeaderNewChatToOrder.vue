<template>
    <div class="chat-body_header_search chat-popup">
        <img v-if="!selectedOrder" src="@/assets/images/order.svg" alt="">
        <img v-else :src="selectedOrder.img || require('@/assets/images/tehSupport.svg')" alt="">
        <input type="text" placeholder="Введите номер заказа или выберите из списка" ref="searchInput" @input="inputSearchCreateChat">
        <button class="chat-button-invisible margin-r--15" @click="toggleVisibleCreateChat">
            <img v-if="!selectedOrder" src="@/assets/images/checkmarkdown.svg" alt="">
            <img v-else src="@/assets/images/crossclose.svg" alt="">
        </button>
        <button class="chat-button main-button margin-r--10">Найти</button>
        <button class="chat-button secondary-button" @click="toggleCreateChatToOrder">Отмена</button>
        <CreateChatPopup v-if="popup.orders.visible" :data="orders" :title="title" />
    </div>
</template>

<script>
import CreateChatPopup from '@/components/chat/popup/CreateChatPopup';
import { mapGetters, mapMutations, mapState } from 'vuex';
export default {
    components: { CreateChatPopup },
    computed: {
        ...mapState({
            popup: 'createChatPopup',
        }),
        ...mapGetters({
            orders: 'getOrders',
            selectedOrder: 'getOrderById'
        }),
        title() {
            return 'Мои заказы'
        }
    },
    methods: {
        ...mapMutations({
            toggleVisibleCreateChat: 'toggleVisibleListCreateChat',
            toggleCreateChatToOrder: 'toggleCreateChatToOrder',
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