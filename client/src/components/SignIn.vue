<template>
  <div class="grid-container">
    <article class="flex-container column">
      <!-- <div class="sign-in"> -->
      <h3>
        Sign In
      </h3>
      <form>
        <label class="item">Email</label>
        <label class="item">Password</label>
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
export default { name: 'SignIn' };
</script>
