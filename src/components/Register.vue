<script setup>
</script>

<script>
export default {
  data() {
    return {
      images: [
        { src: "src/assets/images/AmongusRed.png", alt: "Red Among Us" },
        { src: "src/assets/images/AmongusBlue.png", alt: "Blue Among Us" },
        { src: "src/assets/images/AmongusWhite.png", alt: "White Among Us" },
      ],
      selectedImage: null,
    };
  },
  methods: {
    selectImage(index) {
      this.selectedImage = index;
    },
  },
};
</script>

<template>

<div class="register-container">
  <h1 class="titan_one">BATTLE ARENA</h1><br>

  <div class="form-container">
    <input class="input_field" placeholder="Username"><br>
    <input class="input_field" placeholder="Password"><br>

    <div>
        <div class="image_container">
          <!-- Imágenes originales -->
          <img
            v-for="(image, index) in images"
            :src="image.src"
            :alt="image.alt"
            :key="index"
            @click="selectImage(index)"
          />
          
          <div v-if="selectedImage !== null" class="selected_image_container">
          <img
            :src="images[selectedImage].src"
            :alt="images[selectedImage].alt"
            class="selected_image"
          />
        </div>

        </div>

      </div>

    <RouterLink to="/playGame"><button class="signup_button">SIGN UP</button></RouterLink><br>

    <h2 class = "label_registration">Already have an account? <RouterLink to="/login">Login</RouterLink></h2><br>
  </div>
</div>
</template>

<style scoped>

@font-face {
  font-family: "TitanOne";
  src: local("TitanOne"),
   url(../assets/fonts/TitanOne-Regular.ttf) format("truetype");
}

.titan_one {
  font-family: "TitanOne";
  font-size: 96px;
  margin-top: 185px;
  margin-left: 204px;
  margin-right: 204px;
  color: white;
  white-space: normal;
}

.label_registration {
  font-family: "Inter";
  font-size: 20px;
  color: white;
  margin-top: 30px;
}

.input_field {
width: 90%;
padding: 20px;
border: 1px solid #ddd;
margin-top: 50px;
}

.image_container {
display: flex;
justify-content: space-around;
padding: 10px;
margin-top: 20px;
}

.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.form-container {
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid white; 
  border-radius: 5vw; 
  padding: 2vw; 
  display: inline-block; 
  margin-top: 2vw; 
  width: 500px; 
  height: 500px; 
  box-sizing: border-box;
}

.signup_button {
  margin-top: 20px; 
  margin-left: 10px; 
  margin-right: 10px;
  height: 50px;
  width: 300px;
  border-radius: 35px;
}

@media screen and (min-width: 1000px) {
  .form-container {
    width: 50%;
    height: auto;
  }
}



</style>

