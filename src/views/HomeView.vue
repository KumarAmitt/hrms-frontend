<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <h1 class="app-intro">
    All-in-One Software for streamlining internal business functions like
    <span>Onboarding</span>,
    <span>Leave Management</span>,
    <span>Attendance Management</span>, and
    <span>Projects Tracking</span>
  </h1>
  <RouterLink :to="{name: 'login'}" class="start-btn">Get Started</RouterLink>
</template>

<style scoped>
.app-intro {
  font-size: 1.8rem;
  margin-top: 4em;
}

.app-intro span {
  font-size: 2.2rem;
  color: var(--color-accent);
}

.start-btn {
  position: fixed;
  bottom: 2em;
  left: 20%;
  right: 20%;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  background-color: var(--color-accent);
  color: var(--color-text-dark-1);
  padding: 0.5em 1em;
  border-radius: 28px;
  transition: transform 0.7s ease-in-out;;
}

</style>




