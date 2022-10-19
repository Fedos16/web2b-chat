<template>
    <div 
    class="message-list_row"
    :class="classMessage">
        <div class="message-list_row__autor">
            {{ !preMessage?.incoming && message.incoming ? message.user : '' }}
        </div>
        <div class="message-list_row__message-content">
            <div class="message-list_row_message">
                <div class="message-list_row_message__text">{{ message.text }}</div>
                <div class="message-list_row_message__time">{{ timeFormat(message.date) }}</div>
            </div>
            <div class="message-list_row__action"></div>
        </div>
    </div>
</template>

<script>

import { timeFormat } from '@/helpers/index';

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
    data() {
        return {
            classMessage : {
                'message-list_row--incoming': this.message.incoming,
                'message-list_row--outgoing': !this.message.incoming,
            }
        }
    },
    methods: {
        timeFormat
    }
}
</script>

<style scoped>

    .message-list_row {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .message-list_row--incoming {
        align-items: flex-start;
    }
    .message-list_row--outgoing {
        align-items: flex-end;
    }
    .message-list_row__autor {
        margin-bottom: 5px;
        color: #102447;
        font-weight: 600;
        padding-left: 12px;
    }
    .message-list_row__message-content {
        display: flex;
    }
    .message-list_row--outgoing .message-list_row__message-content {
        flex-direction: row-reverse;
    }
    .message-list_row__action {
        width: 20px;
        height: 20px;
        background-image: url('@/assets/images/menu.svg');
        background-size: cover;
        background-position: center;
        cursor: pointer;
        transition: 200ms;
        line-height: 0px;
        margin: 0px 5px;
    }
    .message-list_row__action:hover {
        border-radius: 50%;
        background-color: var(--button-secondary-background);
    }
    .message-list_row_message {
        width: auto;
        max-width: 404px;
        border-radius: 4px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        padding: 12px;
        background-color: #F7F8FA;
        margin-bottom: 5px;
    }
    .message-list_row_message__text {
        margin-right: 5px;
    }
    .message-list_row_message__time {
        font-size: 12px;
        color: #7D95BD;
        font-feature-settings: 'pnum' on, 'lnum' on;
    }

</style>