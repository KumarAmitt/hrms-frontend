<script setup>
const props = defineProps({
  type: {type: String, default: 'text-button'}
})
</script>

<template>
<button :class="type">
  <slot name="leading-icon"></slot>
  <slot></slot>
</button>
</template>

<style scoped>
button {
  background-color: var(--color-accent);
  color: var(--color-white);
  padding: 0.5em 1em;
  border-radius: 5px;
  font-size: 1.2rem;
  border: 1px solid var(--color-accent);
  transition: all 0.3s ease-out;
  cursor: pointer;
}

button:hover {
  background-color: transparent;
  color: var(--color-accent);
  font-weight: 300;
}

.arrow-button::after {
  content: "\0279E";
  padding-left: 6px;
  display: inline-block;
  transition: transform 0.3s ease-out;
}

.arrow-button:hover::after {
  transform: translateX(6px);
}

</style>