<template>
    <div class="chat-dropdown" v-if="isChatActions">
        <ul>
            <li v-for="item in chatActions" :key="item">{{ item }}</li>
        </ul>
    </div>
    <div class="chat-dropdown_backdrop" v-if="isChatActions" @click="toggleChatActions"></div>
</template>

<script>
export default {

    computed: {
        chatActions() {
            return this.$store.state.chatActions;
        },
        isChatActions() {
            return this.$store.state.isVisibleChatActions;
        }
    },
    methods: {
        toggleChatActions() {
            this.$store.commit('toggleChatActions');
        }
    }
}
</script>

<style scoped>
    .chat-dropdown {
        position: absolute;
        top: 100%;
        right: 0%;
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #fff;
        box-shadow: 0px 4px 64px rgba(111, 149, 245, 0.16);
        border-radius: 4px;
        z-index: 3;
    }
    .chat-dropdown_backdrop {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 2;
    }
    .chat-dropdown ul {
        padding: 18px 0px;
    }
    .chat-dropdown ul li {
        padding: 6px 24px;
        cursor: default;
        white-space: nowrap;
    }
    .chat-dropdown ul li:hover {
        background-color: #F7F8FA;
    }
</style>