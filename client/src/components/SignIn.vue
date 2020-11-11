<template>
  <div class="grid-container">
    <article class="flex-container column">
      <!-- <div class="sign-in"> -->
      <form class="flex-container column" @submit.prevent="onSubmit">
        <h3>
          Sign In
        </h3>
        <label class="item" for="email">Email</label>
        <input type="text" v-model="email" />
        <label class="item" for="password">Password</label>
        <input type="password" v-model="password" />
        <input type="submit" value="Sign In" />
      </form>
      <br />
      <div>Or sign in with</div>
      <br />
      <div class="item">Google Sign In</div>
      <!-- </div> -->
    </article>
  </div>
</template>

<style scoped>
.grid-container {
  justify-content: center;
  align-content: center;
}
.flex-container {
  justify-content: center;
  align-items: center;
  /* text-align: left; */
  outline: 1px black solid;
  padding: 20px;
  min-height: 40vh;
  min-width: 40vh;
}
</style>

<script>
export default {
  name: 'SignIn',
  data() {
    return { email: '', password: '' };
  },
  methods: {
    onSubmit() {
      let user = { email: this.email, password: this.password };
      console.log(user);
      // this.$emit('user-submitted', user);
      this.email = '';
      this.password = '';
    },
  },
};
</script>
