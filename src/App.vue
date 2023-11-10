<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <span>Only visible during dev mode: </span>
    <RouterLink to="/">Register </RouterLink>
    <RouterLink to="/login">Login </RouterLink>
    <RouterLink to="/myAccountMV">On developing</RouterLink>
  </nav>

  <RouterView />
  

  
</template>

<style scoped>

</style>
