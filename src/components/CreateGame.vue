<script setup>
import { RouterLink } from 'vue-router'

const sizeOptions = [2, 3, 4, 5, 6, 7, 8];
let selectedSize = 2; // Default/initial value for the selector
let hp = ''; // Initializing hp input string

</script>

<template>

    <div class="Screen">   
       <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>
      <div class="display">
       <div class="navigation-text-general">
            <RouterLink to="/joinGame"><label class="join-text">Join game</label></RouterLink>
            <label class="create-text"><strong>Create game</strong></label>
        </div>
       
       <div class="form-container">

            <input class="input_field" placeholder="Game"><br>

            <div class="parallel-inputs">
                <label>Size: </label>
                <select id="size" v-model="selectedSize">
                <option v-for="option in sizeOptions" :key="option" :value="option">{{ option }}</option>
                </select>

                <input class="hp_field" placeholder="  HP"><br>
            </div>

            <button class="Button" type="submit">CREATE</button>
          </div>
        </div>
    </div>   

</template>

<style scoped>

label {
  color: white;
}

.Screen {
  width: 800px;
  height: 1280px;
  margin: 0px;
  background: url("../assets/images/BackgroundCreateGame.png");
  position: absolute;
  border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
  position: absolute;
  top: 111px;
  left: 19px;
}

.Textbox{
  position: absolute;
  left: 288px;
  top: 673px;
  color: white;
  font-family: Inter;
  font-size: 20px;
  word-spacing: 45px;
  text-align: center;
}

.Button{
  width: 281px ;
  font-size: 40px;
  font-family: Inter;
  font-weight: 600;
  background-color: white;
  border-radius: 17px;
  border: 6px solid white ;
  position: absolute;
  top: 770px;
  left: 263px;
  cursor: pointer;
}

.input_field {
width: 90%;
padding: 20px;
background-color: transparent;
border: transparent;
border-bottom: solid white;
margin-top: 150px;
color: white;
}

.hp_field {
width: 50%;
border: 1px solid #ddd;
margin-top: 20px;
border-radius: 25.5px;
}

.form-container {
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid white; 
  border-radius: 53px; 
  padding: 20px; 
  display: inline-block; 
  margin-top: 382px; 
  width: 610px; 
  height: 550px;
  max-width: 100%; 
  box-sizing: border-box;

}

.parallel-inputs {
    width: 100%;
    margin-top: 20px;
}

.parallel-inputs input {
    margin-top: 20px;
    margin-left: 60px;
    width: 30%;
}

.navigation-text-general {
    font-size: 25px;
    position: absolute;
    top: 405px;
    white-space: nowrap;
}

.join-text {
    position: absolute;
    left: 197px;
}

.create-text {
    color: #8F8F8F;
    position: absolute;
    left: 460px;
}

@media screen and (min-width: 2421px) {
  .Screen {
    width: 1728px;
    height: 1117px;
    background: url("../assets/images/CREATE GAME.png");
  }

  .display {
    display: none;
  }

}

</style>
