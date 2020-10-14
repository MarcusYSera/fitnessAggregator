<template>
  <div>
    Home
    <button v-on:click="getMessages">Get Messages from postgres</button>
    <div v-for="(value, key) in displayMessages" v-bind:key="key.id">
      {{ value.name }} {{ value.message }}
    </div>
    <button v-on:click="sendIdToken">Send info to db</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['displayMessages']),
  },
  methods: {
    ...mapActions(['getMessages', 'sendIdToken', 'getRefreshToken']),
  },
};
</script>

<style scoped></style>
