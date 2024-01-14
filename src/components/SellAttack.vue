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
      isHighlightened: false,
      attack_ID: "",
      positions: "",
      power: "",
      price: "",
      tableData: [],
      on_sale: null,
      selectedAttack: null,
      response: "",
    };
  },

  mounted() {
  this.fetchAttacksData();
  },
  
  methods: {

    selectAttack(index) {
      this.selectedAttack = this.tableData[index].attack_ID;
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

        this.tableData = data.map((attack) => ({

            attack_ID: attack.attack_ID,
            positions: attack.positions,
            power: attack.power,
            on_sale: attack.on_sale,
          })).filter((attack) => !attack.on_sale);


        
      } catch (error) {
        console.error('Error fetching attacks data:', error);
      }
    },

    sellAttack() {
      
        const bearerToken = localStorage.getItem('authToken');
        const attack = { price: parseInt(this.price) };

        const response = fetch('https://balandrau.salle.url.edu/i3/shop/attacks/'+this.selectedAttack+'/sell', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Bearer': `${bearerToken}`, 
          },
          body: JSON.stringify(attack)
        })
      
        .then((response) => {
          if (response.ok) {
            this.response = "Attack in the market!";
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
    <!--Here the menu component is called -->
    <MenuMV :isVisible="isMenuVisible" @toggleMenu="toggleMenu" />
  
    <div class="form_container">

      <div class="tab_box"> 

        <RouterLink to="/buyAttack">
          <button class="UserTitle" id="BuyAttackTitle">Buy attack</button>
        </RouterLink>

        <p class="UserTitle">Sell attack</p>

        <RouterLink to="/createAttack">
        <button class="UserTitle" id="CreateAttackTitle">Create attack</button>
        </RouterLink>
      </div>

      <div class="content_box">
        
        <div class="table-container" id="table-container">

          <ol class="header" id="table-list">
            <span>NAME</span>
            <span>POSITIONS</span>
            <span id="PowerTitle">POWER</span>
          </ol>

          <li v-for="(item,index) in tableData" :key="item.name" @click="selectAttack(index)">
            <span>{{ item.attack_ID }}</span>
            <span>{{ item.positions }}</span>
            <span>{{ item.power }}</span>
          </li>
        </div>
        <!--This section is shown only if is selected an attack-->
        <div v-if="selectedAttack !== null">
          <p id="ChosenAttack">Attack selected: {{ selectedAttack }}</p>
          <input class="input_field" type="text" placeholder="Choose a price for the attack selected" required v-model="price" >
       

          <button @click.prevent="sellAttack()" value="submit" class="signup_button">SELL</button>

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
  max-height: 350px;
  margin-top: 18px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
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
.input_field {
  margin-top: 10px;
  }

#ChosenAttack{
  color: red;
  font-size: 24px;
  font-weight: bold;
}

#PowerTitle{
  margin-right: 38px;
}

.signup_button{
  width: 50%;
  margin-top: 30px;
}

.UserTitle {
  color: white;
  font-family: Inter;
  font-size: 30px;
  font-weight: bold;
}


#BuyAttackTitle{
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