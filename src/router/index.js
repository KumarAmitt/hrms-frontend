import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import UserLogin from '../components/auth/UserLogin.vue'
import UserSignup from '../components/auth/UserSignup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        { path: '/signup', name: 'signup', component: UserSignup},
        { path: '/login', name: 'login', component: UserLogin}
      ]
    },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
  ]
})

export default router
