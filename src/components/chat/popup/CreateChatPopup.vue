<template>
    <div class="create-chat-popup my-scroll">
        <div class="create-chat-popup__title" v-if="data.length > 0">{{title}}</div>
        <div class="create-chat-popup_list" v-if="data.length > 0">
            <ul>
                <li v-for="item in data" :key="item.id" @click="selectValue(item.id)">
                    <img :src="item.img ? item.img : require('@/assets/images/tehSupport.svg')"><p>{{item.name}}</p>
                </li>
            </ul>
        </div>
        <div class="not-found" v-if="data.length == 0">
            <p>{{notFoundParams.type}}</p>
            <p><b>"{{notFoundParams.text}}"</b> не найден</p>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        data: {
            type: Array
        },
        title: String
    },
    methods: {
        ...mapMutations({
            selectValue: 'selectItemCreateChat',
        })
    },
    computed: {
        notFoundParams() {
            const item = this.$store.state.isCreateChatToUser ? 'users' : 'orders';
            const text = this.$store.state.createChatPopup[item].search;

            return { text, type: item === 'users' ? 'Пользователь с именем' : 'Номер заказа' }
        }
    }
}
</script>

<style lang="scss" scoped>
    .create-chat-popup {
        position: absolute;
        top: 100%;
        left: 40px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        min-width: 250px;
        width: auto;
        max-width: 400px;
        max-height: 420px;
        border: 1px solid #E7EFFD;
        background-color: #fff;
        border-radius: 4px;
        overflow-y: auto;
        z-index: 2;

        &__title {
            position: sticky;
            top: 0px;
            color: #7D95BD;
            padding: 15px 15px 5px;
            background-color: white;
            width: 100%;
        }
        
        &_list {

            width: 100%;
            padding-bottom: 10px;
            border-bottom: 1px solid #E7EFFD;

            &:last-child {
                border-bottom: none;
            }

            li {
                padding: 5px 15px;
                display: flex;
                align-items: center;

                &:hover {
                    background-color: #F7F8FA;
                }

                img {
                    margin-right: 10px;
                }
            }
        }
    }
    .not-found {
        color: #7D95BD;
        padding: 15px;
    }
</style>