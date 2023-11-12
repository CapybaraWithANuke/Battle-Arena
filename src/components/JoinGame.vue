<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
export default {
  data() {
    return {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
    };
  },
};
</script>

<template>

    <div class="Screen">   
       <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>
        
       <div class="display">
       <div class="navigation-text-general">
            <RouterLink to="/createGame"><label class="create-text">Create game</label></RouterLink>
            <label class="join-text"><strong>Join game</strong></label>
        </div>

        <div class="search-bar">
            <input class="input_field" placeholder="Search..."><br>
        </div>

        <label class="name-text">NAME</label><label class="size-text">SIZE</label><label class="hp-text">HP</label><label class="date-text">START DATE</label>
        <div class="column-name">
            <label class="table-cell">Game1</label>
            <label class="table-cell">Game2</label>
            <label class="table-cell">Game3</label>
            <label class="table-cell">Game4</label>
            <label class="table-cell">Game5</label>
        </div>

        <div class="column-size">
            <label class="table-cell">3</label>
            <label class="table-cell">4</label>
            <label class="table-cell">3</label>
            <label class="table-cell">5</label>
        </div>

        <div class="column-hp">
            <label class="table-cell">1</label>
            <label class="table-cell">3</label>
            <label class="table-cell">2</label>
            <label class="table-cell">3</label>
        </div>

        <div class="column-date">
            <label class="table-cell">1</label>
            <label class="table-cell">3</label>
            <label class="table-cell">2</label>
            <label class="table-cell">3</label>
        </div>
        
        <label class="filter">Filter by...</label>

        <div>
            <label class="checkbox-label-finished">
            <input type="checkbox" v-model="checkbox1" /> Finished
            </label>
            <label class="checkbox-label-started">
            <input type="checkbox" v-model="checkbox2" /> Started
            </label>
            <label class="checkbox-label-dates">
            <input type="checkbox" v-model="checkbox3" /> Dates
            </label>
        </div>
        
        <router-link to="/arena"><button class="Button" type="submit">JOIN</button></router-link>
      </div>
    </div>   

</template>

<style scoped>

label {
  color: black;
}

.checkbox-label-finished {
  margin-right: 10px;
  color: white;
  position:absolute;
top: 800px;
left: 180px;
  
}

.checkbox-label-started {
  margin-right: 10px;
  color: white;
  position:absolute;
top: 800px;
left: 350px;
  
}

.search-bar{
    margin-top: 270px;
    margin-left: 150px;
    width: 500px;
}

.checkbox-label-dates {
  margin-right: 10px;
  color: white;
  position:absolute;
top: 800px;
left: 520px;
  
}

.filter{
    color: white;
    position: absolute;
    top: 770px;
    left: 180px;

}
.Screen {
  width: 800px;
  height: 1280px;
  margin: 0px;
  background: url("../assets/images/BackgroundJoinGame.png");
  position: absolute;
  
}

.HomeLogo {
  position: absolute;
  top: 111px;
  left: 19px;
}

.input_field {
width: 80%;
border-radius: 9px;
padding: 20px;
border: 1px solid #ddd;
margin-top: 130px;
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
  top: 930px;
  left: 263px;
  cursor: pointer;
  color: black;
}

.name-text {
    font-size: 18px;
    position: absolute;
    top: 475px;
    left: 180px;
}
.size-text {
    font-size: 18px;
    position: absolute;
    top: 475px;
    left: 300px;
}
.hp-text {
    font-size: 18px;
    position: absolute;
    top: 475px;
    left: 430px;
}

.date-text {
    font-size: 18px;
    position: absolute;
    top: 475px;
    left: 520px;
}

.table-cell {
    font-size: 18px;
    height: 36px;
}

.column-name {
    position: absolute;
    top: 505px;
    left: 180px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.column-size {
    position: absolute;
    top: 505px;
    left: 300px;
    display: flex;
    flex-direction: column;
}

.column-hp {
    position: absolute;
    top: 505px;
    left: 430px;
    display: flex;
    flex-direction: column;
}

.column-date {
    position: absolute;
    top: 505px;
    left: 550px;
    display: flex;
    flex-direction: column;
}

.form-container {
  background-color: rgba(255, 255, 255, 0); 
  border: 2px solid white; 
  border-radius: 53px; 
  padding: 20px; 
  display: inline-block; 
  margin-top: 257px; 
  width: 610px; 
  height: 800px;
  max-width: 100%; 
  box-sizing: border-box; 
}

.navigation-text-general {
    font-size: 25px;
    position: absolute;
    top: 290px;
    white-space: nowrap;
}

.create-text {
    color: #8F8F8F;
    position: absolute;
    left: 468px;
}

.join-text {
    color: white;
    position: absolute;
    left: 203px;
}

@media screen and (min-width: 2421px) {
  .Screen {
    width: 1728px;
    height: 1117px;
    background: url("../assets/images/JOIN GAME.png");
  }

  .display {
    display: none;
  }

}

</style>
