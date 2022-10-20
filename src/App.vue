<script setup>
import { RouterView } from "vue-router";
import TheMobileMenu from "./components/partials/TheMobileMenu.vue";
</script>

<template>
  <RouterView />

  <!-- Mobile Menu -->
  <Transition name="open">
    <TheMobileMenu />
  </Transition>
</template>

<style scoped>
.open-enter-active {
  transition: all 0.8s ease-out;
}

.open-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.open-enter-from,
.open-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
