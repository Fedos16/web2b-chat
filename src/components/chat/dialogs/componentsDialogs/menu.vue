<template>
  <div class="menu" v-if="showMenu">
      <div class="menu_search">
        <img src="@/assets/images/search.svg" alt="" @click="menusearch" >
        <div class="menu_search__find" @click="menusearch">Поиск</div>
      </div>
      <div class="menu_actions">
        <img src="@/assets/images/letter.svg" alt="" @click="sort">
        <img src="@/assets/images/arrowup.svg" alt="">
        <div class="menu_actions__button">
          <button class="actions_button">Создать чат <img src="@/assets/images/checkmarkdown.svg" alt=""></button>
        </div>
      </div>
    </div>
    <div class="menu_find" v-else>
      <div class="menu_search__search">
        <img src="@/assets/images/search.svg" alt="">
        <input type="text" class="menu_search__input" placeholder="Поиск" id="menu_search__input" ref="menu_search__input">
        <img src="../../../../assets/images/crossclose.svg" alt="" @click="menu">
      </div>
    </div>
</template>

<script>
export default {
data() {
    return{
      searchVisible: false,
      menuVisible: false,
      showMenu: {
      type: Boolean,
      default: true,
    },
      showSearch: {
      type: Boolean,
      default: false,
    },
    };
  },
  methods: {
    menusearch(){
      this.showMenu = false;
      this.showSearch = true;
    },
    menu(){
      this.showSearch = false;
      this.showMenu = true;
    },
    startTimer () {
      this.$nextTick(() => {
        this.$refs.menu_search__input[0].focus()
    })
}
  },
}
</script>

<style>
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
.menu_find{
    height: 56px;
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;
    align-items: center;
}
.menu_search__search{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
  .menu_search__input{
    width: 100%;
    height: 100%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #102447;
    margin-left: 21px;
    border: none;
    cursor: pointer;
  }

.menu_search__find{
    width: 50px;
    height: 20px;
    line-height: 20px;
    color: #7D95BD;flex: none;
    cursor: pointer;
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
    cursor: pointer;
  }
  .archive{
    display: flex;
    justify-content: space-between;
    padding: 4px 4px 4px 20px;
    border-top: 1px solid #E7EFFD;
    border-bottom: 1px solid #E7EFFD;
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
  img{
    cursor: pointer;
}
</style>