<template>
  <div>Please wait....</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'StravaCodeHandler',
  methods: mapActions(['createToken']),
  created() {
    // consider making a hash map for key and values, or do a split and find [code][=]
    // https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
    const code = window.location.search.split('code=')[1].split('&scope')[0];
    this.createToken(code);
  },
};
</script>

<style></style>
