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
      attack_ID: "",
      positions: "",
      images: [
        { src: "src/assets/images/SwordAttack.png", alt: "Sword Attack" },
        { src: "src/assets/images/MagicAttack.png", alt: "Magic Attack" },
        { src: "src/assets/images/LightAttack.png", alt: "Light Attack" },
      ],
      selectedImage: null,
      response: "",
    };
  },

  methods: {

    selectImage(index) {
      this.selectedImage = this.images[index].src;
    },

    createAttack() {
      
        const bearerToken = localStorage.getItem('authToken');
        const attack = { attack_ID: this.attack_ID, positions: this.positions, img: this.selectedImage}

        const response = fetch('https://balandrau.salle.url.edu/i3/shop/attacks', {
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
            this.response = "Attack created!";
          }
          return response.json()
        }).then((res) => {
            if (res.ok == undefined) {
            this.response = res.error.message;
            }
        });
          
    } 
  }
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

        <RouterLink to="/sellAttack">
            <button class="UserTitle" id="SellAttackTitle">Sell attack</button>
        </RouterLink>

        <p class="UserTitle">Create attack</p>
      </div>

      <div class="content_box">

        <input class="input_field" type="text" placeholder="Name  (max 20 characters)" required v-model="attack_ID" >
        <input class="input_field" type="text" placeholder="Positions  (format: (x,y) )" required v-model="positions">
        
        <div class="image_container">
            <img class="AttacksImages"
              v-for="(image, index) in images"
              :src="image.src"
              :alt="image.alt"
              :key="index"
              @click="selectImage(index)"
            />

            <div v-if="selectedImage !== null" class="selected_image_container">
              <img class="AttacksImages"
                :src="selectedImage"
              />
            </div>
         </div>
        
           
            <button @click.prevent="createAttack()" value="create" class="signup_button">CREATE ATTACK</button>
    
         <p> {{ response }}</p>
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

.image_container {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin-top: 20px;
}

.selected_image_container { 
  border-radius: 10px; 
  display: flex;
  justify-content: center; 
  padding: 5px;
  background-color: rgba(235, 0, 0, 0.322);
  border: 3px solid red;
}

.AttacksImages{
  width: 105px;
  height: 105px;
  cursor: pointer;
}

.signup_button{
  width: 50%;
}

#BuyAttackTitle{
  color: #8F8F8F;
  background: none;
  border: 0;
  cursor: pointer;
}

#SellAttackTitle{
  color: #8F8F8F;
  background: none;
  border: 0;
  cursor: pointer;
}

</style>