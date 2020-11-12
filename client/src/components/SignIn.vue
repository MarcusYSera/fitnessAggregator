<template>
  <div class="grid-container">
    <!-- <article class="flex-container column"> -->
    <!-- <div class="sign-in"> -->
    <form class="flex-container column" @submit.prevent="onSubmit">
      <h2>
        Sign In
      </h2>
      <input
        class="item form-field"
        type="text"
        v-model="email"
        placeholder="email"
      />
      <input
        class="item form-field"
        type="password"
        v-model="password"
        placeholder="password"
      />
      <input class="item sign-in-button" type="submit" value="Sign In" />
    </form>
    <hr class="line" />
    <div>
      <button class="sign-in-button">
        Google Sign In
      </button>
    </div>
    <!-- </div> -->
    <!-- </article> -->
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
  min-height: 30vh;
  min-width: 30vh;
}
.item {
  margin-top: 4%;
}
.sign-in-button,
.form-field {
  width: 100%;
  height: 4vh;
}
.line {
  border: none;
  border-top: 3px double #333;
  color: #333;
  overflow: visible;
  text-align: center;
  width: 100%;
  min-height: 1rem;
  margin-top: 1.5rem;
}
.line:after {
  background: #fff;
  content: 'Or Sign In With';
  padding: 0 0.65rem;
  position: relative;
  top: -0.75rem;
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
