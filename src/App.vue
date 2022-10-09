<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import IconUserProfile from "./components/icons/IconUserProfile.vue";
import IconShoppingCart from "./components/icons/IconShoppingCart.vue";
import IconMobileNavOpen from "./components/icons/IconMobileNavOpen.vue";
import { useMobileMenuStore } from "./stores/MobileMenu.js";
import IconMobileNavDefault from "./components/icons/IconMobileNavDefault.vue";
let menu = useMobileMenuStore();
</script>

<template>
  <header class="relative overflow-hidden cover">
    <div class="px-10 py-5 text-white uppercase text-md bg-sky-800/60 nav">
      <div class="left-inner-nav">
        <div class="flex items-start">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="75"
            height="75"
          />
        </div>

        <div class="hidden md:block">
          <nav class="grid justify-between grid-cols-4 place-items-center">
            <RouterLink to="/" class="font-sans font-bold">Everything</RouterLink>
            <RouterLink to="/" class="font-sans font-bold">Women</RouterLink>
            <RouterLink to="/" class="font-sans font-bold">Children</RouterLink>
            <RouterLink to="/" class="font-sans font-bold">Accessories</RouterLink>
          </nav>
        </div>
      </div>
      <div class="right-inner-nav">
        <div class="hidden md:block">
          <nav class="grid grid-cols-2">
            <RouterLink to="/" class="font-sans font-bold">About</RouterLink>
            <RouterLink to="/" class="font-sans font-bold">Contact</RouterLink>
          </nav>
        </div>
        <div class="flex cursor-pointer place-items-center">
          <span class="font-bold text-md sm:text-lg">$0.00</span>
          <IconShoppingCart />
          <div
            class="rounded-full w-[18px] h-5 bottom-2 flex place-items-center bg-gray-400"
          >
            <span class="text-lg font-bold text-white left-1">0</span>
          </div>
        </div>
        <IconUserProfile />

        <Transition name="close">
          <div v-if="!menu.show">
            <IconMobileNavDefault />
          </div>
        </Transition>
      </div>
    </div>

    <div class="items-center h-screen header-content bg-sky-800/40">
      <HelloWorld title="Raining Offers For Hot Summer!" msg="25% Off On All Products" />
    </div>
  </header>

  <RouterView />

  <!-- Mobile Menu -->
  <Transition name="open">
    <div
      v-if="menu.show"
      :class="{
        'top-0 right-0 bottom-0 left-0 flex overflow-hidden bg-gray-800/90': true,
        'invisible absolute': menu.show === false,
        'visible absolute': menu.show === true,
      }"
    >
      <div class="flex flex-col gap-10 w-full">
        <button class="p-2 ml-2 mt-1 w-12 bg-gray-600 hover:bg-gray-500 h-12 rounded-md">
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
  </Transition>
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

.close-enter-active {
  transition: all 0.8s ease-out;
}

.close-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.close-enter-from,
.close-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

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

.cover {
  background-image: url("@/assets/img/home-new-bg-free-img.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.nav {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 1rem;
}

.left-inner-nav {
  display: grid;
}

.right-inner-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

@media (min-width: 768px) {
  .nav {
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 1rem;
  }

  .left-inner-nav {
    align-items: center;
    justify-content: flex-start;
    grid-template-columns: 20% auto;
  }

  .right-inner-nav {
    justify-content: space-evenly;
  }
}

.header-content {
  display: grid;
  /* grid-template-columns: 50% 50%; */
}

header {
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
