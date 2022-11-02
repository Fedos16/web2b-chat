<template>
    <div class="modal-window_list my-scroll">
        <ul>
            <ViewUsersListItem v-for="user in usersFromChat" :key="user.id" :user="user" />
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
import ViewUsersListItem from './ViewUsersListItem.vue';
    export default {
        components: { ViewUsersListItem },
        computed: {
            ...mapGetters({
                usersFromChat: 'getUsersFromChat'
            })
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