<template>
    <div class="modal-window_list my-scroll">
        <div class="modal-window_list__title" v-if="title">{{title}}</div>
        <ul>
            <AddUserListUsersItem v-for="user in users" :key="user.id" :user="user" />
        </ul>
    </div>
</template>

<script>
    import AddUserListUsersItem from './AddUserListUsersItem.vue';

    export default {
        components: { AddUserListUsersItem },
        props: {
            users: Array,
            title: String,
        }
    }
</script>

<style lang="scss" scoped>
    .modal-window_list {
        position: relative;
        width: 100%;
        margin-bottom: 16px;
        overflow: auto;

        &__title {
            width: 100%;
            position: sticky;
            top: 0px;
            color: #7D95BD;
            background-color: #fff;
            margin-bottom: 16px;
        }
    }
</style>