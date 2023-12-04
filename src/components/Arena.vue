<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

    <div class="Screen">  

      <label class="TitleGame">GAME 5</label>

      <label class="TitleAttacks">Attacks</label>

      <RouterLink to="/menuMv"> <img class="HomeLogo" src="../assets/images/HomeLogo.png"> </RouterLink>

      <label class="FirstColumn"> 
        <strong>Logs:</strong> <br>
        -The game started <br>
        -Player1 moved left <br>
        -Player2 moved forward <br>
        -Player1 moved forward <br>
        -Player2 uses laser ray
      </label>

      <label class="SecondColumn"> 
        -Player1 lost 2 HP <br>
        -Player1 uses shark bite <br>
        -Player2 lost 3 HP <br>
        -Player2 is dead <br>
        -Plateyer1 wins the game
      </label>

      <button class="FirstAttack">Fireball</button>
      <button class="SecondAttack">Italian kick</button>
      <button class="ThirdAttack">Shark bite</button>

      
      <button class="LeftArrowB"> <img src="../assets/images/ButtonMovement.png"></button>
      <button class="RightArrowB"> <img id="RightArr" src="../assets/images/ButtonMovement.png"></button>
      <button class="TopArrowB"> <img id="TopArr" src="../assets/images/ButtonMovement.png" ></button>
      <button class="BottomArrowB"> <img id="BottomArr" src="../assets/images/ButtonMovement.png"></button>
      
    </div>   

</template>



<style scoped>
.Screen {
  width: 800px;
  height: 1280px;
  background: url("../assets/images/BackgroundArena.png");
  margin: 0px;
  position: absolute;
  border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
  position: absolute;
  top: 10px;
  left: 706px;
  background-color: white;
  padding: 3px;
  border-radius: 5px;
  
}

.TitleGame {
  font-family: "TitanOne";
  font-size: 90px;
  color: white;
}

#RightArr{
  rotate: 180deg;
}

#TopArr{
  rotate: 90deg;
}

#BottomArr{
  rotate: 270deg;
}
.LeftArrowB {
  background: none;
  position: absolute;
  left: 233px;
  top: 1085px;
}

.RightArrowB {
  background: none;
  position: absolute;
  left: 455px;
  top: 1085px;
}

.TopArrowB {
  background: none;
  position: absolute;
  left: 344px;
  top: 990px;
}

.BottomArrowB {
  background: none;
  position: absolute;
  left: 344px;
  top: 1173px;
}

.FirstAttack {
  position: absolute;
  left: 19px;
  top: 895px;
  height: 67px;
  width: 250px;
  border-radius: 54px;
  color: white;
  font-family: Inter;
  font-size: 32px;
  background-color: rgba(255, 0, 0, 0.552);
}

.SecondAttack {
  position: absolute;
  left: 275px;
  top: 895px;
  height: 67px;
  width: 250px;
  border-radius: 54px;
  color: white;
  font-family: Inter;
  font-size: 32px;
  background-color: rgba(64, 255, 0, 0.552);
}

.ThirdAttack {
  position: absolute;
  left: 531px;
  top: 895px;
  height: 67px;
  width: 250px;
  border-radius: 54px;
  color: white;
  font-family: Inter;
  font-size: 32px;
  background-color: rgba(60, 0, 255, 0.552);
}

.FirstColumn {
  font-family: Inter;
  font-size: 15px;
  color: white;
  position: absolute;
  left: 130px;
  top: 135px;
  text-align: left;
}

.SecondColumn {
  font-family: Inter;
  font-size: 15px;
  color: white;
  position: absolute;
  left: 430px;
  top: 156px;
  text-align: left;
}

.TitleAttacks{
  display: none;
}

@media screen and (min-width: 2421px) {
  .Screen {
    width: 1728px;
    height: 1117px;
    background: url("../assets/images/BackgroundArenaWeb.png");
  }

  .HomeLogo {
  position: absolute;
  top: 111px;
  left: 19px;
}

.TopArrowB{
  left: 1368px;
  top: 621px
}

.BottomArrowB{
  left: 1368px;
  top: 819px;
}

.RightArrowB{
  left:1480px;
  top: 719px;
}

.LeftArrowB{
  top: 719px;
  left: 1255px;
}

.TitleGame{
  font-size: 150px;
}

.FirstAttack{
  width: 318px;
  height: 49px;
  top: 327px;
  left: 1268px;
}

.SecondAttack{
  width: 318px;
  height: 49px;
  top: 390px;
  left: 1268px;
}

.ThirdAttack{
  width: 318px;
  height: 49px;
  top: 453px;
  left: 1268px;
}

.FirstColumn{
  font-size: 20px;
  left: 101px;
  top: 283px;
}

.SecondColumn{
  font-size: 20px;
  left: 101px;
  top: 463px;
}

.TitleAttacks{
  font-family: Inter;
  color: white;
  font-size: 24px;
  font-weight: bold;
  position:  absolute;
  top: 250px;
  left: 1378px;
  display: block;
}

}






</style>


