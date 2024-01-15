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
        <AppButton @click="goToLoginPage" type="arrow-button">Get Started</AppButton>
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
  //border: 2px solid blue;
  position: relative;
  padding-bottom: 100px;
  align-self: center;
  //background-color: var(--color-background);
}

.section__static::before {
  content: '';
  height: 100px;
  background-color: var(--color-background);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: skewY(-3deg);
}


.intro-text {
  //border: 1px solid red;
  font-size: 2rem;
  text-align: center;
  margin-top: 5em;
  padding: 1em;
  color: var(--color-heading);
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

@media (min-width: 768px) {
  main {
    //margin: auto 4em;
  }
}

@media (min-width: 992px) {
  main {
    //background-color: yellow;
    display: flex;
    align-items: center;
    margin: 0;
    height: calc(100vh - 3.1em);
  }

  section {
    flex: 1;
    //border: 1px solid red;
  }

  .intro-text {
    margin-top: 0;
  }

  .start-btn {
    position: initial;
  }

}
</style>




