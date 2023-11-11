<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

    <div class="Screen">   
       <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>
       <img class="Amongus" src="..\assets\images\AmongusRed.png">
       <Label class="UserTitle">Amongus 1</Label>
       <div class="Textbox">
        <strong>Experience:</strong> 1200 <br><br>
        <strong>Level:</strong> 5 <br><br>
        <strong>Coins:</strong> 3400
       </div>

       <button class="ActualSlide"> </button>
       <RouterLink to="/PlayersInfoSlide2">
        <button class="OtherSlide"> </button>
       </RouterLink>
       
    </div>   

</template>



<style scoped>
.Screen {
  width: 800px;
  height: 1280px;
  background: url("..\assets\images\BackgroundPlayersInfoSlide1.png");
  margin: 0px;
  position: absolute;
  border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
  position: absolute;
  top: 111px;
  left: 19px;
}

.Amongus {
  position: absolute;
  width: 105px;
  left: 200px;
  top: 573px;
}

.Textbox{
  position: absolute;
  left: 388px;
  top: 573px;
  color: white;
  font-family: Inter;
  font-size: 20px;
  word-spacing: 45px;
  text-align: left;
}

.ActualSlide {
  border: 0px;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 870px;
  left: 380px;
}
.OtherSlide {
  border: 0px;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: gray;
  position: absolute;
  top: 870px;
  left: 425px;
}

.UserTitle {
  position: absolute;
  left: 328px;
  top: 379px;
  color: white;
  font-family: Inter;
  font-size: 30px;
  font-weight: bold;
}

</style>


