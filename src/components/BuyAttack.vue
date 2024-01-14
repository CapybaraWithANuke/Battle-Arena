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
      price: "",
      power: "",
      positions: "",
      attack_ID: "",
      level_needed: "",
      tableData: [],
      selectedAttack: null,
      response: "",
    };
  },

  mounted() {
  this.fetchPlayerData();
  },
  
  methods: {

    selectAttack(index) {
      this.selectedAttack = this.tableData[index].attack_ID;
    },

    async fetchPlayerData() {
      try {
        // Get the bearer token from local storage
        const bearerToken = localStorage.getItem('authToken');

        const response = await fetch('https://balandrau.salle.url.edu/i3/shop/attacks', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Bearer': `${bearerToken}`, 
          },
        });

        const data = await response.json();

        this.tableData = data.map((attack) => ({
            price: attack.price,
            positions: attack.positions,
            power: attack.power,
            attack_ID: attack.attack_ID,
            level_needed: attack.level_needed,
          }));
        
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    },

    buyAttack() {
      
      const bearerToken = localStorage.getItem('authToken');

      const response = fetch('https://balandrau.salle.url.edu/i3/shop/attacks/'+this.selectedAttack+'/buy', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Bearer': `${bearerToken}`, 
        },
        body: JSON.stringify()
      })
      
      .then((response) => {
        if (response.ok) {
          this.response = "Attack bought!";
        }
        return response.json()
      }).then((res) => {
          if (res.ok == undefined) {
           this.response = res.error.message;
          }
      });
    },
  },
};

</script>

<template>

    <button @click="toggleMenu" class="home_logo"><img src="../assets/images/HomeLogo.png" alt="Home Logo"></button>

    <MenuMV :isVisible="isMenuVisible" @toggleMenu="toggleMenu" />
  
    <div class="form_container">

      <div class="tab_box"> 

        <p class="UserTitle">Buy attack</p>

        <RouterLink to="/sellAttack">
          <button class="UserTitle" id="SellAttackTitle">Sell attack</button>
        </RouterLink>

        <RouterLink to="/createAttack">
        <button class="UserTitle" id="CreateAttackTitle">Create attack</button>
        </RouterLink>
      </div>

      <div class="content_box">
        
        <div class="table-container" id="table-container">

          <ol class="header" id="table-list">
            <span>NAME</span>
            <span>POWER</span>
            <span>POSITIONS</span>
            <span>PRICE</span>
            <span>LEVEL NEEDED</span>
          </ol>

          <li v-for="(item,index) in tableData" :key="item.name" @click="selectAttack(index)">
            <span>{{ item.attack_ID }}</span>
            <span>{{ item.power }}</span>
            <span>{{ item.positions }}</span>
            <span>{{ item.price }}</span>
            <span>{{ item.level_needed }}</span>
          </li>
        </div>

        <div v-if="selectedAttack !== null">
          <p id="ChosenAttack">Attack selected: {{ selectedAttack }}</p>

          <button @click.prevent="buyAttack()" value="submit" class="signup_button">BUY</button>

          <p>{{ response }}</p>
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

.table-container {
  min-width: 300px;
  min-height: 372px;
  max-height: 350px;
  margin-top: 18px;
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
  cursor: pointer; 
}


#ChosenAttack{
  color: red;
  font-size: 24px;
  font-weight: bold;
}

.UserTitle {
  color: white;
  font-family: Inter;
  font-size: 30px;
  font-weight: bold;
}

.signup_button{
  width: 50%;
}


#SellAttackTitle{
  color: #8F8F8F;
  background: none;
  border: 0;
  cursor: pointer;
}

#CreateAttackTitle{
  color: #8F8F8F;
  background: none;
  border: 0;
  cursor: pointer;
}


</style>