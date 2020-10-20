<template>
  <div class="flex-container">
    <router-link to="/" class="flex-item item-1">
      <button>
        Home
      </button>
    </router-link>
    <router-link to="/strava" class="flex-item item-2">
      <button>
        Strava
      </button>
    </router-link>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
  /* align-content: flex-start; */
}
.flex-item {
  margin: 10px;
}
</style>

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
