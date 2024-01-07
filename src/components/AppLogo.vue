<script setup>
const props = defineProps({
  size: { type: String, default: '' },
  variant: {type: String, default: 'accent'}
})
</script>

<template>
  <div :class="['logo', size, variant]">PeoplePro</div>
</template>

<style scoped>
.logo {
  font-size: 1.5rem;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;
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
  color: var(--color-app-black);
}

.light {
  color: var(--color-app-white);
}


</style>