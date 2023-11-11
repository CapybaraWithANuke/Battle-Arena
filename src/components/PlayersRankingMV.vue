<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

    <div class="Screen">   
       <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>
       <div class="TitleTable">PLAYERS RANKING</div>
       <input class="SearchBar" placeholder="Search">
       <button class="ButtonMagnifyingGlass" type="button"> <img class="Trashbin" src="..\assets\images\MagnifyingGlass.png"> </button>
       <div class="Textbox">
        <strong>POSITION NAME EXPERIENCE</strong><br>
        1 amongus1 5000<br><br>
        2 amongus2 4999<br><br>
        3 amongus3 4888<br><br>
        4 amongus4 4099<br><br>
        5 amongus5 5848<br>
       </div>
       
    </div>   

</template>



<style scoped>
.Screen {
  width: 800px;
  height: 1280px;
  background: url("..\assets\images\BackgroundPlayersRanking.png");
  margin: 0px;
  position: absolute;
  border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
  position: absolute;
  top: 111px;
  left: 19px;
}

.TitleTable {
  font-size: 24px;
  font-weight: bold;
  font-family: Inter;
  position: absolute;
  left: 282px;
  top: 411px;
  color: white;
}

.Textbox{
  position: absolute;
  left: 162px;
  top: 560px;
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 19px;
  word-spacing: 95px;
  text-align: center;
}

.SearchBar {
  width: 385px;
  height: 38px;
  border-radius: 13px;
  font-family: Inter;
  font-size: 19px;
  position: absolute;
  left: 209px;
  top: 487px;
}

.ButtonMagnifyingGlass {
  background: none;
  border: 0px;
  cursor: pointer;
  position: absolute;
  left: 559px;
  top: 497px;
}


</style>


