<template>
  <div class="archive">
        <div class="archive_archive">
          <img src="@/assets/images/box.svg" alt="">
          <div class="archive_archive__text">Архив</div>
        </div>
        <div class="archive_checkmark">
          <img src="@/assets/images/checkmarkright.svg" alt="">
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.archive {
    display: flex;
    justify-content: space-between;
    padding: 4px 4px 4px 20px;
    border-bottom: 1px solid #E7EFFD;
    align-items: center;
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