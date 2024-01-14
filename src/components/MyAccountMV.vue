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
      img: "",
      xp: "",
      level: "",
      coins: "",
      response: "",
    };
  },

  mounted() {
  this.fetchPlayerData();
  },
  
  methods: {
    async fetchPlayerData() {
      try {
        // Get the bearer token from local storage
        const bearerToken = localStorage.getItem('authToken');
        const playerName = localStorage.getItem('player_name');

        const response = await fetch('https://balandrau.salle.url.edu/i3/players/' + playerName, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Bearer': `${bearerToken}`, 
          },
        });

        const data = await response.json();

        this.player_ID = data.player_ID;
        this.img = data.img;
        this.xp = data.xp;
        this.level = data.level;
        this.coins = data.coins;
        
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    },

    async deletePlayerData() {
      try {
        // Get the bearer token from local storage
        const bearerToken = localStorage.getItem('authToken');

        const response =  await fetch('https://balandrau.salle.url.edu/i3/players', {
          method: 'DELETE',
          headers: {
            'accept': 'application/json',
            'Bearer': `${bearerToken}`, 
          },

        });
        
        //This assures that the token is deleted from the local storage
        localStorage.clear();
        
      } catch (error) {
        console.error('Error fetching api delete:', error);
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
        <p class="UserTitle">MY ACCOUNT</p>
      </div>


      <div class="content_box">

        
         <button @click.prevent="deletePlayerData()" class="trashBinButton"> 
          <RouterLink to="/">
           <img src="..\assets\images\Trashbin.png">
          </RouterLink>
        </button>
        
        <section class="content_container">

          <img class="ProfilePicture" :src= "img">

          <div class="Textbox">
            <p>Username: {{ player_ID }}</p> <br>
            <p>Experience: {{ xp }}</p> <br>
            <p>Level: {{ level }}</p> <br>
            <p>Coins: {{ coins }}</p>
          </div>
        
        </section>


        <RouterLink to="/">
          <button class="signup_button" @click.prevent="localStorage.clear()">LOGOUT</button>
        </RouterLink>

      </div>
   </div>
    
</template>



<style scoped>

.content_box {
  display: flex;
  flex-direction: column;
  padding: 100px;
}

.form_container {
  padding: 0px;
  width: 90%;
  margin-top: 257px;
}

.trashBinButton {
  align-self: flex-end;
  background: none;
  border: 0px;
  cursor: pointer;
}
.ProfilePicture {
  width: 255px;
  height: 255px;
  margin-top: 100px;
}

.Textbox{
  color: white;
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  word-spacing: 45px;
  text-align: left;
  margin-top: 55px;
}

.UserTitle {
  color: white;
  font-family: Inter;
  font-size: 30px;
  font-weight: bold;
}

.content_container{
    display: flex;
    justify-content: space-evenly;
  }

.signup_button{
  margin-top: 80px;
}
</style>





