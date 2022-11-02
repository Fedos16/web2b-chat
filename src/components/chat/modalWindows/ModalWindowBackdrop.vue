<template>
    <div class="modal-window_backdrop">
        <div class="modal-window_backdrop__close" @click="closeWindow"></div>
        <slot></slot>
    </div>
</template>

<script>
export default {
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

<style scoped>
    .modal-window_backdrop {
        background-color: rgba(0,0,0, 0.3);
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal-window_backdrop__close {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>