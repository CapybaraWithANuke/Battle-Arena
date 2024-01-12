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
      tableData: [],
      selectedPlayer: null,
      response: "",
    };
  },

  mounted() {
  this.fetchPlayersData();
  },
  
  methods: {

    selectPlayer(index) {
      this.selectedPlayer = this.tableData[index].name;
      localStorage.setItem('selectedPlayerInfo', this.selectedPlayer);
      this.$router.push('/PlayersInfoSlide1');
    },

    async fetchPlayersData() {
      try {
        // Get the bearer token from local storage
        const bearerToken = localStorage.getItem('authToken');

        const response = await fetch('https://balandrau.salle.url.edu/i3/players', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Bearer': `${bearerToken}`, 
          },
        });

        const data = await response.json();

        // Assuming the API response is an array of players objects
        this.tableData = data.map((player) => ({
            name: player.player_ID,
            experience: player.xp,
          }));

        // This line sort the array with the players with the highest experience 
        this.tableData.sort((a, b) => b.experience - a.experience);
        
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
        <p class="UserTitle"> PLAYERS RANKING</p>
      </div>

      <div class="content_box">

        <div class="search_container">

          <input type="text" class="search-input" placeholder="Search...">
            
            <button class="search-button" @click="applySearch">
              <img src="src/assets/images/MagnifyingGlass.png" class="search-icon">
            </button>

        </div>
        
        <div class="table-container" id="table-container">

          <ol  class="header" id="table-list">
            <span>POSITION</span>
            <span>NAME</span>
            <span>EXPERIENCE</span>
          </ol>

          <!-- Counter is used to she the position of the player-->
          <li v-for="(item,index) in tableData"  @click="selectPlayer(index)">
            <span>{{ index + 1 }}</span>
            <span>{{ item.name }}</span>
            <span>{{ item.experience }}</span>
          </li>

        </div>

      </div>
   </div>
    
</template>



<style scoped>

.form_container {
  padding: 0px;
  width: 90%;
  margin-top: 257px;
}

.UserTitle {
  color: white;
  font-family: Inter;
  font-size: 30px;
  font-weight: bold;
}

.search_container {
  align-items: center;
  margin-top: 10px;
  border-radius: 9px;
  display: inline-flex;
}
 .search-input {
  min-width: 385px;
  height: 38px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 13px 0 0 13px;
  font-family: Inter;
  font-size: 19px;
}

.search-button {
  height: 62px;
  padding: 10px;
  background-color: white;
  color: #fff;
  border-radius: 0 13px 13px 0;
  cursor: pointer;
  outline: none;
}
 .search-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.table-container {
  min-width: 300px;
  max-height: 550px;
  margin: 20px;
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

</style>


