<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>Logo</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <RouterLink :to="{name: 'login'}">Get Started</RouterLink>
</template>


