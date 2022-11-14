<template>
    <li>
        <div>
            <img :src="userAvatar" alt="">
            <p>{{user.name}}</p>
        </div>
        <CheckBox nameCheckbox="userName" @change="appendOrRemoveUser" />
    </li>
</template>

<script>

import CheckBox from '@/components/elements/CheckBox.vue';

export default {
    components: { CheckBox },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    computed: {
        userAvatar() {
            return require('@/assets/images/tehSupport.svg');
        }
    },
    methods: {
        appendOrRemoveUser() {
            this.$store.commit('modalWindows/appendOrRemoveUser', this.user.id);
        }
    }
}
</script>

<style lang="scss" scoped>
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;

        img {
            margin-right: 8px;
        }

        div {
            display: flex;
            align-items: center;
        }
    }
</style>