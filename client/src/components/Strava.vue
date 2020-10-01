<template>
  <div>
    <div v-if="isLoggedIn">
      <a v-on:click="logout">Log out</a>
      <p>Welcome {{ firstName }} {{ idValue }}</p>
      <button v-on:click="getAthleteStats([this.tokenValue, this.idValue])">
        Update List
      </button>
    </div>
    <a v-else href="#" v-on:click="login">Strava Login</a>
    <div v-if="activitiesList">
      <p v-for="(value, key) in activitiesList" v-bind:key="key.id">
        {{ key }} : {{ value }}
      </p>
    </div>
    <div>
      <button v-on:click="getListOfAthleteActivites(tokenValue)">
        Get List of Activities
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Strava',
  data: function() {
    return { activitiesList: null };
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'firstName',
      'tokenValue',
      'idValue',
      'athleteActivities',
    ]),
  },
  methods: {
    ...mapActions([
      'login',
      'logout',
      'getAthleteStats',
      'getListOfAthleteActivites',
    ]),
  },
  created() {
    if (this.athleteActivities) {
      console.log('created');
      this.activitiesList = JSON.parse(this.athleteActivities);
    }
    return this.activitiesList;
  },
  updated() {
    console.log('updatedpdate');
    if (this.athleteActivities) {
      this.activitiesList = JSON.parse(this.athleteActivities);
    }
    return this.activitiesList;
  },
};
</script>

<style scoped></style>
