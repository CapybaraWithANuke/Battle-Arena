<script setup>

import { RouterLink } from 'vue-router';

const { isVisible } = defineProps(['isVisible']);
const emit = defineEmits();

const toggleMenu = () => {
  // Emit an event to notify the parent component to toggle the menu visibility
  emit('toggleMenu');
};

</script>

<template>
  <nav v-if="isVisible" class="menu">
      <div class="menu_container">

        <div class="HomeLogo" @click="toggleMenu"></div>

        <div class="menu_items">
        <RouterLink to="/joinGame"><span class="menu_item"><img src="../assets/images/Sword.png" alt="Play Game" />Play Game</span></RouterLink>
        <RouterLink to="/backpack"><span class="menu_item"><img src="../assets/images/BackpackIcon.png" alt="Backpack" />Backpack</span></RouterLink>
        <RouterLink to="/buyAttack"><span class="menu_item"><img src="../assets/images/Cart.png" alt="Store" />Store</span></RouterLink>
        <RouterLink to="/playersRanking"><span class="menu_item"><img src="../assets/images/Players.png" alt="Players" />Players</span></RouterLink>
        <RouterLink to="/myAccountMV"><span class="menu_item"><img src="../assets/images/User.png" alt="My account" />My account</span></RouterLink>
        </div>
      </div>

    </nav>  
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-size: 14px;
}

.menu {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: white;
  border-radius: 46px;
  margin-top: 100px;
  padding: 20px;
  width: 350px;
  height: 800px;
  position: absolute;
  flex-direction: column;
  left: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.menu_container {
  display: column;
}

.menu_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Inter;
  font-weight: Bold;
  font-size: 24px;
  color: black;
  margin: 25px 40px; 
}

.menu_item img {
  width: 35px;
  height: 35px;
  margin-bottom: 5px;
  margin: 10px 0; 
  margin-right: 30px;
}

.HomeLogo {
  width: 80px;
  height: 80px;
  background: url("../assets/images/HomeLogo.png");
  position: absolute;
  top: 11px;
  margin-left: 10px;
}

.menu_items {
  display: flex;
  flex-direction: column;
  margin-top: 20px; /* Add margin to create space between HomeLogo and menu items */
}

@media screen and (min-width: 2265px) {

  .menu {
    display: inline-block;
    height: 100px;
    width: 60%;
  }

  .menu_items {
    flex-direction: row;
    margin-top: 0;
    margin-left: 140px;
  }

  .menu_item {
    margin: 0 20px; /* Adjust margin */
  }
 
}
 
</style>


