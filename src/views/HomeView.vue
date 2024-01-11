<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router'
import AppNavbar from "@/components/AppNavbar.vue";

const router = useRouter();
const goToLoginPage = () => {
  router.push({name: 'login'})
}
</script>

<template>
  <AppNavbar />
  <h1 class="app-intro">
    All-in-One Software for streamlining internal business functions like
    <span>Onboarding</span>,
    <span>Leave Management</span>,
    <span>Attendance Management</span>, and
    <span>Projects Tracking</span>
  </h1>
  <button @click="goToLoginPage" class="start-btn">Get Started</button>
  <router-view else />
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
  font-size: 1.2rem;
  background-color: var(--color-accent);
  color: var(--color-text-dark-1);
  padding: 0.5em 1em;
  border-radius: 28px;
  border: none;
  transition: transform 0.7s ease-in-out;
}

</style>




