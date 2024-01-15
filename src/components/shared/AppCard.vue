<script setup>

</script>

<template>
  <div class="card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--color-background);
  padding: 1em;
  color: var(--color-text);
}

.card-header {
  font-size: 1.6rem;
  font-weight: 600;
  padding-bottom: 0.5em;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-heading);
}

.card-body {
  //background-color: yellow;
  padding: 1em 0;
}

.card-footer  {
  border-top: 1px solid var(--color-border);
  padding-top: 1em;
 }
</style>