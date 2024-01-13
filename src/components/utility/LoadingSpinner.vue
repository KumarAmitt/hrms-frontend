<script setup>

</script>

<template>
  <div class="loader-wrapper">
    <div class="loader spinner"></div>
  </div>
</template>

<style scoped>

.loader-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}

.loader {
  width: 60px;
  aspect-ratio: 1;
  display: grid;
  grid: 50%/50%;
  color: var(--color-accent);
  --_g: no-repeat linear-gradient(currentColor 0 0);
  background: var(--_g),var(--_g),var(--_g);
  background-size: 50.1% 50.1%;
  animation:
      l6-0   1.5s infinite steps(1) alternate,
      l6-0-0 3s   infinite steps(1);
}
.loader::before {
  content: "";
  background: currentColor;
  transform: perspective(150px) rotateY(0deg) rotateX(0deg);
  transform-origin: bottom right;
  animation: l6-1 1.5s infinite linear alternate;
}
@keyframes l6-0 {
  0%  {background-position: 0    100%,100% 100%,100% 0}
  33% {background-position: 100% 100%,100% 100%,100% 0}
  66% {background-position: 100% 0   ,100% 0   ,100% 0}
}
@keyframes l6-0-0 {
  0%  {transform: scaleX(1)  rotate(0deg)}
  50% {transform: scaleX(-1) rotate(-90deg)}
}
@keyframes l6-1 {
  16.5%{transform:perspective(150px) rotateX(-90deg)  rotateY(0deg)    rotateX(0deg);filter:grayscale(0.8)}
  33%  {transform:perspective(150px) rotateX(-180deg) rotateY(0deg)    rotateX(0deg)}
  66%  {transform:perspective(150px) rotateX(-180deg) rotateY(-180deg) rotateX(0deg)}
  100% {transform:perspective(150px) rotateX(-180deg) rotateY(-180deg) rotateX(-180deg);filter:grayscale(0.8)}
}
</style>