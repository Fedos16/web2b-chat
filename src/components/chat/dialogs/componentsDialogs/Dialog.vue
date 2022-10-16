<template>
<div class="dialog">
  <img src="../../../../assets/images/tehSupport.svg" alt="">
  <div class="dialogInfo">
    <div class="dialogInfoTop">
      <div class="dialogInfoName">{{ dialog.name }}</div>
      <div class="dialogInfoData">{{ dialog.dataLastMsg }}</div>
    </div>
    <div class="dialogInfoBot">
        <div class="dialogInfoText">{{dialog.lastMsg}}</div>
        <img src="../../../../assets/images/pinbutton.svg" alt="">
    </div>
  </div>
  <img src="../../../../assets/images/menu.svg" alt="">
</div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.dialog{
  padding: 12px;
  display: flex;
}
.dialogInfo{
  width: 100%;
  margin-left: 8px;
}
.dialogInfoTop{
display: flex;
justify-content: space-between;
margin-bottom: 5px;
}
.dialogInfoBot{
display: flex;
justify-content: space-between;
}
.dialogInfoName{
  font-weight: 600;
  color: #102447;
}
.dialogInfoData{
  color: #7D95BD;
}
.dialogInfoText{
  color: #102447;
}
</style>