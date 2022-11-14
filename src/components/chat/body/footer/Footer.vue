<template>
    <div class="chat-body_footer">
        <button class="chat-button-invisible close__block" v-if="replyMessages.type" @click="resetForwardedMessages">
            ×
        </button>
        <div class="chat-body_footer__forwarder my-scroll" v-if="replyMessages.type">
            <ForwardedList>
                <ForwardedMessage v-for="item in replyMessages.messages" :key="item.id" :message="item" />
            </ForwardedList>
        </div>
        <div class="chat-body_footer__section">
            <div class="chat-body_footer__input">
                <input type="text" placeholder="Введите текст сообщения" ref="inputTextMessage" @keyup.enter="handlerSendMessage">
                <img src="@/assets/images/attachment.svg" alt="">
            </div>
            <div class="chat-body_footer__send-message">
                <button class="chat-button-invisible" @click="handlerSendMessage">
                    <img src="@/assets/images/send-message.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

import ForwardedList from '../../messages/ForwardedList.vue';
import ForwardedMessage from '../../messages/ForwardedMessage.vue';

export default {
    mounted() {
        this.$store.watch(() => ([this.$store.state.activeDialogId, this.replyMessages.type]), () => {
            this.$nextTick(() => {
                const inputTextMessage = this.$refs.inputTextMessage;
                if (inputTextMessage) {
                    inputTextMessage.focus();
                }
            })
        })
    },
    components: { ForwardedList, ForwardedMessage },
    computed: {
        ...mapState({
            replyMessages: 'forwardedMessages'
        })
    },
    methods: {
        ...mapActions(['sendMessage']),
        ...mapMutations(['resetForwardedMessages']),
        handlerSendMessage() {
            const value = this.$refs.inputTextMessage.value;
            this.sendMessage(value);
            this.$refs.inputTextMessage.value = '';

            this.$refs.inputTextMessage.focus();
        }
    }
}
</script>

<style lang="scss" scoped>
    .chat-body_footer {
        padding: 8px 12px;
        background: #E7EFFD;
        display: flex;
        flex-direction: column;
        position: relative;

        .close__block {
            position: absolute;
            top: 5px;
            right: 20px;
            font-size: 30px;
            color: #2E5599;
            padding: 10px;
            cursor: pointer;
            background-color: #E7EFFD;
            line-height: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__forwarder {
            height: auto;
            max-height: 300px;
            overflow-y: auto;
        }

        &__section {
            width: 100%;
            display: flex;
        }

        &__input {
            width: 100%;
            height: 100%;
            background-color: white;
            border-radius: 4px;
            margin-right: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px;

            input {
                width: 100%;
                margin-right: 10px;
                border: none;
                color: var(--input-text-color);

                &::placeholder {
                    color: var(--input-placeholder-color);
                }
            }   
        }

        &__send-message {
            width: 48px;
            height: 100%;
            border-radius: 4px;
            background: #2E5599;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
</style>