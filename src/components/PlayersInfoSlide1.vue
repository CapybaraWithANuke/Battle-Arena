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
        this.img = data.img;
        this.xp = data.xp;
        this.level = data.level;
        this.coins = data.coins;
        
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
        
        <section class="content_container">

          <img class="ProfilePicture" :src= "img">

          <div class="Textbox">
            <strong>Experience:</strong> {{ xp }} <br><br>
            <strong>Level:</strong> {{ level }} <br><br>
            <strong>Coins:</strong> {{ coins }}
          </div>
        
        </section>

        <button class="ActualSlide"> </button>

        <RouterLink to="/PlayersInfoSlide2">
          <button class="OtherSlide"> </button>
        </RouterLink>

      </div>
   </div>
    
</template>



<style scoped>

.form_container {
  padding: 0px;
  width: 90%;
  margin-top: 257px;
}
.ProfilePicture {
  width: 255px;
  height: 255px;
}

.Textbox{
  color: white;
  font-family: Inter;
  font-size: 20px;
  word-spacing: 45px;
  text-align: left;
  margin-top: 55px;
}

.ActualSlide {
  border: 0px;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: white;
  margin-top: 210px;
  margin-right: 25px;
}
.OtherSlide {
  border: 0px;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: gray;
 
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
    margin-top: 190px;
  }

</style>


