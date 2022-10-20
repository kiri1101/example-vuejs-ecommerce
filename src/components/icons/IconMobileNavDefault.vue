<script setup>
import { useMobileMenuStore } from "../../stores/MobileMenu.js";
let menu = useMobileMenuStore();
</script>

<template>
  <svg
    @click="menu.toggle()"
    xmlns="http://www.w3.org/2000/svg"
    class="w-7 h-7 ml-2 fill-black menu cursor-pointer hover:scale-110 hover:shadow"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
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
