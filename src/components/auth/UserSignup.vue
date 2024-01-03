<template>
  <h1>Sign up</h1>
  <form @submit.prevent="handleSignup">
    <input type="email" v-model="user.email" />
    <input type="password" v-model="user.password" />
    <button>Sign up</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const user = ref({
  email: '',
  password: ''
})

const handleSignup = () => {
  console.log(user.value)
}

</script>