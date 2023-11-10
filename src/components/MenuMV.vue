<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
   <div class="Screen">   

            <span class="PlayGameText">Play Game</span>
            <span class="BackpackText">Backpack</span>
            <span class="StoreText">Store</span>
            <span class="PlayersText">Players</span>
            <span class="HistoryText">History</span>
            <RouterLink to="/myAccountMV"><span class="MyAccountText">My account</span></RouterLink>
            
            <div class="Sword"></div>
            <div class="Cart"></div>
            <div class="Players"></div>
            <div class="Backpack"></div>
            <div class="History"></div>
            <div class="User"></div>

            <div class="HomeLogo"> </div>
     </div>   
</template>



<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-size: 14px;
}
.Screen {
  width: 800px;
  height: 1280px;
  background: url("..\assets\images\BackgroundMenuMV.png");
  margin: 10px;
  position: absolute;
  border: 1px solid rgba(0,0,0,1);
}

.PlayGameText {
  position: absolute;
  top: 258px;
  left: 142px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  
}
.StoreText {
  position: absolute;
  top: 464px;
  left: 142px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  
}

.MyAccountText {
  position: absolute;
  top: 773px;
  left: 142px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  
}
.BackpackText {
  position: absolute;
  top: 361px;
  left: 142px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  
}
.HistoryText {
  position: absolute;
  top: 670px;
  left: 143px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  
}
.PlayersText {
  position: absolute;
  top: 567px;
  left: 142px;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  
}
.Sword {
  width: 35px;
  height: 35px;
  background: url("..\assets\images\Sword.png");
  position: absolute;
  top: 252px;
  left: 86px;
}
.Cart {
  width: 40px;
  height: 40px;
  background: url("..\assets\images\Cart.png");
  position: absolute;
  top: 459px;
  left: 81px;
}
.Players {
  width: 39px;
  height: 39px;
  background: url("..\assets\images\Players.png");
  position: absolute;
  top: 561px;
  left: 86px;
}
.Backpack {
  width: 48px;
  height: 48px;
  background: url("..\assets\images\Backpack.png");
  position: absolute;
  top: 349px;
  left: 81px;
}
.History {
  width: 37px;
  height: 37px;
  background: url("..\assets\images\History.png");
  position: absolute;
  top: 666px;
  left: 86px;
}
.User {
  width: 35px;
  height: 35px;
  background: url("..\assets\images\User.png");
  position: absolute;
  top: 767px;
  left: 88px;
}
.HomeLogo {
  width: 80px;
  height: 80px;
  background: url("..\assets\images\HomeLogo.png");
  position: absolute;
  top: 111px;
  left: 19px;
}

</style>


