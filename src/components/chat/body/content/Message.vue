<template>
    <div class="message__title" v-if="isShowTitleChat">{{ dateMessage }}</div>
    <div class="message-list_row" :class="classMessage">
        <div class="message-list_row__autor" v-if="(currentIncomming && !previosIncomming) || (isShowTitleChat && currentIncomming)">
            {{ message.user.name }}
        </div>
        <div class="message-list_row__message-content">
            <div class="message-list_row_message">
                <div class="message-list_row__column">
                    <div class="message-list_row_message__text" v-html="message.findedText || message.text"></div>
                    <div class="message-list_row_message_attached-list" v-if="message.attachedFiles.length > 0">
                        <div class="message-list_row_message__attached" v-for="file in message.attachedFiles">
                            <div class="attached__file"></div>
                            <div class="attached__info">
                                <b>{{file.name}}</b>
                                <p>{{file.format}}, {{file.size}} {{file.unit}}</p>
                            </div>
                            <div class="attached__action attached__download"></div>
                        </div>
                    </div>
                    <ForwardedList v-if="message.forwarded?.type" :title="titleForwardedMessage">
                        <ForwardedMessage v-for="item in message.forwarded?.messages" :message="item" :key="item.id" />
                    </ForwardedList>
                </div>
                <div class="message-list_row_message__time">{{ timeFormat(message.date) }}</div>
            </div>
            <div class="message-list_row__action chat-popup" @click="toggleMenuMessage">
                <ChatPopUp v-if="visiblePopUp" :data="menuMessage" />
            </div>
        </div>
    </div>
</template>

<script>

import { timeFormat, dateTitleChat, dateDifference } from '@/helpers/index';
import { mapMutations, mapState } from 'vuex';
import ChatPopUp from '../../popup/ChatPopUp.vue';
import ForwardedList from '../../messages/ForwardedList.vue';
import ForwardedMessage from '../../messages/ForwardedMessage.vue';

export default {
    components: { ChatPopUp, ForwardedList, ForwardedMessage },
    props: {
        message: {
            type: Object,
            require: true
        },
        preMessage: {
            type: [Object, null],
            require: true
        }
    },
    computed: {
        ...mapState({
            currentUser: 'currentUser'
        }),
        currentIncomming() {
            return this.currentUser.id !== this.message.user.id;
        },
        previosIncomming() {
            return (this.preMessage ? this.currentUser.id !== this.preMessage.user.id : false);
        },
        classMessage() {
            return {
                'message-list_row--incoming': this.currentIncomming,
                'message-list_row--outgoing': !this.currentIncomming,
                'message-list_row--unread': this.message.unRead && this.currentIncomming
            }
        },
        isShowTitleChat() {
            if (!this.preMessage) return true;

            const days = dateDifference(this.message.date, this.preMessage.date);

            return days > 1;
        },
        dateMessage() {
            return dateTitleChat(this.message.date);
        },
        visiblePopUp() {
            return this.$store.state.messageMenuId == this.message.id;
        },
        titleForwardedMessage() {
            const { type, messages } = this.message?.forwarded;
            if (type === 'reply') return '';
            return messages.length > 1 ? 'Пересланные сообщения' : 'Пересланное сообщение';
        },
        menuMessage() {
            const menu = [
                { id: 'mm-1', name: 'Ответить', handler: this.handlerSetReplyMessages },
                { id: 'mm-2', name: 'Выбрать', handler: null },
                { id: 'mm-3', name: 'Переслать', handler: null }
            ];

            return menu;
        }
    },
    methods: {
        timeFormat,
        ...mapMutations(['setForwardedMessages']),
        handlerSetReplyMessages() {
            this.setForwardedMessages({ type: 'reply', message: this.message });
        },
        toggleMenuMessage() {
            this.$store.commit('toggleVisibleMenuMessage', this.message.id);
        }
    }
}
</script>

<style lang="scss" scoped>

    .message__title {
        position: sticky;
        top: 5px;
        width: 200px;
        margin: 0px auto;
        text-align: center;
        padding: 8px;
        background-color: #fff;
        color: #7D95BD;
    }
    .message-list_row {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0px 12px;

        &__column {
            display: flex;
            flex-direction: column;
        }

        &--incoming {
            align-items: flex-start;
        }

        &--outgoing {
            align-items: flex-end;
            
            .message-list_row__message-content {
                flex-direction: row-reverse;
            }
        }

        &--unread {
            background-color: #E9EDF5;
        }

        &__autor {
            margin-bottom: 5px;
            color: #102447;
            font-weight: 600;
            padding-left: 12px;
            padding-top: 8px;
        }

        &__message-content {
            display: flex;
        }

        &__action {
            width: 20px;
            height: 20px;
            background-image: url('@/assets/images/menu.svg');
            background-size: cover;
            background-position: center;
            cursor: pointer;
            transition: 200ms;
            margin: 0px 5px;

            &:hover {
                border-radius: 50%;
                background-color: var(--button-secondary-background);
            }
        }

        &_message {
            width: auto;
            max-width: 404px;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            flex-wrap: wrap;
            padding: 12px;
            background-color: #F7F8FA;
            margin-bottom: 8px;

            &__text {
                margin-right: 5px;
                line-height: 20px;
                word-break: break-word;
            }

            &__time {
                font-size: 12px;
                color: #7D95BD;
                font-feature-settings: 'pnum' on, 'lnum' on;
                width: 100%;
                text-align: right;
                margin-top: -20px;
                margin-left: 10px;
            }

            &_attached-list {
                margin-top: 20px;
                display: flex;
                flex-wrap: wrap;
            }
            &__attached {
                width: auto;
                height: auto;
                display: flex;
                align-items: center;
                margin-right: 20px;
                padding: 10px 5px;
                border-radius: 4px;

                &:hover {
                    background-color: #fff;
                }

                .attached__file {
                    width: 21px;
                    height: 27px;
                    background-image: url('@/assets/images/file.png');
                    background-size: cover;
                    margin-right: 10px;
                }

                .attached__info {
                    margin-right: 10px;

                    p {
                        color: #7D95BD;
                    }
                }

                .attached__download {
                    width: 14px;
                    height: 11px;
                    background-image: url('@/assets/images/download-file.png');
                    background-size: cover;
                    cursor: pointer;
                }
            }
        }
    }

</style>