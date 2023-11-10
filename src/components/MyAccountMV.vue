<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

    <div class="Screen">   
       <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>

        
    </div>   
       
</template>



<style scoped>
.Screen {
  width: 800px;
  height: 1280px;
  background: url("..\assets\images\BackgroundMyAccountMV.png");
  margin: 10px;
  position: absolute;
  border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
    position: absolute;
    top: 111px;
    left: 19px;
}

</style>


