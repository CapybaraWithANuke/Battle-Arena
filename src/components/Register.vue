<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <label class="titan_one">BATTLE<br>ARENA</label><br>
  <input placeholder="Username"><br>
  <input placeholder="Password"><br>

  <image>  
  <img src="src\assets\images\AmongusRed.png" alt="A photo">
  <img src="src\assets\images\AmongusBlue.png" alt="A photo">
  <img src="src\assets\images\AmongusWhite.png" alt="A photo"> <br>
  </image>

  <button>SIGN UP</button><br>

  <label>Already have an account? <RouterLink to="/login">Login</RouterLink></label><br>


  
</template>

<style scoped>

@font-face {
  font-family: "TitanOne";
  src: local("TitanOne"),
   url(../assets/fonts/TitanOne-Regular.ttf) format("truetype");
}

.titan_one {
  font-family: "TitanOne";
  font-size: 40px;
}
</style>