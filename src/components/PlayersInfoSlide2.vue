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
      player_ID: "",
      games_won: "",
      games_played: "",
      response: "",
      g: [],
    };
  },

  mounted() {
  this.fetchPlayerData();
  this.fetchPlayerStatisticsData();
  this.fetchGamesData();
  },
  
  methods: {
    async fetchPlayerData() {
      try {
        // Get the bearer token from local storage
        const bearerToken = localStorage.getItem('authToken');
        const selectedPlayer = localStorage.getItem('selectedPlayerInfo');

        const response = await fetch('https://balandrau.salle.url.edu/i3/players/' + selectedPlayer, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Bearer': `${bearerToken}`, 
          },
        });

        const data = await response.json();

        this.player_ID = data.player_ID;
        
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    },

    async fetchPlayerStatisticsData() {
      try {
        // Get the bearer token from local storage
        const bearerToken = localStorage.getItem('authToken');
        const selectedPlayer = localStorage.getItem('selectedPlayerInfo');

        const response = await fetch('https://balandrau.salle.url.edu/i3/players/'+ selectedPlayer +'/statistics', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Bearer': `${bearerToken}`, 
          },
        });

        const data = await response.json();

        this.games_played = data.games_played;
        this.games_won = data.games_won;
        
      } catch (error) {
        console.error('Error fetching player statistics data:', error);
      }
    },

    async fetchGamesData() {
        try {
          // Get the bearer token from local storage
          const bearerToken = localStorage.getItem('authToken');
          const selectedPlayer = localStorage.getItem('selectedPlayerInfo');

          const response = await fetch('https://balandrau.salle.url.edu/i3//players/' + selectedPlayer +'/games/finished', {
            method: 'GET',
            headers: {
              'accept': 'application/json',
              'Bearer': `${bearerToken}`, 
            },
          });
          const data = await response.json();

          // Assuming the API response is an array of game objects
          this.g = data.map((g) => ({
            name: g.game_ID,
            size: g.size,
            hp: g.HP_max,
            startDate: g.creation_date,
          }));
        } catch (error) {
          console.error('Error fetching game data:', error);
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
        <p class="UserTitle">{{ player_ID }}</p>
      </div>

      <div class="content_box">
        <span>games played: {{ games_played }} &nbsp;&nbsp;</span>
        <span> games won: {{ games_won }} &nbsp;&nbsp;</span>
        <span> %games won: {{ ((games_won / games_played) * 100 ).toFixed(2)}}%</span>
        

        <div class="table-container" id="table-container">

          <ol  class="header" id="table-list">
            <span>NAME</span>
            <span>SIZE</span>
            <span>HP MAX</span>
            <span>START DATE</span>
          </ol>

          <li v-for="(item) in g" :key="item.name">
            <span>{{ item.name }}</span>
            <span>{{ item.size }}</span>
            <span>{{ item.hp }}</span>
            <span>{{ item.startDate }}</span>
          </li>
        </div>

      <RouterLink to="/PlayersInfoSlide1">
        <button class="OtherSlide"> </button>
      </RouterLink>
        
      <button class="ActualSlide"> </button>
        

      </div>
   </div>
    
</template>



<style scoped>

.form_container {
  padding: 0px;
  width: 90%;
  margin-top: 257px;
}

.table-container {
  min-width: 300px;
  min-height: 372px;
  max-height: 350px;
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
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
  margin-right: 58px; 
  padding-left: 10px; 
}

.ActualSlide {
  border: 0px;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: white;
 
}
.OtherSlide {
  border: 0px;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: gray;
  margin-top: 210px;
  margin-right: 25px;
}

.UserTitle {
  color: white;
  font-family: Inter;
  font-size: 30px;
  font-weight: bold;
}

</style>

