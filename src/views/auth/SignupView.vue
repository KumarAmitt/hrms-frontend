<script setup>
import {ref} from 'vue'
import {useAuthStore} from "@/stores/auth.js";
import AppButton from "@/components/utility/AppButton.vue";
import AppNotification from "@/components/utility/AppNotification.vue";
import LoadingSpinner from "@/components/utility/LoadingSpinner.vue";

const signupCredentials = ref({
  email: '',
  password: '',
  confirmPassword: ''
})

const authStore = useAuthStore();

const handleSignup = () => {
  authStore.signup(signupCredentials.value)
}

</script>

<template>

  <div class="container">
    <div class="content">
      <h2>Sign up</h2>
      <LoadingSpinner v-if="authStore.isLoading"></LoadingSpinner>
      <teleport to="body">
        <AppNotification v-if="authStore.authError" @confirm-error="authStore.closeError" type="alert">
          <template #message>{{  authStore.authError }}</template>
        </AppNotification>
      </teleport>
      <form @submit.prevent="handleSignup" autocomplete="on">
        <input type="email" placeholder="email" v-model="signupCredentials.email"/>
        <input type="password" placeholder="password" v-model="signupCredentials.password"/>
        <input type="password" placeholder="confirm password" v-model="signupCredentials.confirmPassword"/>
        <AppButton type="arrow-button">Sign up</AppButton>
      </form>
      <div class="sub-content">
        <p>Already have an account?
          <RouterLink :to="{name: 'login'}">Log in</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
//border: 2px solid red;
  margin-top: -50px;
  padding: 8em 1em 6em;
  background: linear-gradient(to bottom, var(--color-accent), #fff);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
//border: 1px solid blue; background: #fff;
  padding: 1em 2em;
  border-radius: 10px;
  width: 80%;
}

h2 {
  font-size: 2rem;
//border: 1px solid red;
}

form {
//border: 1px solid red; margin-top: 2em;
}

form > * {
  display: block;
  width: 100%;
  margin-bottom: 1em;
}

input, input:focus {
  outline: none;
  border: none;
}

form input {
  font-size: 1rem;
  padding: 0.5em;
  background-color: transparent;
  color: var(--color-accent);
  border-bottom: 1px solid var(--color-text);
}

form input:focus {
  border-bottom: 1px solid var(--color-accent);
}


.sub-content {
  margin-top: 2em;
  font-size: 1.2rem;
  text-align: center;
}

.sub-content a {
  text-decoration: none;
  color: var(--color-accent);
}

@media (min-width: 992px) {
  .container {
    background: var(--color-background);
  }
  .content {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    max-width: 600px;
    min-height: 40vh;
    color: var(--color-heading);
  //background: radial-gradient(#fff2 30%, #fff4);
    background: radial-gradient(var(--color-background) 30%, var(--color-background-soft));
  }
}

</style>