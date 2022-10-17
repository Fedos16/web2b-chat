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

</style>
