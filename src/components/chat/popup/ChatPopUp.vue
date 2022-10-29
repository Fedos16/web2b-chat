<template>
    <div class="chat-dropdown" v-if="visible">
        <ul>
            <li v-for="item in data" :key="item.id">{{ item.name }}</li>
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

<style scoped>
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
        z-index: 3;
    }
    .chat-dropdown_backdrop {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 2;
    }
    .chat-dropdown ul {
        padding: 18px 0px;
    }
    .chat-dropdown ul li {
        padding: 6px 24px;
        cursor: default;
        white-space: nowrap;
    }
    .chat-dropdown ul li:hover {
        background-color: #F7F8FA;
    }
</style>