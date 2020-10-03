<template>
  <div class="container">
    <div v-if="isLoggedIn">
      <h1 class="welcome">Strava Stats for {{ firstName }}</h1>
    </div>
    <a v-else href="#" v-on:click="login">
      <button>
        Strava Login
      </button>
    </a>
    <br />
    <AthleteActivityTable
      v-bind:propsActivitiesList="activitiesList"
    ></AthleteActivityTable>
    <br />
    <!-- <div>
      <p v-for="(value, key) in activitiesList" v-bind:key="key">
        Activity Name: {{ value.name }}
        <br />
        Activity Type: {{ value.type }}
        <br />
        Activity Id: {{ value.id }}
      </p>
    </div> -->
    <ActivityDescriptionTable
      v-bind:propsActivitiesList="activitiesList"
    ></ActivityDescriptionTable>
  </div>
</template>

<style scoped>
.welcome {
  text-align: center;
}
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
import AthleteActivityTable from './AthleteActivityTable';
import ActivityDescriptionTable from './ActivityDescriptionTable';

export default {
  name: 'Strava',
  components: {
    AthleteActivityTable,
    ActivityDescriptionTable,
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
