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
  <p>Don't have an account?
    <RouterLink :to="{name: 'signup'}">Sign up</RouterLink>
  </p>
  <p v-if="authStore.isLoading">Logging in...</p>
  <p v-if="authStore.authError">
    {{ authStore.authError }}
    <button @click="authStore.closeError">Remove</button>
  </p>

  <form @submit.prevent="handleLogin" autocomplete="on">
    <input type="email" placeholder="email" v-model="loginCredentials.email" /><br />
    <input type="password" placeholder="password" v-model="loginCredentials.password" /><br />
    <button>Log in</button>
  </form>
</template>