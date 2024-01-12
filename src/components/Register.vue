<script setup>
</script>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            images: [
              { src: "src/assets/images/AmongusRed.png", alt: "Red Among Us" },
              { src: "src/assets/images/AmongusBlue.png", alt: "Blue Among Us" },
              { src: "src/assets/images/AmongusWhite.png", alt: "White Among Us" },
              { src: "src/assets/images/AmongusBlack.png", alt: "Black Among Us" },
            ],
            selectedImage: null,
            response:"",
      }
    },
    methods: {

      selectImage(index) {
        this.selectedImage = index;
      },
        register() {

          const selectedImageSrc = this.selectedImage !== null ? this.images[this.selectedImage].src : "";

            const createUserRequest = { player_ID: this.username, password: this.password, img: selectedImageSrc };
            fetch("https://balandrau.salle.url.edu/i3/players", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(createUserRequest)
            }).then((response) => {
                if (response.ok) {
                    this.response = "Player created!";
                    return response;
                }
                return response.json();
            }).then((res) => {
                if (res.ok == undefined) {
                    this.response = res.error.message;
                }
            }).catch((error) => {
                this.response = "No connection with API";
            });
        }
    }
}
</script>

<template>
  <main>
    <div class="register_container">
      <h1 class="titan_one">BATTLE ARENA</h1>
          <form class="form_container">
            <input class="input_field" type="text" placeholder="Username (max 20 characters)" required v-model="username" >
            <input class="input_field" type="password" placeholder="Password (max 20 characters)" required v-model="password">

              <div class="image_container">
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

                <button @click.prevent="register()" value="Register" class="signup_button">SIGN UP</button>
              
                <p> {{ response }}</p>
            <p class="label_registration">Already have an account? <RouterLink to="/login">Login</RouterLink></p>
          </form>
    </div>
  </main>
</template>

<style scoped>

@font-face {
  font-family: "TitanOne";
  src: local("TitanOne"),
   url(../assets/fonts/TitanOne-Regular.ttf) format("truetype");
}

.label_registration{
  margin-top: 30px;
}

.image_container {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin-top: 20px;
 
}

.selected_image_container {
  border: 4px solid white; 
  border-radius: 10px; 
  display: flex;
  justify-content: center; 
  padding: 10px;
  background-color: white;
}

@media screen and (min-width: 1000px) {
  .form_container {
    width: 700px;
    height: auto;
  }
}

</style>

