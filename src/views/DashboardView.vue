<script setup>
import DashboardNav from "@/components/DashboardNav.vue";
import AppNavbar from "@/components/AppNavbar.vue";
</script>

<template>
  <main class="dashboard">
    <div class="dashboard-container">
      <AppNavbar />
      <h1>Dashboard</h1>
      <p v-for="i in 20" :key="i">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor esse id ipsum natus nisi sapiente suscipit
        veritatis. Illo.</p>
    </div>
    <div class="dashboard-nav">
      <DashboardNav/>
    </div>
  </main>
</template>

<style scoped>

.dashboard-container {
  border: 1px solid green;
}

.dashboard-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-top: 1px solid var(--color-divider-dark-2);
}

@media screen and (min-width: 992px) {
  .dashboard {
    background-color: yellow;
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
    border-right: 1px solid var(--color-divider-dark-2);
  }
}

</style>