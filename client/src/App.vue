<template>
  <div class="grid-container-app">
    <Header class="appheader"></Header>
    <router-view class="appbody"></router-view>
    <footer>copyright sera-consulting</footer>
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
body {
  margin: 0;
  height: 100vh;
}
#app {
  height: 100%;
}
</style>

<style scoped>
* {
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.grid-container-app {
  display: grid;
  height: 100%;
  grid-template-rows: 1fr 8fr 1fr;
  grid-template-areas: 'header' 'bodycontent' 'footer';
  padding: 25px;
}
.appbody {
  grid-area: bodycontent;
}
</style>
