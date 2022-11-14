<template>
    <div class="forwarded_list_message">
        <div class="forwarded_list_message__title">
            <b>{{message.user.name}}</b>
            <p>{{dateTimeFormat(message.date)}}</p>
        </div>
        <div class="forwarded_list_message__text">{{message.text}}</div>
    </div>
</template>

<script>

    import { dateTimeFormat } from '@/helpers';

    export default {
        props: {
            message: {
                type: Object,
                required: true,
            }
        },
        methods: {
            dateTimeFormat
        }
    }
</script>

<style lang="scss" scoped>
    .forwarded_list_message {
        margin-bottom: 15px;
        padding-left: 12px;

        &:last-child {
            margin-bottom: 0px;
        }

        &__title {
            display: flex;
            align-items: flex-end;
            margin-bottom: 5px;

            b {
                margin-right: 20px !important;
                color: #102447;
            }

            p {
                color: #7D95BD;
                font-size: 12px;
            }
        }
    }
</style>