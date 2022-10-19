<template>
  <div class="chat">
      <slot />
  </div>
</template>

<style scoped>
  .chat {
    display: flex;
    width: 100%;
    height: 100%;
    font-family: "Raleway";
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-size: 14px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: #fff;
  }
</style>