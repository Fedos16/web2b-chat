<template>
    <div class="modal-window">
        <div class="modal-window__title">
            <p>{{title}}</p>
            <div class="modal-window__close" @click="closeWindow"></div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    },
    emits: {
        closeWindow: null
    },
    methods: {
        closeWindow() {
            this.$emit('closeWindow');
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal-window {
        position: relative;
        min-width: 400px;
        max-width: 600px;
        height: auto;
        max-height: 70%;
        background: #fff;
        border-radius: 4px;
        padding: 24px 32px;
        display: flex;
        flex-direction: column;
        z-index: 3;

        &__title {
            width: 100%;
            margin-bottom: 16px;
            font-weight: 700;
            font-size: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #102447;
        }

        &__close {
            width: 18px;
            height: 18px;
            background-image: url('@/assets/images/crossclose.svg');
            background-size: cover;
            cursor: pointer;
        }

    }
</style>