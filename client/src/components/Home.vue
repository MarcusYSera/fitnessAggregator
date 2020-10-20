<template>
  <div class="grid-container">
    Home
    <button v-on:click="getMessages">Get Messages from postgres</button>
    <div v-for="(value, key) in displayMessages" v-bind:key="key.id">
      {{ value.name }} {{ value.message }}
    </div>
    <button v-on:click="sendIdToken">Send info to db</button>
    <button v-on:click="getRefreshToken(idValue)">
      Change refresh token
    </button>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
      veritatis.
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 25vw;
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';
import { gapiPromise } from '../api/gapi';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['displayMessages', 'placeholder', 'idValue']),
  },
  methods: {
    ...mapActions(['getMessages', 'sendIdToken', 'getRefreshToken']),
  },
  created() {
    gapiPromise.then(() => {
      const gapi = window.gapi;
      if (!gapi) {
        console.log('gapi failed to load');
        return;
      }
      if (!gapi.auth) {
        console.log('gapi loaded successfully, continue auth process');
      }
    });
  },
};
</script>
