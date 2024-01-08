<script setup>
import {ref} from 'vue'
import {useAuthStore} from "@/stores/auth.js";

const signupCredentials = ref({
  email: '',
  password: '',
  confirmPassword: ''
})
// const confirmPassword = ref('');

const authStore = useAuthStore();

const handleSignup = () => {
  authStore.signup(signupCredentials.value)
}

</script>

<template>
  <h1>Sign up</h1>
  <p>Already have an account?
    <RouterLink :to="{name: 'login'}">Log in</RouterLink>
  </p>
  <p v-if="authStore.isLoading">Creating new account...</p>
  <p v-if="authStore.authError">
    {{ authStore.authError }}
    <button @click="authStore.closeError">Remove</button>
  </p>


  <form @submit.prevent="handleSignup">
    <input type="email" placeholder="email" v-model="signupCredentials.email"/><br/>
    <input type="password" placeholder="password" v-model="signupCredentials.password"/><br/>
    <input type="password" placeholder="confirm password" v-model="signupCredentials.confirmPassword"/><br/>
    <button>Sign up</button>
  </form>
</template>