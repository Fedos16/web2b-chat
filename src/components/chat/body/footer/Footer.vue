<template>
    <div class="chat-body_footer" v-if="messages.length > 0">
        <div class="chat-body_footer__section">
            <input type="text" placeholder="Введите текст сообщения" ref="inputTextMessage">
            <img src="@/assets/images/attachment.svg" alt="">
        </div>
        <div class="chat-body_footer__send-message">
            <img src="@/assets/images/send-message.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.watch(() => this.$store.state.activeDialog, () => {
            this.$nextTick(() => {
                const inputTextMessage = this.$refs.inputTextMessage;
                if (inputTextMessage) {
                    inputTextMessage.focus();
                }
            })
        })
    },
    computed: {
        messages() {
            return this.$store.getters.getMessages;
        }
    }
}
</script>

<style scoped>
    .chat-body_footer {
        min-height: 64px;
        padding: 8px;
        background: #E7EFFD;
        display: flex;
    }
    .chat-body_footer__section {
        width: 100%;
        height: 100%;
        background-color: white;
        border-radius: 4px;
        margin-right: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
    }
    .chat-body_footer__section input {
        width: 100%;
        margin-right: 10px;
        border: none;
        color: var(--input-text-color);
    }
    .chat-body_footer__section input::placeholder {
        color: var(--input-placeholder-color);
    }
    .chat-body_footer__send-message {
        width: 48px;
        height: 100%;
        border-radius: 4px;
        background: #2E5599;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>