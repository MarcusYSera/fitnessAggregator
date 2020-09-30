<template>
  <div>
    <div v-if="isLoggedIn">
      <a v-on:click="logout">Log out</a>
      <p>Welcome {{ firstName }} {{ idValue }}</p>
      <button v-on:click="clicked">Click</button>
      <button v-on:click="getAthleteActivities([tokenValue, idValue])">
        Get Items
      </button>
    </div>
    <a v-else href="#" v-on:click="login">Strava Login</a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Strava',
  computed: mapGetters(['isLoggedIn', 'firstName', 'tokenValue', 'idValue']),
  methods: {
    ...mapActions(['login', 'logout', 'getAthleteActivities']),
  },
  clicked() {
    console.log('clicked');
  },
};
</script>

<style scoped></style>
