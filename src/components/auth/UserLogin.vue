<template>
  <h1>Log in</h1>
  <form @submit.prevent="handleLogin">
    <input type="email" v-model="user.email" />
    <input type="password" v-model="user.password" />
    <button>Log in</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const user = ref({
  email: '',
  password: ''
})

const handleLogin = () => {
  console.log(user.value)
}

</script>