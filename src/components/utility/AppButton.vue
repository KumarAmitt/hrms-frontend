<script setup>

</script>

<template>
<button>
  <slot name="leading-icon"></slot>
  <slot></slot>
  <slot name="trailing-icon"></slot>
</button>
</template>

<style scoped>
button {
  background-color: var(--color-accent);
  color: var(--color-white);
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: all;
}

button:hover {

}

</style>