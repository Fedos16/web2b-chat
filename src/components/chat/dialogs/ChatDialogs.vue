<template>
  <div class="sidebar">
    <Menu :dialogs="dialogs" />
    <Archive/>
    <Dialog v-for="dialog in dialogs" :dialog="dialog" :key="dialog.id"/>
  </div>
</template>

<script>
import Dialog from "./componentsDialogs/Dialog.vue"
import Menu from "./componentsDialogs/menu.vue"
import Archive from "./componentsDialogs/archive.vue"

export default {
  components: { Dialog, Menu, Archive },
  props: {
    dialogs: {
      type: Array,
      required: true,
    },
  },
}
</script>


<style scoped>
  .sidebar{
    border-right: 1px solid #E7EFFD;;
    max-height: 100%;
    max-width: 315px;
    min-width: 315px;
    max-width: 100%;
  }

</style>
