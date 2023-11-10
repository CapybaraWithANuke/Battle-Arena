<script setup>
import { RouterLink } from 'vue-router'
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
  <h1 class="titan_one">BATTLE<br>ARENA</h1><br>

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

    <button class="signup_button"><RouterLink to="/playGame">SIGN UP</RouterLink></button><br>

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
  align-items: center; /* Centra los elementos horizontalmente */
  text-align: center;
}

.form-container {
  background-color: rgba(255, 255, 255, 0); /* Color de fondo transparente */
  border: 2px solid white; /* Borde negro */
  border-radius: 53px; /* Bordes redondeados */
  padding: 20px; /* Espaciado interno */
  display: inline-block; /* Hace que el contenedor abrace el contenido */
  margin-top: 20px; /* Ajusta el margen según sea necesario */
  width: 500px; /* Ancho fijo */
  height: 500px;
  max-width: 100%; /* Ancho máximo para mantener la responsividad */
  box-sizing: border-box; /* Incluye el padding y el border en el tamaño total */

}

.signup_button {
  margin-top: 20px; /* Ajusta el margen superior según sea necesario */
  margin-left: 10px; /* Ajusta el margen izquierdo según sea necesario */
  margin-right: 10px; /* Ajusta el margen derecho según sea necesario */
  height: 50px;
  width: 300px;
  border-radius: 35px;
}

</style>
