<template>
    <div class="chat-body">
        <Header v-if="!emptyDialog" />
        <Content />
        <Footer v-if="!emptyDialog" />
    </div>
</template>

<script>

import Header from './header/Header.vue';
import Content from './content/Content.vue';
import Footer from './footer/Footer.vue';

export default {
    components: {
        Header,
        Content,
        Footer
    },
    data() {
        return {
            emptyDialog: false
        }
    }
}
</script>

<style scoped>
    .chat-body {
        min-width: 300px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>