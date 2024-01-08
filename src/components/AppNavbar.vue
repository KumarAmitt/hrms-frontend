<script setup>
import AppLogo from "@/components/AppLogo.vue";
import {RouterLink} from "vue-router";
import {ref} from 'vue';
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import {useAuthStore} from "@/stores/auth.js";

const mobileNav = ref(false);
const isActive = ref(false);

const authStore = useAuthStore();

const toggleMenu = () => {
  mobileNav.value = !mobileNav.value
  isActive.value = !isActive.value
}
</script>

<template>
  <div class="nav-wrapper">
    <nav class="navbar">
      <AppLogo :isLink="true" />
      <div @click="toggleMenu" :class="['menu-toggle', {'is-active': isActive}]">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul :class="['nav', {'mobile-nav': mobileNav}]">
        <li class="nav-item"><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
        <li class="nav-item"><RouterLink :to="{name: 'home'}">About</RouterLink></li>
        <li class="nav-item"><RouterLink :to="{name: 'home'}">Work</RouterLink></li>
        <li class="nav-item"><RouterLink :to="{name: 'home'}">Careers</RouterLink></li>
        <li class="nav-item"><RouterLink :to="{name: 'home'}">Contact Us</RouterLink></li>
        <li class="nav-item"><button @click="authStore.logout">Logout</button></li>
        <li class="nav-item"><ThemeSwitch/></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav-wrapper {
  position: sticky;
  position: -webkit-sticky; /* Safari */
  top: 0;
  background-color: var(--color-white-mute);
  padding: 0.2em 0.5em;
}

/* NAVIGATION */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: 1px solid blue;
}

.navbar ul {
  //border: 2px solid green;
  list-style: none;
  margin: 0;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translate(0);
  transition: transform 0.7s ease-in-out;
}

.navbar ul li {
  padding: 0.5em 1em;
}

.navbar ul li + li {
 margin-left: 1em;
}

.nav-item a {
  text-decoration: none;
  transition: color 0.3s ease-out;
}

.nav-item a:hover {
  color: #3498db;
}

/* MOBILE MENU & ANIMATION */

.menu-toggle {
  margin-right: 20px;
}

.menu-toggle:hover {
  cursor: pointer;
}

.menu-toggle .bar {
  width: 25px;
  height: 3px;
  background-color: #3f3f3f;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.menu-toggle.is-active .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.is-active .bar:nth-child(1) {
  -webkit-transform: translateY(8px) rotate(45deg);
  -ms-transform: translateY(8px) rotate(45deg);
  -o-transform: translateY(8px) rotate(45deg);
  transform: translateY(8px) rotate(45deg);
}

.menu-toggle.is-active .bar:nth-child(3) {
  -webkit-transform: translateY(-8px) rotate(-45deg);
  -ms-transform: translateY(-8px) rotate(-45deg);
  -o-transform: translateY(-8px) rotate(-45deg);
  transform: translateY(-8px) rotate(-45deg);
}


/* Media Queries */

/* Mobile Devices - Phones/Tablets */

@media only screen and (max-width: 720px) {
  /* MOBILE NAVIGATION */
  .navbar ul {
    flex-direction: column;
    justify-content: start;
    position: fixed;
    top: 2.6em;
    width: 100%;
    height: calc(100vh - 2.6em);
    transform: translate(-103%);
    overflow: hidden;
    background-color: var(--color-background);
  }

  .navbar ul li + li {
    margin-left: 0;
  }

  .navbar li:first-child {
    margin-top: 20px;
  }


  .menu-toggle, .bar {
    display: block;
    cursor: pointer;
  }

  .mobile-nav {
    transform: translate(-2%) !important;
  }
}
</style>