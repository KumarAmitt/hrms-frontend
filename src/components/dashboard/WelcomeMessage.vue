<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import {useAuthStore} from "@/stores/auth.js";


const authStore = useAuthStore();
const currentDateTime = ref('');
const user = ref(null);

const updateCurrentDateTime = () => {
  const now = new Date();
  currentDateTime.value = now.toLocaleString('en-IN');
}

onMounted(async () => {
  updateCurrentDateTime();
  setInterval(updateCurrentDateTime, 1000);
  user.value = await authStore.currentUser()
})

onBeforeUnmount(() => clearInterval(updateCurrentDateTime))

</script>

<template>
  <div class="welcome-wrapper">
    <div class="welcome">
      <div class="welcome__main">Welcome, {{ user?.name || user?.email }}!</div>
      <div class="welcome__sub">Lorem ipsum dolor sit amet.</div>
    </div>
    <div class="current-time">
      <div class="current-time__info">
        <div class="current-time__info-label">Current Time</div>
        <div class="current-time__info-data">{{currentDateTime}}</div>
      </div>
      <div class="current-time__icon">
        <font-awesome-icon :icon="['fas', 'clock-rotate-left']" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-wrapper {
  //border: 1px solid red;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.welcome {
  margin-bottom: 1em;
  color: var(--color-heading)
}

.welcome__main {
  font-size: 1.4rem;
  font-weight: 600;
}

.current-time {
  background-color: var(--color-background);
  padding: 0.5em 1em;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.current-time__info-label {
  color: var(--color-text);
}

.current-time__info-data {
  color: var(--color-heading);
  font-size: 1.2rem;
  font-weight: 600;
}

.current-time__icon {
  font-size: 1.6rem;
  color: var(--color-text);
}

@media (min-width: 768px) {
  .welcome-wrapper {
      flex-direction: row;
  }

  .current-time__icon {
    margin-left: 1em;
  }
}
</style>