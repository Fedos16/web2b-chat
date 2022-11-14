<template>
     <div class="chat-body_header_search">
        <div class="chat-body_header__content">
            <p>{{selectedMessages.length}} {{nameCountMessages}}</p>
            <button class="cancel-select chat-button-invisible" @click="toggleModeSelectMessages"></button>
        </div>
        <button class="chat-button btn-sm secondary-button margin-r--10" :disabled="selectedMessages.length == 0" @click="showForwardMessages">Переслать</button>
        <button class="chat-button btn-sm main-button" :disabled="selectedMessages.length == 0" @click="replySelectedMessages">Ответить</button>
    </div>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex'
    import { declensionNumerals } from '@/helpers/index';

    export default {
        computed: {
            ...mapState({
                selectedMessages: 'selectedMessages'
            }),
            nameCountMessages() {
                return declensionNumerals(this.selectedMessages.length, ['сообщение', 'сообщения', 'сообщений']);
            }
        },
        methods: {
            ...mapMutations({
                toggleModeSelectMessages: 'toggleModeSelectMessages',
            }),
            ...mapMutations('modalWindows', ['showForwardMessages']),
            ...mapActions({
                replySelectedMessages: 'replySelectedMessages'
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import './header.scss';

    .chat-body_header__content {
        display: flex;
        align-items: center;
        width: 100%;

        .cancel-select {
            width: 15px;
            height: 15px;
            margin-left: 15px;
            background-image: url('@/assets/images/crossclose.svg');
            background-size: cover;
            cursor: pointer;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

</style>