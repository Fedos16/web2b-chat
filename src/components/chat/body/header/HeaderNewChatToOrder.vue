<template>
    <div class="chat-body_header_search chat-popup">
        <img v-if="!selectedOrder" src="@/assets/images/order.svg" alt="">
        <div class="chat-body_header_user-info" v-if="selectedOrder">
            <div class="chat-body_header_user-info__avatar">
                <img :src="selectedOrder.img || require('@/assets/images/tehSupport.svg')" alt="">
            </div>
            <div class="chat-body_header_user-info__user-name">
                <b :title="selectedOrder.name">{{ selectedOrder.name }}</b>
            </div>
        </div>
        <input v-if="!selectedOrder" type="text" placeholder="Введите имя пользователя или выберите из списка" ref="searchInput" @input="inputSearchCreateChat">
        <button v-if="!selectedOrder" class="chat-button-invisible margin-r--15" @click="toggleVisibleCreateChat">
            <img :class="popup.orders.visible ? 'top-arrow' : ''" src="@/assets/images/checkmarkdown.svg" alt="">
        </button>
        <button v-if="selectedOrder" class="chat-button-invisible margin-r--15" @click="hideListCreateChat">
            <img src="@/assets/images/crossclose.svg" alt="">
        </button>
        <button class="chat-button main-button margin-r--10" :disabled="!selectedOrder" @click="createChat">Создать чат</button>
        <button class="chat-button secondary-button" @click="toggleCreateChatToOrder">Отмена</button>
        <CreateChatPopup v-if="popup.orders.visible" :data="orders" :title="title" />
    </div>
</template>

<script>
import CreateChatPopup from '@/components/chat/popup/CreateChatPopup';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
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