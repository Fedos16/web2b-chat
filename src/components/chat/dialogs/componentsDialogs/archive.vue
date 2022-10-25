<template>
    <div :class="archiveClasses" @click="switchArchive" v-if="showArchive.length > 0">
        <div class="archive_archive">
          <img src="@/assets/images/box.svg" alt="" v-show="!switchMenuArchive">
          <div class="archive_archive__text">Архив</div>
        </div>
        <div class="archive_checkmark">
          <img src="@/assets/images/checkmarkright.svg" alt="">
        </div>
    </div>

</template>

<script>
export default {
    computed:{
        showArchive(){
            return this.$store.getters.getArchiveDialogs;
        },
        switchMenuArchive(){
            return this.$store.state.showArchive;
        },
        archiveClasses(){
            return {
                archive: true,
                active: this.switchMenuArchive
            }
        }
    },
    methods:{
        switchArchive(){
            this.$store.commit('toggleShowArchive');
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
    min-height: 33px;
}
.archive.active{
    flex-direction: row-reverse;
    justify-content: start;
    background-color: #E7EFFD;
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
.archive.active .archive_checkmark{
    transform: rotate(180deg);
}
</style>