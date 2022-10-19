<template>
  <Chat>
    <Dialogs />
    <ChatBody />
  </Chat>
</template>

<script>

import Chat from '@/components/chat/Chat';
import Dialogs from '@/components/chat/dialogs/ChatDialogs';
import ChatBody from '@/components/chat/body/ChatBody';


export default {
  name: 'App',
  components: {
    Chat,
    Dialogs,
    ChatBody
  },
};
</script>

<style>

  @font-face {
    font-family: 'Raleway';
    src: url('./assets/fonts/Raleway-Medium.ttf');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('./assets/fonts/Raleway-SemiBold.ttf');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('./assets/fonts/Raleway-Bold.ttf');
    font-weight: 700;
    font-style: normal;
  }

  :root {
    --border-color: #E7EFFD;
    --input-placeholder-color: #7D95BD;
    --input-text-color: #102447;
    --button-main-background: #2E5599;
    --button-main-color: #fff;
    --button-secondary-background: #E9EDF5;
    --button-secondary-color: #2E5599;
  }

  * {
    box-sizing: border-box;
  }
  body, html {
    margin: 0px;
    background-color: whitesmoke;
  }

  /* DELETE IN PRODUCTION */
  #app {
    width: 1000px;
    margin: 0px auto;
    height: 100vh;
  }

  #app p, #app b {
    margin: 0px;
  }
  #app input {
    outline: none;
    font-size: 14px;
  }

  .my-scroll::-webkit-scrollbar-track {
    border: 1px solid transparent;
    background-color: transparent;
  }
  .my-scroll::-webkit-scrollbar {
    background-color: #E9EDF5;
    height: 6px;
    width: 5px;
  }
  .my-scroll::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #C7D4E9;
  }

  .invisible-button {
    border: none;
    background-color: transparent;
  }

  .web-button {
    width: auto;
    height: 36px;
    border-radius: 4px;
    border: none;
    background-color: transparent;
    padding: 0px 16px;
    cursor: pointer;
  }
  .main-button {
    color: var(--button-main-color);
    background-color: var(--button-main-background);
  }
  .secondary-button {
    color: var(--button-secondary-color);
    background-color: var(--button-secondary-background);
  }

  .margin-r--10 {
    margin-right: 10px;
  }
  .margin-r--15 {
    margin-right: 15px;
  }

</style>
