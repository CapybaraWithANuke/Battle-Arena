<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="Screen">   
      <RouterLink to="/menuMv">
      <div class="HomeLogo"></div>
    </RouterLink>
       
    </div>   
       
</template>

<style scoped>
.Screen {
  width: 120px;
  height: 135px;
  margin-top: 100px;
  margin-left: 0;
  position: absolute;
  border: 1px solid rgba(0,0,0,1);
  border-radius: 46px;
  background-color: white;
}

.HomeLogo {
  width: 80px;
  height: 80px;
  background: url("../assets/images/HomeLogo.png");
  position: absolute;
  top: 30px;
  left: 19px;
}

</style>


