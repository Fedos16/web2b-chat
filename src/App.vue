<template>
  <Chat>
    <Dialogs />
  </Chat>
</template>

<script>

import Chat from '@/components/chat/Chat';
import Dialogs from '@/components/chat/dialogs/ChatDialogs';

export default {
  name: 'App',
  components: {
    Chat,
    Dialogs,
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
  }

  /* DELETE IN PRODUCTION */
  #app { 
    width: 1000px;
    margin: 0px auto;
  }

</style>
