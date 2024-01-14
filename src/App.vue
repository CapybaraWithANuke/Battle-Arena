<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
</script>

<template>
  <body>
    <RouterView/>
  </body>
  
  <footer class="footer">
      <p>Copyright © 2023 Battle Arena {Nikita Voronin, Stefano Travagliati, Valèria Ezquerra}</p>
    </footer>
  
</template>

<style scoped>
.footer {
  background-color: #333; 
  color: white; 
  text-align: center; 
  padding: 10px; 
  position: fixed; 
  width: 100%; 
  bottom: 0;
}
</style>
