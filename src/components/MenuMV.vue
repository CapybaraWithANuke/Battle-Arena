<script setup>
</script>

<template>

<nav>
    <div class="Screen">
            <RouterLink to="/playGame"><span class="PlayGameText">Play Game</span></RouterLink>
            <RouterLink to="/backpack"><span class="BackpackText">Backpack</span></RouterLink>
            <RouterLink to="/buyAttack"><span class="StoreText">Store</span></RouterLink>
            <RouterLink to="/playersRankingMV"><span class="PlayersText">Players</span></RouterLink>
            <RouterLink to="/PlayersInfoSlide2"><span class="HistoryText">History</span></RouterLink>
            <RouterLink to="/myAccountMV"><span class="MyAccountText">My account</span></RouterLink>
            
            <div class="Sword"></div>
            <div class="Cart"></div>
            <div class="Players"></div>
            <div class="Backpack"></div>
            <div class="History"></div>
            <div class="User"></div>

            <div class="HomeLogo"></div>
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
.Screen {
  width: 350px;
  height: 800px;
  margin-top: 100px;
  position: absolute;
  border: 1px solid rgba(0,0,0,1);
  border-radius: 46px;
  background-color: white;
}

.PlayGameText {
  position: absolute;
  top: 150px;
  left: 142px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  color: black
  
}
.StoreText {
  position: absolute;
  top: 350px;
  left: 142px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  color: black
}

.MyAccountText {
  position: absolute;
  top: 650px;
  left: 142px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  color: black
  
}
.BackpackText {
  position: absolute;
  top: 250px;
  left: 142px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  color: black
  
}
.HistoryText {
  position: absolute;
  top: 550px;
  left: 143px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  color: black
  
}
.PlayersText {
  position: absolute;
  top: 450px;
  left: 142px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  color: black
  
}
.Sword {
  width: 35px;
  height: 35px;
  background: url("../assets/images/Sword.png");
  position: absolute;
  top: 150px;
  left: 86px;
}
.Cart {
  width: 40px;
  height: 40px;
  background: url("../assets/images/Cart.png");
  position: absolute;
  top: 350px;
  left: 81px;
}
.Players {
  width: 39px;
  height: 39px;
  background: url("../assets/images/Players.png");
  position: absolute;
  top: 450px;
  left: 86px;
}
.Backpack {
  width: 48px;
  height: 48px;
  background: url("../assets/images/BackpackIcon.png");
  position: absolute;
  top: 250px;
  left: 81px;
}
.History {
  width: 37px;
  height: 37px;
  background: url("../assets/images/History.png");
  position: absolute;
  top: 550px;
  left: 86px;
}
.User {
  width: 35px;
  height: 35px;
  background: url("../assets/images/User.png");
  position: absolute;
  top: 650px;
  left: 88px;
}
.HomeLogo {
  width: 80px;
  height: 80px;
  background: url("../assets/images/HomeLogo.png");
  position: absolute;
  top: 11px;
  left: 19px;
}

</style>


