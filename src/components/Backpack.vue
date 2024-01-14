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
      abilities: [],
      turn: 0,
      count: 0,
      chosenButton: "",
      tableData: [],
      equippedAttacks: [],
      equippedAttackNames: []
    }
  },

  mounted() {
    this.fetchPlayerAttacks();
    this.fetchEquippedAttacks();
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
                price: attack.price,
                equipped: attack.equipped
            }));
        } catch (error) {
          console.error('Error fetching player attacks: ', error);
        }
    },

    async fetchEquippedAttacks() {
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

          this.equippedAttacks = data.map((attack) => ({
            attack_ID: attack.attack_ID,
            equipped: attack.equipped
          })).filter((attack) => attack.equipped === true);

          while (this.equippedAttacks.length < 3) {
              let emptyAttack = {'attack_ID': "", positions: (0,0), power: 0, price: 0, equipped: false};
              this.equippedAttacks.push(emptyAttack);
          }

          for (let i = 0; i < 3; ++i) {
            this.equippedAttackNames.push(this.equippedAttacks.at(i).attack_ID);
          }

        } catch (error) {
          console.error('Error fetching player attacks: ', error);
        }
    },

    unequipAttack(attack) {
        try {
          // Get the bearer token from local storage
            const bearerToken = localStorage.getItem('authToken');

            fetch('https://balandrau.salle.url.edu/i3/players/attacks/' + attack, {
               method: 'DELETE',
               headers: {
                 'accept': 'application/json',
                 'Bearer': `${bearerToken}`, 
                },
            });
        } catch (error) {
          console.error('Error unequipping attack: ', error);
        }
    },

    async equipAttack(attack) {
        try {
          // Get the bearer token from local storage
            const bearerToken = localStorage.getItem('authToken');

            const response = await fetch('https://balandrau.salle.url.edu/i3/players/attacks/' + attack, {
                method: 'POST',
                headers: {
                  'accept': 'application/json',
                  'Bearer': `${bearerToken}`, 
                },
            })

            console.log(response);

            if (response.ok) {
                if (response.status == 204) {
                  return true; 
                } else {
                  return false;
                }
            } else {
                return false;
            }

        } catch (error) {
          console.error('Error equipping attack: ', error);
        }
    },

    async substituteAttack(attackToChange, newAttack) {
      try {
          // Get the bearer token from local storage
          const bearerToken = localStorage.getItem('authToken');

          const response = await fetch('https://balandrau.salle.url.edu/i3/players/attacks/' + newAttack + '/' + attackToChange, {
              method: 'PATCH',
              headers: {
                'accept': 'application/json',
                'Bearer': `${bearerToken}`, 
              },
          });

          if (response.ok) {
                if (response.status == 204) {
                  return true; 
                } else {
                  return false;
                }
            } else {
                return false;
            }
      } catch (error) {
          console.error('Error substituting attack: ', error);
      }
    },

    async selectAbility(name) {

      if (this.chosenButton != "") {
          if (document.getElementById(this.chosenButton).textContent != "") {
              if (await this.substituteAttack(document.getElementById(this.chosenButton).textContent, name)) {
                document.getElementById(this.chosenButton).innerHTML = name;
              }
          }
          else {
              if (await this.equipAttack(name)) {
                document.getElementById(this.chosenButton).innerHTML = name;
              }
          }

      }
    },

    buttonPressed(btn) {

        if (getComputedStyle(document.getElementById(btn))['backgroundColor'] == "rgb(235, 0, 0)") {
            if (document.getElementById(btn).textContent != "") {
                this.unequipAttack(document.getElementById(btn).textContent); 
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
      <nav>
        <button @click="toggleMenu" class="home_logo"><img src="../assets/images/HomeLogo.png" alt="Home Logo"></button>

        <MenuMV :isVisible="isMenuVisible" @toggleMenu="toggleMenu" />
      </nav>
      <div class="form_container">
        <div class="tab_box">
          <p class="backpack-text">BACKPACK</p>
        </div>

        <div class="content_box">
          <button class="btn-abilities signup_button" id="button1" @click="buttonPressed('button1')">{{ this.equippedAttackNames.at(0) }}</button><br>
          <button class="btn-abilities signup_button" id="button2" @click="buttonPressed('button2')">{{ this.equippedAttackNames.at(1) }}</button><br>
          <button class="btn-abilities signup_button" id="button3" @click="buttonPressed('button3')">{{ this.equippedAttackNames.at(2) }}</button>

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


.form_container {
  padding: 0px;
  width: 90%;
  margin-top: 257px;
  
} 

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
  height: 90px;
  width: 500px; 
  color: black;
}

.content_box{
  display: flex;
  flex-direction: column;
  align-items: center;
}

td{
  cursor: pointer;
}

.backpack-text{
  font-size: 32px;
  font-weight: bold;
}

</style>