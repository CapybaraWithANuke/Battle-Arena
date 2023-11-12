<script setup>
</script>

<template>
  <label class="titan_one">BATTLE<br>ARENA</label><br>
  <input placeholder="Username"><br>
  <input placeholder="Password"><br>
  <button>LOGIN</button><br>
  
  <label>Haven't registered yet? <RouterLink to="/" >Register</RouterLink></label><br>

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
