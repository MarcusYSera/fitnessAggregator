<template>
  <div class="grid-container">
    <Header class="grid-item-1"></Header>
    <router-view class="grid-item-2"></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: { Header },
};
</script>

<style scoped>
* {
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.grid-container {
  display: grid;
  /* grid-auto-columns: minmax(20px, auto); */
  /* grid-auto-rows: minmax(50px, auto); */
}
.grid-item-1 {
  grid-area: header;
}
.grid-item-2 {
  grid-area: sidebar;
}
</style>
