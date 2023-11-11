<script setup>
import { RouterLink } from 'vue-router'
</script>




<template>

<div class="register-container">
  <h1 class="titan_one">BATTLE<br>ARENA</h1><br>

  <div class="form-container">
    <input class="input_field" placeholder="Username"><br>
    <input class="input_field" placeholder="Password"><br>
 </div>

    <button class="login-button"><RouterLink to="/playGame">LOG IN</RouterLink></button><br>

    <h2 class = "label_registration">Don't have an account <RouterLink to="/">Sign up</RouterLink></h2><br>
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
}

.label_registration {
  font-family: "Inter";
  font-size: 20px;
  color: white;
  margin-top: 30px;
  position: absolute;
  top: 1000px;
}

.input_field {
width: 90%;
padding: 20px;
border: 1px solid #ddd;
margin-top: 50px;
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

.login-button {
  margin-top: 20px; /* Ajusta el margen superior según sea necesario */
  margin-left: 10px; /* Ajusta el margen izquierdo según sea necesario */
  margin-right: 10px; /* Ajusta el margen derecho según sea necesario */
  height: 50px;
  width: 300px;
  border-radius: 35px;
  position: absolute;
  top: 900px;
}

</style>
