<script> </script>

<template>
    <div class="Screen"> 
        <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>

        <div class="navigation-text-general">
            <label class="buy-text"><strong>Buy attack</strong></label>
            <router-link to="/sellAttack"><label class="sell-text">Sell attack</label></router-link>
            <router-link to="/createAttack"><label class="create-text">Create attack</label></router-link>
        </div>

        <label class="name-text table-titles-general">NAME</label>
        <label class="power-text table-titles-general">POWER</label>
        <label class="level-text table-titles-general">LEVEL</label>
        <label class="price-text table-titles-general">PRICE</label>
        
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

        <div class="column-general-not-aligned values-price table-values-general">
            <label class="table-cell">2550</label>
            <label class="table-cell">2350</label>
            <label class="table-cell">3600</label>
            <label class="table-cell">500</label>
            <label class="table-cell">1475</label>
            <label class="table-cell">250</label>
            <label class="table-cell">9999</label>
        </div>
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
    position: absolute;
    left: 125px;
}

.sell-text {
    color: #8F8F8F;
    position: absolute;
    left: 339px;
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
    left: 295px;
}
.level-text {
    left: 450px;
}

.price-text {
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
    left: 330px;
}

.values-level {
    left: 480px;
}

.values-price {
    left: 615px;
}
</style>