<template>
  <div class="container">
    <div v-if="isLoggedIn">
      <!-- <a v-on:click="logout">
        <button>
          Log out
        </button>
      </a> -->
      <p>Welcome {{ firstName }} {{ idValue }}</p>
    </div>
    <a v-else href="#" v-on:click="login">
      <button>
        Strava Login
      </button>
    </a>
    <br />
    <div v-if="athleteActivities">
      <p v-for="(value, key) in athleteActivities" v-bind:key="key.id">
        {{ key }} : {{ value }}
      </p>
    </div>
    <br />
    <div>
      <p v-for="(value, key) in activitiesList" v-bind:key="key">
        Activity Name: {{ value.name }}
        <br />
        Activity Type: {{ value.type }}
        <br />
        Activity Id: {{ value.id }}
      </p>
    </div>
    <Table></Table>
  </div>
</template>

<style scoped>
div {
  border: dotted black 1px;
}
.container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 100vw;
  max-height: 100vh;
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';
import Table from './Table';

export default {
  name: 'Strava',
  components: {
    Table,
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'firstName',
      'tokenValue',
      'idValue',
      'athleteActivities',
      'activitiesList',
    ]),
  },
  methods: {
    ...mapActions([
      'login',
      'logout',
      'getAthleteStats',
      'getListOfAthleteActivities',
    ]),
  },
  async created() {
    if (this.isLoggedIn === true) {
      // reactivate after styling done
      // await this.getAthleteStats([this.tokenValue, this.idValue]);
      // await this.getListOfAthleteActivities(this.tokenValue);
    }
  },
};
</script>
