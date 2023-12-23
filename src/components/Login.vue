<script setup>
</script>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            response:"",
      }
    },
    methods: {
    }
}
</script>

<template>
  <main>
    <div class="register_container">
      <h1 class="titan_one">BATTLE ARENA</h1>
      <form class="form_container">
            <input id="username" class="input_field" type="text" placeholder="Username" required>
            <input id="password" class="input_field" type="password" placeholder="Password" required>

              <RouterLink to="/menuMV">
                <button type="submit" class="signup_button">LOG IN</button>
              </RouterLink>

            <p class="label_registration">Don't have an account?<RouterLink to="/">Login</RouterLink></p>
            </form>
    </div>
  </main>
</template>

<style scoped>

  .signup_button{
    margin-top: 40px;
  }

  @font-face {
    font-family: "TitanOne";
    src: local("TitanOne"),
    url(../assets/fonts/TitanOne-Regular.ttf) format("truetype");
  }
  @media screen and (min-width: 1000px) {
    .form_container {
    width: 700px;
    height: auto;
    }
  }

</style>

