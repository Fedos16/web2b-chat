<template>
    <div class="chat">
        <slot />
    </div>
</template>

<script>
export default {
  props: {
    dialogs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
    .chat {
        display: flex;
        max-width: 100vh;
        margin: 24px 24px 24px 20px;
        font-family: "Raleway";
        font-size: 14px;
        border: 1px solid var(--border-color);
    }
</style>