<template>
  <div class="sidebar">
    <div class="menu">
      <div class="menu_search">
        <img src="../assets/search.svg" alt="">
        <input type="text" class="menu_search__input" placeholder="Поиск">
      </div>
      <div class="menu_actions">
        <img src="../assets/letter.svg" alt="">
        <img src="../assets/arrowup.svg" alt="">
        <div class="menu_actions__button">
          <button class="actions_button">Создать чат <img src="../assets/checkmarkdown.svg" alt=""></button>
        </div>
      </div>
    </div>
    <div class="chatlist">
      <div class="archive">
        <div class="archive_archive">
          <img src="../assets/box.svg" alt="">
          <div class="archive_archive__text">Архив</div>
        </div>
        <div class="archive_checkmark">
          <img src="../assets/checkmarkright.svg" alt="">
        </div>
      </div>
      <div class="dialog">
       <div class="dialogIcon"></div>
        <div class="dialogInfo">
          <div class="dialogInfoTop">
            <div class="dialogInfoName"></div>
            <div class="dialogInfoData"></div>
          </div>
          <div class="dialogInfoBot">
            <div class="dialogInfoBotLeft">
              <div class="dialogInfoText"></div>
            </div>
            <div class="dialogInfoBotRight">
              <div class="dialogInfoFix"></div>
              <div class="dialogInfoMenu"></div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style scoped>
.sidebar{
    border: 1px solid #E7EFFD;
    height: 100%;
    max-width: 315px;
}
.menu{
  height: 56px;
  display: flex;
  justify-content: space-between;
  margin: 0px 8px;
  align-items: center;
}
.menu_search{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.menu_search__input{
width: 42px;
height: 20px;
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #7D95BD;flex: none;
border: none;
}
.menu_actions{
  display: flex;
}
.actions_button{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 132px;
height: 38px;
background: #E9EDF5;
border-radius: 4px;
border: none;
flex: none;
order: 1;
flex-grow: 0;
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #2E5599;
}

.archive{
  display: flex;
  justify-content: space-between;
  padding: 4px 4px 4px 20px;
  border-top: 1px solid #E7EFFD;
    align-items: center;
}
.archive_archive{
  display: flex;
  align-items: center;
}
.archive_archive__text{
  margin-left: 15px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #2E5599;
}
.archive_checkmark{
  height: 16px;
}
</style>
