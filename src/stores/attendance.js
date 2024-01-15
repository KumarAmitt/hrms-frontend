import {ref} from 'vue'
import {defineStore} from 'pinia'
import axios from "axios";
import {BASE_URL} from "@/constants.js";
import {useAuthStore} from "@/stores/auth.js";

export const useAttendanceStore = defineStore('attendance', () => {

  const authStore = useAuthStore();
  const token = authStore.getToken


  const markMyAttendance = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/attendances`,
        {
          attendance: {
            date: null,
            user_id: null,
            attendance_type_id: null
          }
        },
        {
          headers: {"Authorization": token}
        });
      console.log('RESPONSE--', response);
    } catch (error) {
      console.log('ERROR--', error);
    }
  }
  return {markMyAttendance}
})
