<template>
    <div class="rename-dialog">
        <div class="change-name-dialog">
            <div class="change-name-dialog_tytle">
                <div class="change-name-dialog_tytle__text">Переименовать чат</div>
                <img src="@/assets/images/crossclose.svg" alt="" @click="closeRenameDialog">
            </div>
            <input class="change-name-dialog_input" type="text" name="" id="" v-model="dialogName">
            <div class="change-name-dialog_button">
                <button class="change-name-dialog_button__rename" @click="saveRename">
                Переименовать
                </button>
                <button class="change-name-dialog_button__cancell" @click="closeRenameDialog">
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
            this.dialog.name = this.dialogName;
            return this.$store.commit('toggleRenameDialog')
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
.change-name-dialog_button__rename{
    width: 155px;
    height: 48px;
    background: #2E5599;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-right: 8px;
    cursor: pointer;
}
.change-name-dialog_button__cancell{
    width: 91px;
    height: 48px;
    background: #E9EDF5;
    border-radius: 4px;
    border: none;
    color: #2E5599;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
}
img{
    cursor: pointer;
}
</style>