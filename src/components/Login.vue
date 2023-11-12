<script setup>
</script>

<template>

<div class="register-container">
  <h1 class="titan_one">BATTLE<br>ARENA</h1><br>

  <div class="form-container">
    <input class="input_field" placeholder="Username"><br>
    <input class="input_field" placeholder="Password"><br>

    <button class="login-button"><RouterLink to="/playGame">LOG IN</RouterLink></button><br>

    <h2 class = "label_registration">Don't have an account <RouterLink to="/">Sign up</RouterLink></h2><br>

 </div>
</div>

</template>

<style scoped>

@font-face {
  font-family: "TitanOne";
  src: local("TitanOne"),
   url(../assets/fonts/TitanOne-Regular.ttf) format("truetype");
}

.titan_one {
  font-family: "TitanOne";
  font-size: 96px;
  margin-top: 185px;
  margin-left: 204px;
  margin-right: 204px;
  color: white;
}

.label_registration {
  font-family: "Inter";
  font-size: 20px;
  color: white;
  margin-top: 30px;
}

.input_field {
width: 90%;
padding: 20px;
border: 1px solid #ddd;
margin-top: 50px;
}

.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.form-container {
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid white; 
  border-radius: 5vw; 
  padding: 2vw; 
  display: inline-block; 
  margin-top: 2vw; 
  width: 500px; 
  height: 500px; 
  box-sizing: border-box;
}

.login-button {
  margin-top: 30px; 
  margin-left: 10px; 
  margin-right: 10px;
  height: 50px;
  width: 300px;
  border-radius: 35px;
}

@media screen and (min-width: 1000px) {
  .form-container {
    width: 50%;
    height: auto;
  }
}

</style>

