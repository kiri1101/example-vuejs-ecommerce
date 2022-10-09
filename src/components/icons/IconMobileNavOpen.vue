<script setup>
import { useMobileMenuStore } from "../../stores/MobileMenu.js";
let menu = useMobileMenuStore();
</script>

<template>
  <svg
    @click="menu.toggle()"
    xmlns="http://www.w3.org/2000/svg"
    class="w-7 h-7 fill-white scale-110 menu"
    viewBox="0 0 16.933 16.933"
  >
    <path
      d="M12.271 1.323H1.984c-1.1-.042-1.1 1.63 0 1.588H12.23c1.08.042 1.122-1.588.042-1.588zM1.984 7.673c-1.058 0-1.058 1.587 0 1.587h5.8c1.08 0 1.08-1.587 0-1.587zm0 6.35c-1.058 0-1.058 1.587 0 1.587h12.997c1.058 0 1.058-1.587 0-1.587z"
    />
  </svg>
</template>

<style scoped>
.menu {
  display: block;
}

@media (min-width: 768px) {
  .menu {
    display: none;
  }
}
</style>
