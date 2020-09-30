<template>
  <div>
    <a href="#" v-on:click="login">Strava Login</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Strava',
  methods: {
    ...mapActions(['login']),
  },
};
</script>

<style scoped></style>
