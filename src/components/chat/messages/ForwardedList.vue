<template>
    <div class="message-list_row_message_forwarded">
        <div class="forwarded__title" v-if="title">{{title}}</div>
        <div class="forwarded_list">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: [String, null],
                default: null,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .message-list_row_message_forwarded {
        display: flex;
        flex-direction: column;
        padding: 10px 0px;
    }
    .forwarded__title {
        color: #7D95BD;
        margin-bottom: 10px;
    }
    .forwarded_list {
        display: flex;
        flex-direction: column;
        border-left: 1px solid #7D95BD;
        padding: 5px 0px;
    }
</style>