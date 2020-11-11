<template>
  <div>
    <div v-if="isLoggedIn" class="grid-container-strava">
      <div class="nav">
        <a class="flex-container two">
          <button v-on:click="logout">
            Logout
          </button>
        </a>
        <h1 class="flex-container one">Strava Stats for {{ firstName }}</h1>
      </div>
      <AthleteActivityTable
        class="table-one"
        v-on:emitted-activity="emitAthleteActivityTable"
        v-bind:propsActivitiesList="activitiesList"
      ></AthleteActivityTable>
      <ActivityDescriptionTable
        class="table-two"
        v-bind:propsActivitiesList="activitiesList"
        v-bind:propsActivityName="activityName"
      ></ActivityDescriptionTable>
    </div>
    <div v-else class="grid-container-strava">
      <div class="nav">
        <a class="flex-container two">
          <button href="#" v-on:click="login">
            Strava Login
          </button>
        </a>
        <h2 class="flex-container three">Please Login to continue</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container-strava {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.25fr 1fr;
  grid-template-areas:
    'header header'
    'table-one table-two';
  /* padding: 10px; */
}
.nav {
  grid-area: header;
}
.table-one {
  grid-area: table-one;
}
.table-two {
  grid-area: table-two;
}

.flex-container {
  display: flex;
}
.flex-container.one {
  justify-content: center;
  align-items: center;
}
.flex-container.two {
  justify-content: flex-end;
  align-content: center;
}
.flex-container.three {
  justify-content: center;
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
      'refreshTokenValue',
    ]),
  },
  data() {
    return { activityName: null };
  },
  methods: {
    ...mapActions([
      'login',
      'logout',
      'refreshToken',
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
    // let difference = this.expiresAt - now;
    // console.log(difference);
    // console.log(`created: ${this.isLoggedIn}`);
    if (this.expiresAt - now < 3600 && this.isLoggedIn === true) {
      console.log('need to refresh');
      await this.refreshToken(this.refreshTokenValue);
    }
    if (this.isLoggedIn === true) {
      // reactivate after styling done
      await this.getAthleteStats([this.tokenValue, this.idValue]);
      await this.getListOfAthleteActivities(this.tokenValue);
    }
  },
};
</script>
