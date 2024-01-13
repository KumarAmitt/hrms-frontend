<script setup>
  const props = defineProps({
    type: {type: String, default: 'notice'}
  })

  const emit = defineEmits(['confirmError'])

</script>

<template>
  <dialog :class="type" open>
    <div class="content">
      <slot name="message">
        <div>Something went wrong.</div>
      </slot>
    </div>
    <button @click="$emit('confirmError')">
      <font-awesome-icon :icon="['fas', 'xmark']" />
    </button>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  top: 4em;
  right: 10px;
  left: 20%;
  margin: unset;
  inset-inline-start: unset;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  //border-radius: 10px;
}

button {
  //border: 1px solid red;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  color: red;

}

.notice {
  border-left: 6px solid green;
}

.alert {
  border-left: 6px solid red;
}
</style>