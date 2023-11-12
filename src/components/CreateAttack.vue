<script>
</script>

<template>

    <div class="Screen">
    
    <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>

        <div class="navigation-text-general">
            <router-link to="/buyAttack"><label class="buy-text">Buy attack</label></router-link>
            <router-link to="/sellAttack"><label class="sell-text">Sell attack</label></router-link>
            <label class="create-text"><strong>Create attack</strong></label>
        </div>

        <input class="input_field" placeholder="Name">
        <label class="positions">Positions</label>
        <img src="../assets/images/AmongusBlack.png" class="amogus-black">
        <button class="create-button">CREATE</button>

    </div>
    
</template>

<style scoped>

.Screen {
    background: url("../assets/images/BackgroundCreateAttackMV.png");
    width: 800px;
    height: 1280px;
    margin: 0px;
    position: absolute;
    border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
  position: absolute;
  top: 111px;
  left: 19px;
}

.navigation-text-general {
    font-size: 25px;
    position: absolute;
    top: 305px;
    white-space: nowrap;
}

.buy-text {
    color: #8F8F8F;
    position: absolute;
    left: 125px;
}

.sell-text {
    color: #8F8F8F;
    position: absolute;
    left: 339px;
}

.create-text {
    position: absolute;
    left: 530px;
}

.input_field {
    width: 30%;
    padding: 20px;
    border: 1px solid #ddd;
    margin-top: 50px;
    position: absolute;
    top: 330px;
    left: 245px;
}

.positions {
    font-size: 25px;
    position: absolute;
    top: 450px;
    left: 250px;
}

.amogus-black {
    position: absolute;
    top: 715px;
    left: 375px;
}

.create-button {
    border-radius: 50px;
    position: absolute;
    background-color: white;
    color: black;
    height: 80px;
    width: 250px;   
    top: 975px;
    left: 275px;
    font-size: 50px;
}

</style>