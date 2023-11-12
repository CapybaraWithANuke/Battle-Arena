<script></script>  
  
<template>
  <div class="Screen">   
    <router-link to="/menuMv">
    <div class="HomeLogo"></div>
  </router-link>
     
  </div>   
</template>


<style scoped>
.Screen {
    width: 800px;
    height: 1280px;
    background: url("../assets/images/BSP.png");
    margin: 0px;
    position: absolute;
    border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
  width: 80px;
  height: 80px;
  background: url("../assets/images/HomeLogo.png");
  position: absolute;
  top: 110px;
  left: 19px;
}
</style>