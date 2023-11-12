<script setup>

</script>

<template>
    <div class="Screen"> 
        <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>
        <label class="backpack-text"><strong>BACKPACK</strong></label>
        <label class="name-text">NAME</label><label class="power-text">POWER</label><label class="level-text">LEVEL NEEDED</label>
        <div class="column-name">
            <label class="table-cell">Fireball</label>
            <label class="table-cell">Frostbolt</label>
            <label class="table-cell">Lightining bolt</label>
            <label class="table-cell">Stone pillar</label>
        </div>

        <div class="column-power">
            <label class="table-cell">3</label>
            <label class="table-cell">4</label>
            <label class="table-cell">3</label>
            <label class="table-cell">5</label>
        </div>

        <div class="column-level">
            <label class="table-cell">1</label>
            <label class="table-cell">3</label>
            <label class="table-cell">2</label>
            <label class="table-cell">3</label>
        </div>
    </div>
</template>

<style scoped>

.Screen {
    width: 800px;
    height: 1280px;
    background: url("../assets/images/BackgroundBackpackMV.png");
    margin: 0px;
    position: absolute;
    border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
  position: absolute;
  top: 111px;
  left: 19px;
}

.backpack-text {
    font-size: 40px;
    position: absolute;
    top: 375px;
    left: 295px;
    color: white;
}

.name-text {
    font-size: 25px;
    position: absolute;
    top: 620px;
    left: 120px;
    color: white;
}
.power-text {
    font-size: 25px;
    position: absolute;
    top: 620px;
    left: 350px;
    color: white;

}
.level-text {
    font-size: 25px;
    position: absolute;
    top: 620px;
    left: 520px;
    color: white;

}

.table-cell {
    font-size: 15px;
    height: 53px;
    color: white;

}

.column-name {
    position: absolute;
    top: 685px;
    left: 125px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.column-power {
    position: absolute;
    top: 685px;
    left: 390px;
    display: flex;
    flex-direction: column;
}

.column-level {
    position: absolute;
    top: 685px;
    left: 600px;
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 2421px) {
  .Screen {
    width: 1728px;
    height: 1117px;
    background: url("../assets/images/BACKPACK.png");
  }

  .backpack-text {
    font-size: 60px;
    top: 140px;
    left: 675px;
  }

  .name-text {
    font-size: 40px;
    top: 350px;
    left: 750px;
  }

  .power-text {
    font-size: 40px;
    top: 350px;
    left: 980px;
  }

  .level-text {
    font-size: 40px;
    top: 350px;
    left: 1175px;
  }

  .table-cell {
    font-size: 25px;
    height: 85px;
  }

  .column-name {
    top: 445px;
    left: 755px;    
  }

  .column-power {
    top: 445px;
    left: 1040px;    
  }

  .column-level {
    top: 445px;
    left: 1290px;    
  }
  
}

</style>