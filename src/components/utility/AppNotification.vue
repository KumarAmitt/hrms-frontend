<script setup>
  import {onMounted} from "vue";

  const props = defineProps({
    type: {type: String, default: 'notice'}
  })

  const emit = defineEmits(['confirmError'])
  onMounted(() => setTimeout(() => emit('confirmError'), 5000));
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
  max-width: 70%;
  margin: unset;
  inset-inline-start: unset;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;
}

button {
  //border: 1px solid red;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  color: red;

}

.notice {
  border-color: green;
  border-left-width: 6px;
  background-color: #89D99D;
}

.alert {
  border-color: red;
  border-left-width: 6px;
  background-color: pink;
}

@media (min-width: 992px) {
  dialog {
    min-width: 20%;
    max-width: 40%;
  }
}
</style>