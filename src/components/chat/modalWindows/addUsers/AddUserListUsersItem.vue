<template>
    <li>
        <div>
            <img :src="userAvatar" alt="">
            <p>{{user.name}}</p>
        </div>
        <label>
            <input type="checkbox" name="user-name" @change="appendOrRemoveUser" />
            <span></span>
        </label>
    </li>
</template>

<script>
export default {
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

        input[type="checkbox"] {
            opacity: 0;
            position: absolute;
        }
        label {
            position: relative;

            span {
                display: flex;
                width: 20px;
                height: 20px;
                background-image: url('@/assets/images/state-off.svg');
                background-size: cover;
            }

            input:checked ~ span {
                background-image: url('@/assets/images/state-on.svg');
            }
        }
    }
</style>