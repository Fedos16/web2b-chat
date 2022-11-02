<template>
  <div class="chat">
      <slot></slot>
  </div>
</template>

<style lang="scss">
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
    cursor: default;

    button, input, select, textarea {
      font-family: "Raleway";
      font-feature-settings: 'pnum' on, 'lnum' on;
      font-size: 14px;
    }

  }

  .chat-popup {
    position: relative;
  }

  .chat-button-invisible {
    background-color: transparent;
    border: none;
    padding: 0px;
    cursor: pointer;
    text-align: left;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .chat-button-invisible:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }

  .chat-button {
    width: auto;
    height: 36px;
    border-radius: 4px;
    border: none;
    background-color: transparent;
    padding: 0px 16px;
    white-space: nowrap;
    cursor: pointer;

    &.main-button {
      color: var(--button-main-color);
      background-color: var(--button-main-background);
    }
    &.secondary-button {
      color: var(--button-secondary-color);
      background-color: var(--button-secondary-background);
    }

    &:disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }

  }
  

  .margin-r--10 {
    margin-right: 10px;
  }
  .margin-r--15 {
    margin-right: 15px;
  }

  .finded-text-format {
    font-weight: 700;
    color: var(--input-text-color);
  }

  .top-arrow {
    transform: rotate(180deg);
  }

</style>