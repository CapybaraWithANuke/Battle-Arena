<script setup>
</script>

<template>
  <nav class="menu">
      <div class="menu_container">

        <div class="HomeLogo"></div>

        <RouterLink to="/joinGame"><span class="menu_item"><img src="../assets/images/Sword.png" alt="Play Game" />Play Game</span></RouterLink>
        <RouterLink to="/backpack"><span class="menu_item"><img src="../assets/images/BackpackIcon.png" alt="Backpack" />Backpack</span></RouterLink>
        <RouterLink to="/buyAttack"><span class="menu_item"><img src="../assets/images/Cart.png" alt="Store" />Store</span></RouterLink>
        <RouterLink to="/playersRanking"><span class="menu_item"><img src="../assets/images/Players.png" alt="Players" />Players</span></RouterLink>
        <RouterLink to="/PlayersInfoSlide2"><span class="menu_item"><img src="../assets/images/History.png" alt="History" />History</span></RouterLink>
        <RouterLink to="/myAccountMV"><span class="menu_item"><img src="../assets/images/User.png" alt="My account" />My account</span></RouterLink>
      </div>
    </nav>  
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-size: 14px;
}

.menu {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 46px;
  margin-top: 100px;
  padding: 20px;
  width: 350px;
  height: 800px;
  position: absolute;
  flex-direction: column;
}

.menu_container {
  display: column;
}

.menu_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  color: black;
  margin: 25px 40px; 
}

.menu_item img {
  width: 35px;
  height: 35px;
  margin-bottom: 5px;
  margin: 10px 0; 
  margin-right: 30px;
}

.HomeLogo {
  width: 80px;
  height: 80px;
  background: url("../assets/images/HomeLogo.png");
  position: absolute;
  top: 11px;
  left: 19px;
}

@media screen and (min-width: 2277px) {
  .menu {
    flex-direction: row;
    width: 80%; 
    height: 105px;
  }
  
  .menu_container {
  display:flex;
}
  .menu_item {
    margin: 0 60px;
  }
 
}
 
</style>


