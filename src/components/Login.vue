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
      login() {
            const user = { player_ID: this.username, password: this.password };
            fetch("https://balandrau.salle.url.edu/i3/players/join", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)

            }).then((response) => response.json())
                .then((res) => {
                    if (res.error == undefined) {
                        localStorage.setItem('authToken', res.token);
                        localStorage.setItem('player_name', res.player_ID);
                        this.response = "Token: " + res.token;
                        this.$router.push('/joinGame');
                    } else {
                        this.response = res.error.message;
                    }

                }).catch(error => {
                    this.response = "Lost API connection :(";
                });
        }
    }
}
</script>

<template>
  <main>
    <div class="register_container">
      <h1 class="titan_one">BATTLE ARENA</h1>
      <!-- We use a form since it is an interactive section that allows users to submit data to the server for processing. 
      It is used to wrap the input fields, the register link and the button -->
      <form class="form_container">
            <input class="input_field" type="text" placeholder="Username" required v-model="username">
            <input class="input_field" type="password" placeholder="Password" required v-model="password">

            <button @click.prevent="login()" value="Login" class="signup_button">LOG IN</button>
            <p> {{ response }}</p>
            <p class="label_registration">Don't have an account? <RouterLink to="/">Register</RouterLink></p>
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

