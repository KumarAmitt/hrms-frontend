<script setup>
import { RouterLink } from 'vue-router'
import AppLogo from "@/components/AppLogo.vue";
// import { useDark, useToggle } from '@vueuse/core'
//
// const isDark = useDark({
//   selector: 'body',
//   attribute: 'color-scheme',
//   valueDark: 'dark',
//   valueLight: 'light',
// })
// const toggleDark = useToggle(isDark)

</script>

<template>
  <section>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <RouterLink :to="{name: 'login'}">Get Started</RouterLink>
  </section>


  <section class="headline">
    <div v-for="i in 100" :key="i">Lorem ipsum dolor sit amet. {{ i }}</div>
  </section>

<!--  <button @click="toggleDark()">-->
<!--    <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>-->
<!--  </button>-->
</template>

<style>

</style>




