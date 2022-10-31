<template>
    <div class="chat-dropdown" v-if="visible">
        <ul>
            <button class="chat-button-invisible" @click="closePopUp">
                <li v-for="item in data" :key="item.id" @click="item.handler">{{ item.name }}</li>
            </button>
        </ul>
    </div>
    <div class="chat-dropdown_backdrop" v-if="visible" @click="closePopUp"></div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false,
            required: true
        },
        data: {
            type: Object,
            required: true
        }
    },
    emits: {
        handlerClose: null
    },
    methods: {
        closePopUp() {
            this.$emit('handlerClose');
        }
    }
}
</script>

<style lang="scss" scoped>
    .chat-dropdown_backdrop {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 2;
    }
    .chat-dropdown {
        position: absolute;
        top: 100%;
        right: 0%;
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #fff;
        box-shadow: 0px 4px 64px rgba(111, 149, 245, 0.16);
        border-radius: 4px;
        padding: 18px 0px;
        z-index: 3;

        ul {
            padding: 18px 0px;

            li {
                padding: 6px 24px;
                cursor: default;
                white-space: nowrap;

                &:hover {
                    background-color: #F7F8FA;
                }
            }
        }
    }
</style>