<script setup>
import {useDark, useToggle} from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})

const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="switch-container">
    <div class="switch">
      <input type="checkbox" class="sun" id="toggle-btn" @change="toggleDark()" />
      <span class="moon"></span>
    </div>
    <label class="label" for="toggle-btn">{{ isDark ? 'Light' : 'Dark' }}</label>
  </div>
</template>


<style scoped>

.switch-container {
  display: flex;
  align-items: center;
}

.label {
  margin-left: 0.3em;
  color: var(--color-text);
  cursor: pointer;
}
.switch {
  height: 2rem;
  width: 2rem;
  background-color: transparent;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  position: relative;
  border: none;
  border-radius: 100%;
  filter: none;
  transition: all 0.25s ease;
}

input {
  z-index: 1;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  border: 0;
  border-radius: 100%;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: var(--color-accent);
  transition: all 0.25s ease;
}

.moon {
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translate(-50%, -50%);
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: var(--color-background);
  transition: all 0.25s ease;
  pointer-events: none;
}

input:checked ~ .moon {
  height: 2rem;
  width: 0;
  border-style: solid;
  border-width: 0;
  border-radius: 100%;
  top: 50%;
  left: 150%;
  background-color: rgb(0, 0, 0);
  transform: translate(-50%, -50%);
}

</style>

