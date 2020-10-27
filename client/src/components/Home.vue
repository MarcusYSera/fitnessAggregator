<template>
  <div class="grid-container-home">
    <!-- Home -->
    <!-- .item{$}*10 -->
    <div class="sidebar">
      <div class="item">
        <button v-on:click="getMessages">Get Messages from postgres</button>
      </div>
      <div class="item">
        <button v-on:click="sendIdToken">Send info to db</button>
      </div>
      <div class="item">
        <button v-on:click="getRefreshToken(idValue)">
          Change refresh token
        </button>
      </div>
      <div class="item">
        <div v-for="(value, key) in displayMessages" v-bind:key="key.id">
          {{ value.name }} {{ value.message }}
        </div>
      </div>
    </div>
    <div class="homecontent">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
      veritatis.
    </div>
  </div>
</template>

<style scoped>
.grid-container-home {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  grid-template-areas: 'sidenav homec homec homec' 'sidenav homec homec homec' 'sidenav homec homec homec' 'sidenav homec homec homec';
}
.sidebar {
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
}
.homecontent {
  grid-area: homec;
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
