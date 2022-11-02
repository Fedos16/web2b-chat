<template>
    <div class="chat-popup">
        <ChatPopUp v-if="viewChatId == user.id" @handlerClose="closePopUp" :data="menuListChat" />
    </div>
    <li>
        <div class="list-item__user">
            <img :src="userAvatar" alt="">
            <p>{{user.name}}</p>
        </div>
        <div class="list-item__menu" @click="showPopUp"></div>
    </li>
</template>

<script>
import { mapState } from 'vuex';
import ChatPopUp from '../../popup/ChatPopUp.vue';

export default {
    components: { ChatPopUp },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    computed: {
        userAvatar() {
            return require('@/assets/images/tehSupport.svg');
        },
        menuListChat() {
            return [
                { id: 'lchat-1', name: 'Написать сообщение', handler: this.writeToUser },
                { id: 'lchat-2', name: 'Открыть профиль', handler: this.openProfile }
            ]
        },
        ...mapState(['viewChatId'])
    },
    methods: {
        closePopUp() {
            this.$store.commit('setViewChatId', null);
        },
        writeToUser() {
            this.$store.commit('writeToUser', this.user.id);
        },
        showPopUp() {
            this.$store.commit('setViewChatId', this.user.id);
        },
        openProfile() {
            console.log('Переходим в профиль');
            this.closePopUp();
        }
    }
}
</script>

<style lang="scss" scoped>
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;

        img {
            margin-right: 8px;
        }

        .list-item__user {
            display: flex;
            align-items: center;
        }

        .list-item__menu {
            width: 20px;
            height: 20px;
            background-image: url(http://localhost:8080/img/menu.2714904a.svg);
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
    }
</style>