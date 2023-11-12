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

@media screen and (min-width: 2421px) {
    .Screen {
        width: 1728px;
        height: 1117px;
        background: url("../assets/images/SELL ATTACK POPUP.png");
    }
}
</style>