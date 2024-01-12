<script setup>
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
        tableData: [
          // Add more data as needed
        ],
        originalTableData: [],
        selectedFilter: null,
        response: "",
        searchInput: '',
      };
    },
    mounted() {
    this.fetchGameData();
    },
    methods: {
      
      async searchGames() {
      try {

        // Get the bearer token from local storage
        const bearerToken = localStorage.getItem('authToken');

        // Your search API endpoint and query parameter
        const searchEndpoint = 'https://balandrau.salle.url.edu/i3/arenas/' + this.searchInput;

        const response = await fetch(searchEndpoint, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Bearer': `${bearerToken}`, 
          },
        });

        const data = await response.json();

        // Assuming the API response is an array of game objects
        this.tableData = data.map((game) => ({
          name: game.game_ID,
          size: game.size,
          hp: game.HP_max,
          startDate: game.creation_date,
        }));
      } catch (error) {
        console.error('Error searching for games:', error);
      }
    },
      async fetchGameData() {
        try {
          // Get the bearer token from local storage
          const bearerToken = localStorage.getItem('authToken');

          const response = await fetch('https://balandrau.salle.url.edu/i3/arenas', {
            method: 'GET',
            headers: {
              'accept': 'application/json',
              'Bearer': `${bearerToken}`, 
            },
          });
          const data = await response.json();
          
          // Save the original game data
          this.originalTableData = data.map((game) => ({
            name: game.game_ID,
            size: game.size,
            hp: game.HP_max,
            startDate: game.creation_date,
          }));

          // Set the tableData to the original data
          this.tableData = [...this.originalTableData];

        } catch (error) {
          console.error('Error fetching game data:', error);
        }
      },
      // Additional method to reset and show all games
      resetTableData() {
        this.tableData = [...this.originalTableData];
      },
    },
  };
</script>

<template>
  <main>
    
    <!-- Button to toggle menu visibility -->
    <button @click="toggleMenu" class="home_logo"><img src="../assets/images/HomeLogo.png" alt="Home Logo"></button>

    <!-- Include Menu component with visibility prop -->
    <MenuMV :isVisible="isMenuVisible" @toggleMenu="toggleMenu" />

    <div class="form_container">

      <div class="tab_box"> 
        <button class="tab_btn">Join Game</button>
        <RouterLink to="/createGame">
          <button class="tab_btn_create_game">Create Game</button>
        </RouterLink>
        
      </div>

      <div class="content_box">
        <div class="search_container">
          <input type="text" class="search-input" placeholder="Search..." v-model="searchInput">
          
          <button class="search-button" @click="searchGames">
            <img src="src/assets/images/MagnifyingGlass.png" class="search-icon">
          </button>
        </div>
      
      <section class="content_container">
        <div class="table-container" id="table-container">
          <ol id="table-list" class="header">
            <span>NAME</span>
            <span>SIZE</span>
            <span>HP</span>
            <span>START DATE</span>
          </ol>

          
          <li v-for="item in tableData" >
            <span>{{ item.name }}</span>
            <span>{{ item.size }}</span>
            <span>{{ item.hp }}</span>
            <span>{{ item.startDate }}</span>
          </li>
          

        </div>

        <section class="checkbox_section">
          <label class="filter">Filter by...<br></label>

          <div class="checkbox_container">
            
            <div>
              <input type="radio" id="checkbox1" v-model="selectedFilter" value="Finished"/>
              <label for="checkbox1">Finished</label>
            </div>

          <div>
            <input type="radio" id="checkbox2" v-model="selectedFilter" value="Started" />
            <label for="checkbox2">Started</label>
          </div>
            
          <div>
            <input type="radio" id="checkbox3" v-model="selectedFilter" value="Dates"/>
            <label for="checkbox3">Dates</label>
          </div>

          </div> 

          <!-- Show date inputs only when "Dates" radio button is selected -->
          <section v-if="selectedFilter === 'Dates'" class="pop_up_dates">
            <label for="startDate">Start Date:</label>
            <input type="date" id="startDate" v-model="startDate">
            
            <label for="endDate">End Date:</label>
            <input type="date" id="endDate" v-model="endDate">
          </section> 

        </section>

      </section>

      <RouterLink to="/arena">
        <button type="submit" class="signup_button">JOIN</button>
      </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>

/* Big rectangle */
.form_container{
  margin-top: 257px;
  padding: 0px;
}

/* Checkboxes */
.checkbox_container {
  display: inline-flex;
  align-items: center;
}

.checkbox_section {
  font-size: 24px;
  margin-top: 30px; 
}

.checkbox_container label {
  margin-right: 30px;
}

.table-container {
  min-width: 300px;
  max-height: 258px;
  margin: 20px;
  overflow-y: auto;
  overflow-x: auto; 
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px; 
}

li, .header {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  color: black;
  padding: 10px;
  list-style-type: none;
  font-size: 10px;
}

li span {
  flex: 1; /* This makes each field take equal space */
  margin-right: 10px; 
  padding-left: 10px; 
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

.form_container .tab_box .tab_btn{
  font-size: 24px;
  font-weight: 600;
  color: white;
  background: none;
  border: none;
  padding: 18px;
  cursor: pointer;
  height: 100%;
  float: left;
  outline: none;

}

.form_container .tab_box .tab_btn_create_game{
  font-size: 24px;
  font-weight: 600;
  color: grey;
  background: none;
  border: none;
  padding: 18px;
  cursor: pointer;
  height: 100%;
  float: left;
  outline: none;
}

.pop_up_dates{
  display: grid;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
@media screen and (min-width: 1000px) {
  .form_container {
    margin-right: 50px;
    margin-left: 50px;
    width: 90%;
    height: auto;
  }
  .content_container{
    display: flex;
    justify-content: space-around;
  }

  .table-container{
    width: 70%;
    max-height: 400px;

  }

  .checkbox_section{
    margin-top: 50px;
  }
  .checkbox_container {
    margin-top: 30px;
    display: grid;
  }

  .checkbox_container > *:not(:last-child) {
  margin-bottom: 20px; /* Adjust the desired vertical margin */
}

}

</style>
