<script setup>
import { RouterLink } from 'vue-router'
import { ref } from "vue";
import MenuMV from "./MenuMV.vue";

  const isMenuVisible = ref(false);

  const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
  };
</script>

<script>
export default {
  data() {
    return {
      attacks: [],
      logs: [],
      HP_max: localStorage.getItem('game_hp'),
      playerID: "",
      description: "",
      date_time: "",
      dimension: localStorage.getItem('game_size'),
      response: "",
      gameName: localStorage.getItem('game_name'),
      selectedAttack: null,
    };
  },

  mounted() {
  this.fetchLogsData();
  this.fetchAttacksData();
  },

  computed: {
    gridItems() {
      const totalItems = this.dimension * this.dimension;
      return Array.from({ length: totalItems }, );
    },
  },

  methods: {

    selectAttack(index) {
      this.selectedAttack = this.attacks[index].attack_ID;
    },

    async fetchLogsData() {
      try {
        // Get the bearer token from local storage
        const bearerToken = localStorage.getItem('authToken');
      

        const response = await fetch('https://balandrau.salle.url.edu/i3/arenas/' + this.gameName + '/logs', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Bearer': `${bearerToken}`, 
          },
        });

        const data = await response.json();

        this.logs = data.map((log) => ({
            playerID: log.player_ID,
            description: log.description,
            date_time: log.date_time,
          }));

      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    },

    async fetchAttacksData() {
      try {
        // Get the bearer token from local storage
        const bearerToken = localStorage.getItem('authToken');

        const response = await fetch('https://balandrau.salle.url.edu/i3/players/attacks', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Bearer': `${bearerToken}`, 
          },
        });

        const data = await response.json();

        this.attacks = data.map((attack) => ({

            attack_ID: attack.attack_ID,
            positions: attack.positions,
            power: attack.power,
            equipped: attack.equipped,
          })).filter((attack) => attack.equipped === true);


        
      } catch (error) {
        console.error('Error fetching attacks data:', error);
      }
    },

 },
};

</script>

<template>

    <button @click="toggleMenu" class="home_logo"><img src="../assets/images/HomeLogo.png" alt="Home Logo"></button>

    <MenuMV :isVisible="isMenuVisible" @toggleMenu="toggleMenu" />
  
    <div class="form_container">

      <div class="tab_box"> 
        <p class="UserTitle"> {{ this.gameName }}</p>
      </div>


      <div class="content_box">

        <p id="HP_title">The maximum Hp for this game is: {{ HP_max}}</p>
        
        <div class="grid-container"  :style="{ 'grid-template-columns': 'repeat(' + dimension + ', 1fr)' }">
          <div
            v-for="(item, index) in gridItems"
            :key="index"
            class="grid-item"
          >
            {{ item }}
            <img v-if=" index === 0" src="src/assets/images/AmongusRed.png">
          </div>
      </div>

      <p id="LOGS">LOGS:</p>

      <div class="table-container" id="table-container">

        <ol  class="header" id="table-list">
          <span>PLAYER</span>
          <span>DATE</span>
          <span>DESCRIPITON</span>
        </ol>

        <li v-for="(item) in logs" >
          <span>{{ item.playerID }}</span>
          <span>{{ item.date_time }}</span>
          <span>{{ item.description }}</span>
        </li>

      </div>

        <button class="MovementButton"> <img src="../assets/images/ButtonMovement.png"></button>
        <button class="MovementButton" id="RightArrowB"> <img id="RightArr" src="../assets/images/ButtonMovement.png"></button>
        <button class="MovementButton" id="TopArrowB"> <img id="TopArr" src="../assets/images/ButtonMovement.png" ></button>
        <button class="MovementButton" id="BottomArrowB"> <img id="BottomArr" src="../assets/images/ButtonMovement.png"></button>

        <p id="LOGS">ATTACKS:</p>
        <li v-for="(item, index) in attacks" :key="item.name" @click="selectAttack(index)" >
            <span>{{ item.attack_ID }} </span>
            <span> {{ item.positions }} </span>
            <span> {{ item.power }} </span>
        </li>

        <div v-if="selectedAttack !== null">
          <p id="ChosenAttack">Attack selected: {{ selectedAttack }}</p>

          <button value="submit" class="signup_button">ATTACK!</button>
        </div>


     </div>  
       
   </div>
    
</template>



<style scoped>

.content_box {
  padding: 30px;
}

.form_container {
  padding: 0px;
  width: 90%;
  margin-top: 257px;
}

.UserTitle {
  font-family: "TitanOne";
  color: white;
  font-size: 75px;
  font-weight: bold;
}

.grid-container {
  display: grid; 
  background-color: rgb(255, 252, 252); 
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  height: 65px;
}

.table-container {
  min-width: 300px;
  max-height: 100px;
  overflow-y: auto;
  overflow-x: auto; 
  border: 1px solid #ccc;
  border-radius: 10px; 
}
li, .header {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  list-style-type: none;
  font-size: 18px;
  margin-bottom: 0px;
}

li span {
  flex: 1; /* This makes each field take equal space */
  margin-right: 10px; 
  padding-left: 10px; 
  cursor: pointer;
}
#LOGS{
  font-size: 25px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 5px;
}

#HP_title{
  margin: 10px;
  margin-top: 0;
  font-size: 20px;
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

.MovementButton{
  margin-top: 30px;
  background: none;
  width: 10%;
  cursor: pointer;
}

#ChosenAttack{
  color: red;
  font-size: 18px;
  margin: 0;
  font-weight: bold;
}

.form_container{
  margin-top: 193px;
}
</style>





