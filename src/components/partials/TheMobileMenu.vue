<script setup>
import { RouterLink } from "vue-router";
import IconMobileNavOpen from "../icons/IconMobileNavOpen.vue";
import { useMobileMenuStore } from "../../stores/MobileMenu.js";
let menu = useMobileMenuStore();
</script>

<template>
  <div
    v-if="menu.show"
    :class="{
      'top-0 right-0 bottom-0 left-0 flex overflow-hidden bg-gray-800/90': true,
      'invisible absolute': menu.show === false,
      'visible absolute': menu.show === true,
    }"
  >
    <div class="flex flex-col gap-10 w-full">
      <button
        type="button"
        class="p-2 ml-2 mt-1 w-12 bg-gray-600 hover:bg-gray-500 h-12 rounded-md"
      >
        <IconMobileNavOpen />
      </button>
      <ul class="bg-white text-white">
        <li class="text-2xl sm:text-3xl">
          <RouterLink to="/">Everything</RouterLink>
        </li>
        <li class="text-lg">
          <RouterLink to="/">Women</RouterLink>
        </li>
        <li class="text-lg">
          <RouterLink to="/">Children</RouterLink>
        </li>
        <li class="text-lg">
          <RouterLink to="/">Accessories</RouterLink>
        </li>
        <li class="text-lg">
          <RouterLink to="/">About</RouterLink>
        </li>
        <li class="text-lg">
          <RouterLink to="/">Contact</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  display: grid;
}

li {
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-bottom-width: 2px;
  border-color: black;
  background-color: rgb(7 89 133);
  cursor: pointer;
  width: 100vw;
  font-size: 1.5rem;
  line-height: 2rem;
}

li:hover {
  background-color: rgb(2 132 199);
}

@media (min-width: 640px) {
  li {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}
</style>
