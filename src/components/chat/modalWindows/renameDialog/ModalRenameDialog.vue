<template>
    <ModalWindowBackdrop @closeWindow="hideModalWindow">
        <ModalWindow :title="windowTitle" @closeWindow="hideModalWindow">
            <input class="change-name-dialog_input" type="text" name="" id="" v-model="dialogName">
            <div class="change-name-dialog_button">
                <button class="chat-button btn-lg main-button margin-r--10" @click="saveRename">Переименовать</button>
                <button class="chat-button btn-lg secondary-button" @click="hideModalWindow">Отменить</button>
            </div>
        </ModalWindow>
    </ModalWindowBackdrop>
</template>

<script>
    
    import ModalWindowBackdrop from '../ModalWindowBackdrop.vue';
    import ModalWindow from '../ModalWindow.vue';

    export default {
        components: { ModalWindowBackdrop, ModalWindow },
        data() {
            return {
                windowTitle: 'Переименовать чат',
                dialogName: this.dialog.name
            }
        },
        props:{
            dialog: Object,
        },
        methods: {
            hideModalWindow(){
                return this.$store.commit('toggleRenameDialog')
            },
            saveRename(){
                this.$store.commit('renameDialog', this.dialogName);
                this.$store.commit('toggleRenameDialog');
            }
        }
    }
</script>

<style scoped>
.change-name-dialog_input{
    background: #E9EDF5;
    border-radius: 4px;
    width: 100%;
    height: 56px;
    border: none;
    margin-bottom: 16px;
    padding: 0px 16px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #102447;
}
.change-name-dialog_button{
    display: flex;
}
</style>