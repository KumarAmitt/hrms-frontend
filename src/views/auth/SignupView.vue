<script setup>
import { ref } from 'vue'
import {useAuthStore} from "@/stores/auth.js";

const signupCredentials = ref({
  email: '',
  password: '',
})
const confirmPassword = ref('');

const authStore = useAuthStore();

const handleSignup = () => {
  if (signupCredentials.value.password === confirmPassword.value)
    authStore.signup(signupCredentials.value)
  else
    console.log('Password mismatch error')
}

</script>

<template>
  <h1>Sign up</h1>
  <RouterLink :to="{name: 'login'}">Log in</RouterLink>
  <form @submit.prevent="handleSignup">
    <input type="email" v-model="signupCredentials.email" />
    <input type="password" v-model="signupCredentials.password" />
    <input type="password" v-model="confirmPassword" />
    <button>Sign up</button>
  </form>
</template>