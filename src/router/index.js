import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from "@/views/auth/SignupView.vue";
import LoginView from "@/views/auth/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/signup', name: 'signup', component: SignupView},
    { path: '/login', name: 'login', component: LoginView},
    { path: '/dashboard', name: 'dashboard', component: () => import('../views/DashboardView.vue') }
  ]
})

// router.beforeEach(async (to, from) => {
//   const {theUser} = useStoreAuth();
//   if (Object.keys(theUser).length === 0 && to.name !== 'auth') {
//     return { name: 'auth' }
//   }
//
//   if (theUser.id && to.name === 'auth') {
//     return false
//   }
// })

export default router
