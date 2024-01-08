<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
  data() {
    return {
      token: ""
    }
  }
}
</script>

<template>
  <!--<nav>
    <span>Only visible during dev mode: </span>
    <RouterLink to="/">Register </RouterLink>
    <RouterLink to="/login">Login </RouterLink>
    <RouterLink to="/playGame">On developing</RouterLink>
  </nav>-->

  <RouterView />
  

  
</template>

<style>

</style>
