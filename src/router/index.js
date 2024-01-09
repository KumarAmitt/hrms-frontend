import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from "@/views/auth/SignupView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import {useAuthStore} from "@/stores/auth.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/signup', name: 'signup', component: SignupView},
    {path: '/login', name: 'login', component: LoginView},
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {requiresAuth: true},
      component: () => import('../views/DashboardView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const loggedIn = await authStore.userSignedIn();
  if (to.matched.some(route => route.meta.requiresAuth))
    loggedIn ? next() :  next({name: 'login'});
  else
    next();
});

export default router
