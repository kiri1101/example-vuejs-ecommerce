<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import IconUserProfile from "./components/icons/IconUserProfile.vue";
import IconShoppingCart from "./components/icons/IconShoppingCart.vue";
import { useMobileMenuStore } from "./stores/MobileMenu.js";
import IconMobileNavDefault from "./components/icons/IconMobileNavDefault.vue";
import TheMobileMenu from "./components/partials/TheMobileMenu.vue";
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
          <!-- Cart -->
          <IconShoppingCart />
          <!-- End -->
          <div
            class="rounded-full w-[18px] h-5 bottom-2 flex place-items-center bg-gray-400"
          >
            <span class="text-lg font-bold text-white left-1">0</span>
          </div>
        </div>
        <!-- Profile Icon -->
        <IconUserProfile />
        <!-- End -->

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
    <TheMobileMenu />
  </Transition>
</template>

<style scoped>
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
