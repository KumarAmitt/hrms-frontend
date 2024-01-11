<script setup>
import {RouterLink} from "vue-router";
import {computed} from "vue";

const props = defineProps({
  size: { type: String, default: '' },
  variant: {type: String, default: 'accent'},
  isLink: {type: Boolean, default: false}
})

const logoLink = computed(() => {
  return props.isLink ? 'home' : '';
})
</script>

<template>
  <RouterLink :to="{name: logoLink}" :class="['logo', size, variant]">App Logo</RouterLink>
</template>

<style scoped>
.logo {
  font-size: 1.5rem;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-sm {
  font-size: 1.2rem;
}

.logo-xl {
  font-size: 2rem;
}

.accent {
  color: var(--color-accent);
}

.dark {
  color: var(--color-black-soft);
}

.light {
  color: var(--color-white-soft);
}

</style>