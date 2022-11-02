<template>
    <div class="chat-body_content my-scroll" ref="chatBody">
        <div class="empty-dialog " v-if="!activeDialogId && !isCreateChat && !isCreateChatToUser && !isCreateChatToOrder">
            <img class="union-messages" src="@/assets/images/union-messages.png" alt="">
            <p>Выберите чат</p>
            <p>или <span class="chat-popup">
                создайте новый 
                <img class="arrow-bottom" src="@/assets/images/checkmarkdown.svg" alt="">
            </span></p>
        </div>
        <div class="message-list" v-else>
            <Message v-for="(message, index) in messages" :pre-message="index-1 >= 0 ? messages[index-1] : null" :message="message" :key="message.id" />
        </div>
    </div>
</template>

<script>

import Message from './Message.vue';
import { mapGetters, mapState } from 'vuex';

export default {
    components: {
        Message
    },
    mounted() {
        this.$store.watch(() => this.activeDialogId, () => {
            this.$nextTick(() => {
                const chatBody = this.$refs.chatBody;
                if (chatBody) {
                    chatBody.scrollTop = chatBody.scrollHeight;
                }
            })
        }),
        this.$store.watch(() => this.messages, () => {
            this.$nextTick(() => {
                const chatBody = this.$refs.chatBody;
                if (chatBody) {
                    chatBody.scrollTop = chatBody.scrollHeight;
                }
            })
        })
    },
    computed: {
        ...mapState(['isCreateChat', 'activeDialogId', 'isCreateChatToUser', 'isCreateChatToOrder']),
        ...mapGetters({
            messages: 'getMessages'
        })
    }
}
</script>

<style scoped>

    .chat-body_content {
        width: 100%;
        padding: 24px 14px;
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow-y: auto;
    }
    .empty-dialog {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: default;
        user-select: none;
    }
    .empty-dialog img.union-messages {
        width: 100px;
        height: auto;
        margin-bottom: 20px;
    }
    .empty-dialog p {
        color: #7D95BD;
        line-height: 20px;
    }
    .empty-dialog p span {
        color: #2E5599;
        cursor: pointer;
    }
    .empty-dialog .arrow-bottom {
        position: relative;
        width: 13px;
        height: auto;
        z-index: 1;
    }

    .message-list {
        height: auto;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

</style>