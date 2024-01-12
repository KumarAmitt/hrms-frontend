<script setup>
import {useRoute, useRouter} from 'vue-router'
import AppNavbar from "@/components/AppNavbar.vue";
import AppButton from "@/components/utility/AppButton.vue";

const router = useRouter();
const route = useRoute();

const goToLoginPage = () => {
  router.push({name: 'login'})
}

</script>

<template>
  <AppNavbar />
  <main>
    <section class="section__static">
      <h1 class="intro-text">
        All-in-One Software for streamlining internal business functions like
        <span>Onboarding,</span>
        <span>Leave Management,</span>
        <span>Attendance Management,</span> and
        <span>Projects Tracking.</span>
      </h1>
    </section>
    <section class="section__dynamic">
      <div class="start-btn" v-if="route.name === 'home'">
        <AppButton @click="goToLoginPage">Get Started</AppButton>
      </div>
      <router-view  />
    </section>
  </main>
</template>

<style scoped>

main {
  //border: 1px solid blue;
}

.section__static {
  //border: 1px solid red;
}

.section__dynamic {
  //border: 1px solid green;
}

.intro-text {
  //border: 1px solid red;
  font-size: 2rem;
  text-align: center;
  margin-top: 5em;
  padding: 1em;
}

.intro-text span {
  display: block;
  color: var(--color-accent);
}

.start-btn {
  position: fixed;
  bottom: 100px;
  width: 100%;
  text-align: center;
}

/*
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 3em);
}

.intro-text {
  font-size: 1.8rem;
  margin-top: 4em;
  border: 1px solid var(--color-divider-dark-2);
  padding: 1em;
  border-radius: 1em;
}

.app-intro span {
  font-size: 2.2rem;
  color: var(--color-accent);
}

.start-btn {
  font-size: 1.2rem;
  background-color: var(--color-accent);
  color: var(--color-text-dark-1);
  padding: 0.5em 1em;
  border-radius: 28px;
  border: none;
  transition: transform 0.7s ease-in-out;
  margin-bottom: 3em;
  width: 50%;
}
*/
</style>




