<script setup>

</script>

<template>
  <RouterLink :to="{name: 'home'}">
    <font-awesome-icon :icon="['far', 'user']"/>
    <span>First</span>
  </RouterLink>
  <RouterLink :to="{name: 'home'}">
    <font-awesome-icon :icon="['far', 'user']"/>
    <span>First</span>
  </RouterLink>
  <RouterLink :to="{name: 'home'}">
    <font-awesome-icon :icon="['far', 'user']"/>
    <span>First</span>
  </RouterLink>
  <RouterLink :to="{name: 'home'}">
    <font-awesome-icon :icon="['far', 'user']"/>
    <span>First</span>
  </RouterLink>
  <RouterLink :to="{name: 'home'}">
    <font-awesome-icon :icon="['far', 'user']"/>
    <span>More</span>
  </RouterLink>
</template>

<style scoped>
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0.5em 0 0.4em;
  width: calc(100vw / 5);
  color: var(--color-text);
  transition: all 0.3s ease-in;
}

a:hover {
  color: var(--color-accent);
  transform: scale(1.1);
}

a span {
  margin-top: 0.3em;
}


@media screen and (min-width: 992px) {
  a {
    width: auto;
    margin: 0.5em 0;
  }
}

</style>