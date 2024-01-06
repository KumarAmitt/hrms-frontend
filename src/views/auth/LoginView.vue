<script setup>
import { ref } from 'vue'
import {useAuthStore} from "@/stores/auth.js";

const loginCredentials = ref({
  email: '',
  password: ''
})

const authStore = useAuthStore();

const handleLogin = () => {
  authStore.login(loginCredentials.value)
}

</script>

<template>
  <h1>Log in</h1>
  <RouterLink :to="{name: 'signup'}">Sign up</RouterLink>
  <form @submit.prevent="handleLogin">
    <input type="email" v-model="loginCredentials.email" />
    <input type="password" v-model="loginCredentials.password" />
    <button>Log in</button>
  </form>
</template>