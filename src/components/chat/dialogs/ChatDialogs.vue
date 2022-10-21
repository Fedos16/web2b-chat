<template>
    <div class="sidebar ">
        <Menu :dialogs="dialogs" @dialog-search="searchDialog" @sort-dialogs-new-massege="sortDialogsNewMassege" @sort-dialogs-last-massege="sortDialogsLastMassege" @show-not-read-messege="notReadMessege" @show-read-messege="readMessege"/>
        <Archive v-if="showSidebar"/>
        <div class="sidebar_chats my-scroll" v-if="showSidebar">
            <Dialog ref="dialog" v-for="dialog in dialogs" :dialog="dialog" :key="dialog.id" @click="dialogActive"/>
        </div>
        <div class="sidebar_chatNotFound" v-if="!showSidebar">
            <p>Чатов с названием</p>
            <p><b>«{{searchName}}»</b> не найдено</p>
        </div>
    </div>

</template>

<script>
import moment from "moment"
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
            showSidebar: {
                type: Boolean,
                default: true,
            },
            searchName: '',
            dialogTarget: false,
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
            };
        },
        sortDialogsNewMassege(){
            this.dialogs = this.arr.sort((a, b) => moment(a.dateLastMsg, 'DD.MM.YY') - moment(b.dateLastMsg, 'DD.MM.YY'))
        },
        sortDialogsLastMassege(){
            this.dialogs = this.arr.sort((a, b) => moment(b.dateLastMsg, 'DD.MM.YY') - moment(a.dateLastMsg, 'DD.MM.YY'))
        },
        switchSidebar() {
            if (this.showSidebar) {
                this.showSidebar = !this.showSidebar;
            }
        },
        notReadMessege(){
            this.dialogs = this.arr.filter(item =>{
                return item.sumNotReadMassege > 0;
            })
        },
        readMessege(){
            this.dialogs = this.arr;
        },
        dialogActive(){
            let aaa = this.$refs.target
            console.log()
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
.dialog_active {
    padding: 12px;
    display: flex;
    border-bottom: 1px solid #E7EFFD;
    background: #F7F8FA;
}
</style>
