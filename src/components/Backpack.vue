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
      ability1: "",
      ability2: "",
      ability3: "",
      turn: 0,
      count: 0,
      chosenButton: "",
    }
  },

  mounted() {
    this.fetchPlayerAttacks();
  },

  methods: {

    async fetchPlayerAttacks() {
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
            price: attack.price
          }));
        } catch (error) {
          console.error('Error fetching game data:', error);
        }
    },

    unequipAttack(attack) {
        try {
          // Get the bearer token from local storage
          const bearerToken = localStorage.getItem('authToken');

          fetch('https://balandrau.salle.url.edu/i3/players/attacks' + attack, {
          method: 'DELETE',
          headers: {
            'accept': 'application/json',
            'Bearer': `${bearerToken}`, 
          },
        });
        } catch (error) {
          console.error('Error fetching game data:', error);
        }
    },

    selectAbility(name) {

      if (this.chosenButton != "") {
        document.getElementById(this.chosenButton).innerHTML = name;
      }

    },

    buttonPressed(btn) {

      if (getComputedStyle(document.getElementById(btn))['backgroundColor'] == "rgb(235, 0, 0)") {
        if (document.getElementById(btn).textContent != "") {
          unequipAttack(document.getElementById(btn).textContent);
          document.getElementById(this.chosenButton).innerHTML = "";
        }
      }
      document.getElementById('button1').style.backgroundColor = "#FFFFFF";
      document.getElementById('button2').style.backgroundColor = "#FFFFFF";
      document.getElementById('button3').style.backgroundColor = "#FFFFFF";
      document.getElementById(btn).style.backgroundColor = "#EB0000";
      this.chosenButton = btn;


    }
  }
}

</script>

<template>
      <button @click="toggleMenu" class="home_logo"><img src="../assets/images/HomeLogo.png" alt="Home Logo"></button>

      <MenuMV :isVisible="isMenuVisible" @toggleMenu="toggleMenu" />
      <div class="form_container">
        <div class="tab_box">
          <label class="backpack-text"><strong>BACKPACK</strong></label>
        </div>

        <div class="content_box">
          <button class="btn-abilities signup_button" id="button1" @click="buttonPressed('button1')"></button><br>
          <button class="btn-abilities signup_button" id="button2" @click="buttonPressed('button2')"></button><br>
          <button class="btn-abilities signup_button" id="button3" @click="buttonPressed('button3')"></button>


          <table class="table-container">
            <thead class="table-header">
              <tr class="table-row">
                <th>NAME</th>
                <th>POWER</th>
                <th>LEVEL NEEDED</th>
              </tr>
            </thead>
            <tbody>

              <tr v-for="(item) in tableData" @click="selectAbility(item.attack_ID)">
                <td>{{ item.attack_ID }}</td>
                <td>{{ item.power }}</td>
                <td>{{ item.positions }}</td>
                <td>{{ item.price }}</td>
              </tr>
            </tbody>
          
          </table>
        </div>
      </div>
    </template>

<style scoped>

/* .Screen {
    width: 800px;
    height: 1280px;
    background: url("../assets/images/BackgroundBackpackMV.png");
    margin: 0px;
    position: absolute;
    border: 1px solid rgba(0,0,0,1);
} */
.form_container {
  padding: 0px;
  width: 90%;
  margin-top: 257px;
} 

/* @media screen and (min-width: 1000px) {
  .form_container {
    width: 2000px;
    height: auto;
  }
} */

.table-container {
  min-width: 300px;
  max-height: 500px;
  margin-top: 18px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
  overflow-y: auto;
  overflow-x: auto; 
  border: 1px solid #ccc;
  border-radius: 10px; 
  font-size: 22px;
}

th {
  padding-left: 200px;
  padding-right: 200px;
}

.table-header {
  border-bottom: 1px solid #ccc;
}

.table-row {
  border-bottom: 1px solid #ccc;
}

.btn-abilities {
  min-height: 95px;
  min-width: 500px; 
}
/*
td{
  width: 174px;
  padding: 10px;
}

td:hover{
  cursor: default;
}

.table-abilities{
  position: absolute;
  top: 440px;
  color: black;
  left: 300px;
}

.td-abilities{
  padding: 8.5px;
} */
/*
@media screen and (min-width: 2421px) {
  .Screen {
    width: 1728px;
    height: 1117px;
    background: url("../assets/images/BACKPACK.png");
  }

  .backpack-text {
    font-size: 60px;
    top: 140px;
    left: 675px;
  }

  .name-text {
    font-size: 40px;
    top: 350px;
    left: 750px;
  }

  .power-text {
    font-size: 40px;
    top: 350px;
    left: 980px;
  }

  .level-text {
    font-size: 40px;
    top: 350px;
    left: 1175px;
  }

  .table-cell {
    font-size: 25px;
    height: 85px;
  }

  .column-name {
    top: 445px;
    left: 755px;    
  }

  .column-power {
    top: 445px;
    left: 1040px;    
  }

  .column-level {
    top: 445px;
    left: 1290px;    
  }
  
}
*/
</style>