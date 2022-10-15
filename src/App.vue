<template>
  <Chat>
    <Dialogs :dialogs="dialogs" />
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
  data() {
    return {
      dialogs: [
        { id: 1, img:"123", name: "Олег1" , dataLastMsg: "14.10.2022", lastMsg: "привет1" },
        { id: 2, img:"123", name: "Олег2" , dataLastMsg: "13.10.2022", lastMsg: "привет2" },
        { id: 3, img:"123", name: "Олег3" , dataLastMsg: "12.10.2022", lastMsg: "привет3" },
        { id: 4, img:"123", name: "Олег4" , dataLastMsg: "15.10.2022", lastMsg: "привет4" },
        { id: 5, img:"123", name: "Олег5" , dataLastMsg: "16.10.2022", lastMsg: "привет5" },
      ],
    };
  },
  methods: {
    sort(){
      return this.dialogs.sort.dataLastMsg((a,b)=>b-a)
    }
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
