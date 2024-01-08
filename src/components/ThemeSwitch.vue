<script setup>
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
  <button @click="toggleDark()">
    <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
  </button>
</template>

<style scoped>

</style>