import {defineStore} from 'pinia';
import {ref} from 'vue';
import {BASE_URL} from "@/constants.js";
import axios from "axios";
import {useRouter} from "vue-router";
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {

  const user = ref(null);
  const isLoading = ref(false);
  const authError = ref(null);
  const token = useStorage('token', null);
  const router = useRouter();

  // ACTIONS
  const signup = async (credentials) => {
    isLoading.value = true;
    authError.value = null;
    try {
      if(credentials.password !== credentials.confirmPassword) throw Error('Password NOT matches');

      const response = await axios.post(`${BASE_URL}/signup`, {user: credentials});
      user.value = response.data.user
      token.value =  response.headers.get('Authorization')
      console.log(token.value)
      console.log(user.value);
      console.log(response);
      await router.push({name: 'login'});
    } catch(error) {
      console.log('ERROR--', error)
      if (error.response) {
        console.log(error.response.data.message)
        authError.value = error.response.data.message
      } else {
        console.log(error.message);
        authError.value = error.message;
      }
    } finally {
      console.log('Sign up action complete')
      isLoading.value = false;
    }
  }

  const login = async (credentials) => {
    isLoading.value = true;
    authError.value = null;
    try {
      const response = await axios.post(`${BASE_URL}/login`, {user: credentials});
      user.value = response.data.user
      token.value =  response.headers.get('Authorization')
      console.log(response)
      useStorage('token', token.value)
      await router.push({name: 'dashboard'});
    } catch(error) {
      console.log('ERROR--', error)
      if (error.response) {
        console.log(error.response.data)
        authError.value = error.response.data;
      } else {
        console.log(error.message);
        authError.value = error.message;
      }
    } finally {
      console.log('Login action complete')
      isLoading.value = false;
    }
  }

  const logout = async () => {
    console.log('TOKEN--', token.value)
    try {
      const response = await axios.delete(`${BASE_URL}/logout`, {
        headers: { "Authorization": token.value }
      });
      console.log('LOGOUT RESPONSE--', response);
      router.push({name: 'home'});
      token.value = null;
    } catch(error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert(error.message);
      }
    }
  }

  const currentUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/current_user`, {
        headers: { "Authorization": token.value }
      });
      console.log(response);
    } catch(error) {
      if (error.response) {
        alert(error.response.data)
      } else {
        alert(error.message);
      }
    }
  }

  const userSignedIn = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user_signed_in`, {
        headers: { "Authorization": token.value }
      });
      return response.data.user_signed_in
    } catch(error) {
      console.log(error.message)
    }
  }

  const closeError = () => authError.value = null;

  return {isLoading, authError, signup, login, logout, currentUser, userSignedIn, closeError}
})