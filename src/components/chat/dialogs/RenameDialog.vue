<template>
    <div class="rename-dialog">
        <div class="change-name-dialog">
            <div class="change-name-dialog_tytle">
                <div class="change-name-dialog_tytle__text">Переименовать чат</div>
                <img src="@/assets/images/crossclose.svg" alt="" @click="closeRenameDialog">
            </div>
            <input class="change-name-dialog_input" type="text" name="" id="" v-model="dialogName">
            <div class="change-name-dialog_button">
                <button class="chat-button main-button margin-r--10" @click="saveRename">
                Переименовать
                </button>
                <button class="chat-button secondary-button" @click="closeRenameDialog">
                Отменить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialogName: this.dialog.name
        }
    },
    props:{
        dialog: Object,
    },
    methods: {
        closeRenameDialog(){
            return this.$store.commit('toggleRenameDialog')
        },
        saveRename(){
            this.$store.commit('renameDialog', this.dialogName);
            this.$store.commit('toggleRenameDialog')
        }
    }
}
</script>

<style scoped>
.rename-dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.3);
    position: fixed;
    display: flex;
    z-index: 3;
}
.change-name-dialog{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 520px;
    height: 220px;
    background-color: #fff;
    border-radius: 4px;
    padding: 24px 40px;
    margin: auto;
}
.change-name-dialog_tytle{
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #102447;
}
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
img{
    cursor: pointer;
}
</style>