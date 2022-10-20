<template>
    <div class="sidebar ">
        <Menu :dialogs="dialogs" @dialog-search="searchDialog" />
        <Archive v-if="showSidebar"/>
        <div class="sidebar_chats my-scroll" v-if="showSidebar">
            <Dialog v-for="dialog in dialogs" :dialog="dialog" :key="dialog.id"/>
        </div>
        <div class="sidebar_chatNotFound" v-if="!showSidebar">
            <p>Чатов с названием</p>
            <p><b>«{{searchName}}»</b> не найдено</p>
        </div>
    </div>

</template>

<script>
import Dialog from "./componentsDialogs/Dialog";
import Menu from './componentsDialogs/Menu';
import Archive from './componentsDialogs/Archive';


import { dialogs } from '@/data/index';

export default {
    components: { Dialog, Menu, Archive },
    data() {
        return {
            dialogs,
            arr: dialogs,
            showSidebar: {
                type: Boolean,
                default: true,
            },
            searchName: ''
        }
    },
    methods:{
        searchDialog(searchName) {
            this.dialogs = this.arr.filter(item => {
                return item.name.toLowerCase().includes(searchName.toLowerCase());
            });
            if (this.dialogs.length == '0') {
                this.searchName = searchName;
                this.switchSidebar();
            } else {
                this.showSidebar = true;
            }
        },
        switchSidebar() {
            if (this.showSidebar) {
                this.showSidebar = !this.showSidebar;
            }
        }
    }
}
</script>


<style scoped>
.sidebar {
    border-right: 1px solid #E7EFFD;;
    max-height: 100%;
    max-width: 315px;
    min-width: 315px;
    display: flex;
    flex-direction: column;
}
.sidebar_chats{
    width: 100%;
    height: 100%;
        overflow-y: auto;
}
.sidebar_chatNotFound{
    Font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #7D95BD;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
