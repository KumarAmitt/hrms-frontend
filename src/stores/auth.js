import {defineStore} from 'pinia';
import {ref} from 'vue';
import {BASE_URL} from "@/constants.js";
import axios from "axios";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore('auth', () => {

  const user = ref(null);
  const token = ref(null);
  const isLoading = ref(false);
  const router = useRouter()

  // ACTIONS
  const signup = async (credentials) => {
    isLoading.value = true;
    try {
      const response = await axios.post(`${BASE_URL}/signup`, {user: credentials});
      user.value = response.data.user
      token.value =  response.headers.get('Authorization').split(' ')[1]
      console.log(token.value)
      console.log(user.value);
      console.log(response);
    } catch(error) {
      console.log('ERROR--', error)
      if (error.response) {
        console.log(error.response.data.message)
      } else {
        console.log(error.message);
      }
    } finally {
      console.log('Sign up action complete')
      isLoading.value = false;
    }
  }

  const login = async (credentials) => {
    isLoading.value = true;
    try {
      const response = await axios.post(`${BASE_URL}/login`, {user: credentials});
      user.value = response.data.user
      token.value =  response.headers.get('Authorization').split(' ')[1]
      console.log(response)
      await router.push({name: 'dashboard'});
    } catch(error) {
      console.log('ERROR--', error)
      if (error.response) {
        console.log(error.response.data)
      } else {
        console.log(error.message);
      }
    } finally {
      console.log('Login action complete')
      isLoading.value = false;
    }
  }

  return {signup, login}
})