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
<style>
/* Refactor later to account for media queries  */
/* https://www.smashingmagazine.com/2016/05/fluid-typography/ */
html {
  font-size: 1.25vw;
}
</style>
<style scoped>
* {
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.grid-container {
  display: grid;
  grid-template-rows: 50px;
  /* border: 1px solid black; */
}
</style>
