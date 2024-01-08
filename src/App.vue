<script setup>
import {RouterView} from 'vue-router'
import AppNavbar from "@/components/AppNavbar.vue";
</script>


<template>
  <AppNavbar/>
  <div class="main">
    <RouterView/>
  </div>
</template>

<style scoped>
.main {
  padding: 1em;
}
</style>