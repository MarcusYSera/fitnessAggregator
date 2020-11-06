<template>
  <div class="grid-container-home">
    <!-- Home -->
    <!-- .item{$}*10 -->
    <div class="flex-sidebar">
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
      {{ googleSignedIn }}
      <button v-if="!googleSignedIn" v-on:click="googleSignIn">
        Google sign in
      </button>
      <button v-else v-on:click="googleSignOut">Google sign out</button>
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
.flex-sidebar {
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.homecontent {
  grid-area: homec;
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';
// import { gapiPromise } from '../api/gapi';

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'displayMessages',
      'placeholder',
      'idValue',
      'googleSignedIn',
    ]),
  },
  methods: {
    ...mapActions([
      'getMessages',
      'sendIdToken',
      'getRefreshToken',
      'loadGapi',
      'googleSignIn',
      'googleSignOut',
      'loadStatus',
    ]),
  },
  created() {
    this.loadGapi();
    // this.loadStatus();
    // this.isSignedIm();
  },
};
</script>
