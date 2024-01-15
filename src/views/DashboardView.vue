<script setup>
import DashboardNav from "@/components/DashboardNav.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import WelcomeMessage from "@/components/dashboard/WelcomeMessage.vue";
import MarkMyAttendance from "@/components/dashboard/MarkMyAttendance.vue";
</script>

<template>
  <main class="dashboard">
    <div class="dashboard-container">
      <AppNavbar />
      <div class="dashboard-body">
        <WelcomeMessage />
        <MarkMyAttendance />
      </div>
    </div>
    <div class="dashboard-nav">
      <DashboardNav/>
    </div>
  </main>
</template>

<style scoped>

.dashboard-container {
  background-color: var(--color-background-soft);
}

.dashboard-body {
  padding: 1em;
}

.dashboard-body > * + * {
  margin-top: 1em;
}

.dashboard-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background: var(--color-background);
  border-top: 1px solid var(--color-divider-dark-2);
}

@media screen and (min-width: 992px) {
  .dashboard {
    //background-color: yellow;
  }
  .dashboard-container {
    margin-left: 92px;
  }
  .dashboard-nav {
    flex-direction: column;
    width: 92px;
    top: 0;
    justify-content: flex-start;
    border-top: none;
    border-right: 1px solid var(--color-border-hover);
  }
}

</style>