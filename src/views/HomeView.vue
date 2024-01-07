<script setup>
import { RouterLink } from 'vue-router'
import AppLogo from "@/components/AppLogo.vue";
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)

</script>

<template>
  <section>
    <AppLogo size="logo-xl" variant="accent" />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <RouterLink :to="{name: 'login'}">Get Started</RouterLink>
  </section>

  <button @click="toggleDark()">
    <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
  </button>
</template>

<style>

</style>




