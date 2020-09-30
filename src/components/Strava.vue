<template>
  <div>
    <div v-if="isLoggedIn">
      <a v-on:click="logout">Log out</a>
    </div>
    <a v-else href="#" v-on:click="login">Strava Login</a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Strava',
  computed: mapGetters(['isLoggedIn']),
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>

<style scoped></style>
