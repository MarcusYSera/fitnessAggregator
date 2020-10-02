<template>
  <div>
    <Header></Header>
    <router-view></router-view>
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
* {
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
