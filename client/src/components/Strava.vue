<template>
  <div class="grid-container-strava">
    <div v-if="isLoggedIn" class="nav item flex-container">
      <h1 class="item one">Strava Stats for {{ firstName }}</h1>
      <a v-on:click="logout" v-if="isLoggedIn" class="item two">
        <button>
          Logout
        </button>
      </a>
    </div>
    <a v-else href="#" v-on:click="login" class="nav item">
      <button>
        Strava Login
      </button>
    </a>
    <!-- <a href="#" v-on:click="refreshToken(refreshTokenValue)">
      <button>Refresh Button</button>
    </a> -->
    <AthleteActivityTable
      class="table-one"
      v-on:emitted-activity="emitAthleteActivityTable"
      v-bind:propsActivitiesList="activitiesList"
    ></AthleteActivityTable>
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
      class="table-two"
      v-bind:propsActivitiesList="activitiesList"
      v-bind:propsActivityName="activityName"
    ></ActivityDescriptionTable>
  </div>
</template>

<style scoped>
.grid-container-strava {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.25fr 1fr;
  grid-template-areas:
    'header header'
    'table-one table-two';
  justify-items: center;
  align-items: center;
}
.nav {
  grid-area: header;
}
.table-one {
  grid-area: table-one;
  width: 100%;
}
.table-two {
  grid-area: table-two;
}
.flex-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item.one {
  margin-left: auto;
}
.item.two {
  margin: 10px 10px 10px auto;
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
    let difference = this.expiresAt - now;
    console.log(difference);
    console.log(`created: ${this.isLoggedIn}`);
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
