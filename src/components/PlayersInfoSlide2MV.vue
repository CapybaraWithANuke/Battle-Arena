<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

    <div class="Screen">   
       <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>
       
       <label class="TitleTable">AMONGUS2</label>
       <label class="Ratio">% games won: 45%</label>

      <div class="RowTitles">
        <label class="TitlesItem">GAME</label>
        <label class="TitlesItem">SIZE</label>
        <label class="TitlesItem">MAX HP</label>
        <label class="TitlesItem">DATE</label>
      </div>

       <div class="column-game">
            <label class="table-cell">Fireball</label>
            <label class="table-cell">Frostbolt</label>
            <label class="table-cell">Lightining bolt</label>
            <label class="table-cell">Stone pillar</label>
        </div>

        <div class="column-size">
            <label class="table-cell">6</label>
            <label class="table-cell">5</label>
            <label class="table-cell">7</label>
            <label class="table-cell">3</label>
        </div>

        <div class="column-hp">
            <label class="table-cell">20</label>
            <label class="table-cell">11</label>
            <label class="table-cell">43</label>
            <label class="table-cell">5</label>
        </div>

        <div class="column-date">
            <label class="table-cell">21.04.2019</label>
            <label class="table-cell">15.07.2022</label>
            <label class="table-cell">29.11.2023</label>
            <label class="table-cell">12.06.1897</label>
        </div>
      
        <button class="ActualSlide"> </button>
        <RouterLink to="/PlayersInfoSlide1">
        <button class="OtherSlide"> </button>
        </RouterLink>
        
       
    </div>   

</template>



<style scoped>
.Screen {
  width: 800px;
  height: 1280px;
  background: url("..\assets\images\BackgroundPlayersSlide2.png");
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
  font-size: 29px;
  font-weight: bold;
  font-family: Inter;
  position: absolute;
  left: 322px;
  top: 371px;
  color: white;
}

.Ratio {
  font-size: 20px;
  font-weight: bold;
  font-family: Inter;
  position: absolute;
  left: 312px;
  top: 471px;
  color: white;
}

.table-cell {
    font-size: 15px;
    height: 68px;
    color: white;
    font-family: Inter;
    font-size: 20px;
}


.column-game {
    position: absolute;
    top: 621px;
    left: 105px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.column-size {
    position: absolute;
    top: 621px;
    left: 299px;
    display: flex;
    flex-direction: column;
}

.column-hp {
    position: absolute;
    top: 621px;
    left: 470px;
    display: flex;
    flex-direction: column;
}

.column-date {
    position: absolute;
    top: 621px;
    left: 600px;
    display: flex;
    flex-direction: column;
}

.RowTitles {
  color: white;
  font-family: Inter;
  font-weight: bold;
  font-size: 24px;
  position: absolute;
  display: flex;
  top: 550px;
  left: 45px;

}

.TitlesItem {
  width: 170px;
  left: 80px;
}

.ActualSlide {
  border: 0px;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 915px;
  left: 425px;
}
.OtherSlide {
  border: 0px;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: gray;
  position: absolute;
  top: 915px;
  left: 380px;
}

@media screen and (min-width: 2421px) {
  .Screen {
    width: 1728px;
    height: 1117px;
    background: url("..\assets\images\BackgroundPlayersSlide2Web.png");
  }
 
 .ActualSlide {
  left: 824px;
  width: 29px;
  height: 29px;
 }

 .OtherSlide {
  left: 869px;
  width: 29px;
  height: 29px;
 }

 .TitleTable {
  font-size: 32px;
  left: 752px;
  top: 161px;
  
}

 
}




</style>


