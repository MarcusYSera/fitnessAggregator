<template>
  <div class="container column">
    <div v-if="isLoggedIn" class="center container row">
      <h1 class="welcome">Strava Stats for {{ firstName }}</h1>
      <a v-on:click="logout" v-if="isLoggedIn" class="button right">
        <button>
          Logout
        </button>
      </a>
    </div>
    <a v-else href="#" v-on:click="login" class="button right">
      <button>
        Strava Login
      </button>
    </a>
    <br />
    <AthleteActivityTable
      v-on:emitted-activity="emitAthleteActivityTable"
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
      v-bind:propsActivityName="activityName"
    ></ActivityDescriptionTable>
  </div>
</template>

<style scoped>
div {
  border: dotted black 1px;
}
.container {
  display: flex;
  padding: 10px;
  max-width: 100vw;
  max-height: 100vh;
}
.column {
  flex-direction: column;
}
.row {
  flex-direction: row;
}
.center {
  justify-content: center;
}
.right {
  margin-left: auto;
}
.welcome {
  margin-left: auto;
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
      'expiresAt',
    ]),
  },
  data() {
    return { activityName: null };
  },
  methods: {
    ...mapActions([
      'login',
      'logout',
      'getAthleteStats',
      'getListOfAthleteActivities',
    ]),
    emitAthleteActivityTable(key) {
      this.activityName = key;
    },
  },
  async created() {
    let now = parseInt(
      Date.now()
        .toString()
        .slice(0, 10)
    );
    let difference = this.expiresAt - now;
    if (difference < 3600) {
      console.log('need to refresh');
    }
    if (this.isLoggedIn === true) {
      // reactivate after styling done
      await this.getAthleteStats([this.tokenValue, this.idValue]);
      await this.getListOfAthleteActivities(this.tokenValue);
    }
  },
};
</script>
