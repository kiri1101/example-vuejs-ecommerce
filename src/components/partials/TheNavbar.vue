<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useMobileMenuStore } from "../../stores/MobileMenu.js";
import IconMobileNavDefault from "../icons/IconMobileNavDefault.vue";
import { useCartStore } from "../../stores/cart.js";
import TheCart from "./TheCart.vue";

//variable
const cart = useCartStore();
let list = ref(cart.cartStore.list);
let menu = useMobileMenuStore();

defineProps({
  classes: {
    type: String,
    required: true,
  },
  numclass: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="px-10 py-5 uppercase text-md nav" :class="classes">
    <div class="left-inner-nav">
      <div class="flex items-start">
        <RouterLink :to="{ name: 'home' }">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="75"
            height="75"
          />
        </RouterLink>
      </div>

      <div class="hidden md:block">
        <nav class="grid justify-between grid-cols-4 place-items-center">
          <RouterLink :to="{ name: 'home' }" class="font-sans font-bold"
            >Everything</RouterLink
          >
          <RouterLink :to="{ name: 'home' }" class="font-sans font-bold"
            >Women</RouterLink
          >
          <RouterLink :to="{ name: 'home' }" class="font-sans font-bold"
            >Children</RouterLink
          >
          <RouterLink :to="{ name: 'home' }" class="font-sans font-bold"
            >Accessories</RouterLink
          >
        </nav>
      </div>
    </div>
    <div class="right-inner-nav">
      <div class="hidden md:block">
        <nav class="grid grid-cols-2">
          <RouterLink :to="{ name: 'home' }" class="font-sans font-bold"
            >About</RouterLink
          >
          <RouterLink :to="{ name: 'home' }" class="font-sans font-bold"
            >Contact</RouterLink
          >
        </nav>
      </div>
      <div @click="cart.toggle()" class="flex cursor-pointer place-items-center">
        <span class="font-bold text-md sm:text-lg">${{ cart.cartStore.sum }}</span>
        <!-- Cart -->
        <slot name="shopCart" />
        <!-- End -->
        <div
          class="rounded-full w-[18px] h-5 bottom-2 flex place-items-center bg-lime-500"
        >
          <span class="text-lg font-bold left-1" :class="numclass">{{
            list.length
          }}</span>
        </div>
      </div>
      <!-- Profile Icon -->
      <slot name="userProfile" />
      <!-- End -->
      <!-- Mobile Menu Icon -->
      <Transition name="close">
        <div v-if="!menu.show">
          <IconMobileNavDefault />
        </div>
      </Transition>
    </div>
  </div>
  <!-- Cart -->
  <div v-if="cart.cartStore.show">
    <TheCart />
  </div>
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

.nav {
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100vw;
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
</style>
