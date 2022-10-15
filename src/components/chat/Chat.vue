<template>
    <div class="chat">
        <slot />
    </div>
</template>

<style scoped>
    .chat {
        display: flex;
        width: 100%;
        margin: 24px 24px 24px 20px;
        font-family: "Raleway";
        font-size: 14px;
        border: 1px solid var(--border-color);
    }
</style>