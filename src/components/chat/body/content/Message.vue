<template>
    <div class="message__title" v-if="isShowTitleChat">{{ dateMessage }}</div>
    <div class="message-list_row" :class="classMessage">
        <div class="message-list_row__autor" v-if="currentIncomming && !previosIncomming">
            {{ message.user.name }}
        </div>
        <div class="message-list_row__message-content">
            <div class="message-list_row_message">
                <div class="message-list_row_message__text" v-html="message.findedText || message.text"></div>
                <div class="message-list_row_message__time">{{ timeFormat(message.date) }}</div>
            </div>
            <div class="message-list_row__action"></div>
        </div>
    </div>
</template>

<script>

import { timeFormat, dateTitleChat, dateDifference } from '@/helpers/index';
import { mapState } from 'vuex';

export default {
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

            console.log('Тестик');

            const days = dateDifference(this.message.date, this.preMessage.date);

            console.log(days);

            return days > 1;
        },
        dateMessage() {
            return dateTitleChat(this.message.date);
        }
    },
    methods: {
        timeFormat
    }
}
</script>

<style lang="scss" scoped>

    .message__title {
        position: sticky;
        top: 0px;
        width: 100%;
        text-align: center;
        padding: 8px;
        background-color: #fff;
        color: #7D95BD;
    }
    .message-list_row {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0px 12px;

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
            line-height: 0px;
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
            justify-content: flex-end;
            align-items: center;
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
            }
        }
    }

</style>