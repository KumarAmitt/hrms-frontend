<template>
  <h1>Brand Logo</h1>
  <RouterLink :to="{name: 'signup'}">Sign up</RouterLink> | 
  <RouterLink :to="{name: 'login'}">Log in</RouterLink>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>