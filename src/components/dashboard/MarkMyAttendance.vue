<script setup>
import AppCard from "@/components/shared/AppCard.vue";
import AppButton from "@/components/utility/AppButton.vue";
import {useAttendanceStore} from "@/stores/attendance.js";

const attendanceStore = useAttendanceStore();

</script>

<template>
  <AppCard>
    <template #header>
      <div class="header">
        <div class="title">Today</div>
        <div class="status">Status</div>
      </div>
    </template>
    <template #default>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi dolorum fuga fugit illum modi possimus provident quae quam? Libero.
    </template>
    <template #footer>
      <AppButton class="action-button" @click="attendanceStore.markMyAttendance">Mark Present</AppButton>
    </template>
  </AppCard>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.status {
  font-size: 1rem;
  background-color: var(--color-accent);
  color: #fff;
  padding: 0.2em 1em;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-button {
  width: 100%;
}
</style>