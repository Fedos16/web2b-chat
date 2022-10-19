<template>
    <div class="sidebar my-scroll">
        <Menu :dialogs="dialogs" @dialog-search="searchDialog" />
        <Archive/>
        <Dialog v-for="dialog in dialogs" :dialog="dialog" :key="dialog.id"/>
    </div>
</template>

<script>
import Dialog from "./componentsDialogs/Dialog.vue";
import Menu from "./componentsDialogs/Menu.vue";
import Archive from "./componentsDialogs/Archive.vue";
import { dialogs } from '@/data/index';

export default {
    components: { Dialog, Menu, Archive },
    data() {
        return {
            dialogs,
            arr: dialogs,
        }
    },
    methods:{
        searchDialog(searchName) {
            this.dialogs = this.arr.filter(item => {
                return item.name.toLowerCase().includes(searchName.toLowerCase());
            })
        },
    }
}
</script>


<style scoped>
.sidebar {
  border-right: 1px solid #E7EFFD;;
  max-height: 100%;
  max-width: 315px;
  min-width: 315px;
  overflow: auto;
}
</style>
