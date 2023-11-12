<script>
</script>

<template>
    <div class="Screen"> 
        <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>

        <div class="navigation-text-general">
            <router-link to="/buyAttack"><label class="buy-text">Buy attack</label></router-link>
            <label class="sell-text"><strong>Sell attack</strong></label>
            <router-link to="/createAttack"><label class="create-text">Create attack</label></router-link>
        </div>

        <label class="name-text table-titles-general">NAME</label>
        <label class="power-text table-titles-general">POWER</label>
        <label class="level-text table-titles-general">LEVEL</label>
        
        <div class="column-general-aligned-to-start values-name table-values-general">
            <label class="table-cell">Chaos meteor</label>
            <label class="table-cell">Ice shield</label>
            <label class="table-cell">Arcane implosion</label>
            <label class="table-cell">Poisonous arrow</label>
            <label class="table-cell">Laser beam</label>
            <label class="table-cell">Wind strike</label>
            <label class="table-cell">Amaterasu</label>

        </div>

        <div class="column-general-not-aligned values-power table-values-general">
            <label class="table-cell">6</label>
            <label class="table-cell">5</label>
            <label class="table-cell">7</label>
            <label class="table-cell">3</label>
            <label class="table-cell">4</label>
            <label class="table-cell">2</label>
            <label class="table-cell">17</label>
        </div>

        <div class="column-general-not-aligned values-level table-values-general">
            <label class="table-cell">4</label>
            <label class="table-cell">3</label>
            <label class="table-cell">4</label>
            <label class="table-cell">2</label>
            <label class="table-cell">2</label>
            <label class="table-cell">1</label>
            <label class="table-cell">5</label>
        </div>

        <router-link to="/sellattackpopup"><button class="transparent-button"></button></router-link>
    </div>
</template>

<style scoped>
.Screen {
    width: 800px;
    height: 1280px;
    background: url("../assets/images/BackgroundBuyAttackMV.png");
    margin: 0px;
    position: absolute;
    border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
  position: absolute;
  top: 111px;
  left: 19px;
}

.transparent-button {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    width: 640px;
    height: 425px;
    position: absolute;
    top: 490px;
    left: 80px;
}

.table-titles-general {
    font-size: 25px;
    position: absolute;
    top: 445px;
}

.navigation-text-general {
    font-size: 25px;
    position: absolute;
    top: 380px;
    white-space: nowrap;
}

.buy-text {
    color: #8F8F8F;
    position: absolute;
    left: 129px;
}

.sell-text {
    position: absolute;
    left: 335px;
}

.create-text {
    color: #8F8F8F;
    position: absolute;
    left: 530px;
}

.name-text {
    left: 120px;
}
.power-text {
    left: 355px;
}
.level-text {
    left: 600px;
}

.table-cell {
    font-size: 15px;
    height: 60px;
}

.column-general-aligned-to-start {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.column-general-not-aligned {
    position: absolute;
    display: flex;
    flex-direction: column;
}

.table-values-general {
    top: 515px;
}

.values-name {
    left: 125px;
}

.values-power {
    left: 390px;
}

.values-level {
    left: 630px;
}

@media screen and (min-width: 2421px) {
  .Screen {
    width: 1728px;
    height: 1117px;
    background: url("../assets/images/BUY ATTACK.png");
  }

  .navigation-text-general {
    font-size: 45px;
    top: 143px;
  }

  .buy-text {
    left: 335px;
  }   

  .sell-text {
    left: 755px;
  }

  .create-text {
    left: 1135px;
  }

  .name-text {
    font-size: 40px;
    top: 250px;
    left: 350px;
  }

  .power-text {
    font-size: 40px;
    top: 250px;
    left: 790px;
  }

  .level-text {
    font-size: 40px;
    top: 250px;
    left: 1200px;
  }

  .table-cell {
    font-size: 35px;
    height: 97px;
  }
  .table-values-general {
    top: 350px;
  }
  .values-name {
    left: 300px;    
  }

  .values-power {
    left: 845px;    
  }

  .values-level {
    left: 1245px;    
  }

  .transparent-button {
    top: 320px;
    left: 240px;
    height: 680px;
    width: 1240px;
  }
  
}
</style>