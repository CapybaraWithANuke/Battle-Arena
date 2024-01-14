<script setup>
  import { ref } from "vue";
  import { RouterLink } from 'vue-router'
  import MenuMV from "./MenuMV.vue";

  const sizeOptions = [2, 3, 4, 5, 6, 7, 8];
  const isMenuVisible = ref(false);
  const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
  };
</script>

<script>
  export default {
    data() {
        return {
            name: "",
            selectedSize: "",
            hp: "",
            response:"",
      }
    },
    methods: {
      createGame() {
            // Fetch the bearer token from local storage
            const bearerToken = localStorage.getItem('authToken');

            // Construct the game data payload
            const gameData = {
              game_ID: this.name,
              size: parseInt(this.selectedSize),
              HP_max: parseInt(this.hp)
            };

            localStorage.setItem('game_name', gameData.game_ID);
            localStorage.setItem('game_size', gameData.size);
            localStorage.setItem('game_hp', gameData.HP_max);

            fetch("https://balandrau.salle.url.edu/i3/arenas", {
                method: 'POST',
                headers: {
                  'Bearer': `${bearerToken}`, 
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(gameData),

             })
             
              .then((response) => {
                if (response.ok) {
                  this.response = "Game created!";
                  this.$router.push('/arena');
                }
                return response.json()
              }).then((res) => {
                  if (res.ok == undefined) {
                  this.response = res.error.message;
                  }
              });
      }
    }
}

</script>

<template>
  <main>
    <!-- Button to toggle menu visibility -->
    <button @click="toggleMenu" class="home_logo"><img src="../assets/images/HomeLogo.png" alt="Home Logo"></button>

    <!-- Include Menu component with visibility prop -->
    <MenuMV :isVisible="isMenuVisible" @toggleMenu="toggleMenu" />

    <div class="form_container">
      <div class="tab_box"> 
        <RouterLink to="/joinGame">
          <button class="tab_btn">Join Game</button>
        </RouterLink>
        <button class="tab_btn_create_game">Create Game</button>
      </div>
      <!-- Box that contains the input field to set the name of the game-->
      <!-- It also contains a section for the size and hp parameters since we want them to be displayed in parallel. -->
      <div class="content_box">
        <input class="input_field" type="text" placeholder="Game name" required v-model="name" >

        <section class="parallel-inputs">
                <label>Size: </label>
                <select id="size" required v-model="selectedSize">
                <option v-for="option in sizeOptions" :key="option" :value="option">{{ option }}</option>
                </select>

                <input class="input_field" type="text" placeholder="  HP (>= 15)" required v-model="hp">
              </section>

              <button type="submit" class="signup_button" @click="createGame()" value="CreateGame">CREATE</button>
          <p> {{ response }}</p>

      </div>
    </div>

  </main>
  
</template>

<style scoped>

/* Big rectangle */
.form_container{
  margin-top: 382px;
  padding: 0px;
  height: auto;
}

#size {
  width: 100px; /* Set the desired width */
  height: 43px;
  border-radius: 25.5px;
  font-size: 18px;
  background-color: transparent;
  color: white;
  
}
.input_field{
  margin-top: 10px;
}
.form_container .tab_box .tab_btn{
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

option{
  color: black;
}

.form_container .tab_box .tab_btn_create_game{
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

#hp{
  color: white;
}
.parallel-inputs {
    width: 100%;
    margin-top: 70px;
    font-size: 24px;
}

.parallel-inputs input {
    margin-top: 20px;
    margin-left: 60px;
    width: 30%;
}

.signup_button{
  margin-top: 80px;
}

@media screen and (min-width: 1000px) {

  .form_container {
    width: 700px;
    height: auto;
  }

}

</style>
