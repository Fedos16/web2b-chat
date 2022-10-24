<template>
    <div class="archive" @click="switchArchive">
        <div class="archive_archive">
          <img src="@/assets/images/box.svg" alt="">
          <div class="archive_archive__text">Архив</div>
        </div>
        <div class="archive_checkmark">
          <img src="@/assets/images/checkmarkright.svg" alt="">
        </div>
    </div>
    <div class="" v-show="showArhive">
        <Dialog ref="archiveDialogs" v-for="dialog in archiveDialogs" :dialog="dialog" :key="dialog.id" />
    </div>
</template>

<script>

import Dialog from './Dialog.vue';

export default {
    components: { Dialog },
    computed: {
        archiveDialogs() {
            return this.$store.getters.getArchiveDialogs;
        },
        showArhive(){
            return this.$store.state.showArhive;
        }
    },
    methods:{
        switchArchive(){
            this.$store.commit('showArchive');
        }
    }
}
</script>

<style scoped>
.archive {
    display: flex;
    justify-content: space-between;
    padding: 4px 4px 4px 20px;
    border-bottom: 1px solid #E7EFFD;
    align-items: center;
    cursor: pointer;
}
.archive_archive {
    display: flex;
    align-items: center;
}
.archive_archive__text {
    margin-left: 15px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #2E5599;
}
.archive_checkmark {
    height: 16px;
}
</style>