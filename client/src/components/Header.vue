<template>
  <header class="flex-container">
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
  </header>
</template>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
