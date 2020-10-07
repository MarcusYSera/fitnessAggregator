<template>
  <div class="container">
    <router-link to="/">
      <button>
        Home
      </button>
    </router-link>
    <div>
      <router-link to="/strava">
        <button>
          Strava
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['logout']),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  /* width: 100vw; */
}
/* .button {
} */
</style>
