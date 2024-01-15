import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from "@/views/auth/SignupView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import {useAuthStore} from "@/stores/auth.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'home', component: HomeView,
      children: [
        {path: 'login', name: 'login', component: LoginView},
        {path: 'signup', name: 'signup', component: SignupView}
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {requiresAuth: true},
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/announcements',
      name: 'announcements',
      meta: {requiresAuth: true},
      component: () => import('../views/AnnouncementsView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    const authStore = useAuthStore();
    const loggedIn = await authStore.userSignedIn();
    loggedIn ? next() : next({name: 'login'});
  } else next();
});

export default router
