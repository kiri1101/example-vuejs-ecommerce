<script setup>
import { ref } from "vue";
import { useCartStore } from "../../stores/cart.js";
import TheEmptyCart from "./TheEmptyCart.vue";

const cart = useCartStore();
let list = ref(cart.cartStore.list);
</script>

<template>
  <div v-if="list.length < 1">
    <div
      class="absolute right-5 sm:right-10 md:right-20 z-10 px-14 sm:px-20 py-4 max-w-sm h-32 grid place-items-center bg-white rounded-md shadow"
    >
      <TheEmptyCart />
    </div>
  </div>
  <div v-else>
    <div
      class="absolute right-5 sm:right-10 md:right-20 z-10 py-4 max-w-sm h-96 cart bg-white rounded-md shadow"
    >
      <h2 class="text-gray-800 text-sm border-b border-gray-300">
        <span class="mx-2">Product available in cart</span>
      </h2>
      <ul class="overflow-y-auto">
        <li v-for="item in list" :key="item.id">
          <div class="flex gap-4 mx-2 mt-2 justify-between">
            <img class="w-16" :src="item.image" :alt="item.alt" />
            <div>
              <span class="text-gray-800 text-sm">{{ item.title }}</span>
              <div class="text-sm">
                <span>{{ item.qty }} x </span>
                <span>{{ item.amount }}USD</span>
              </div>
            </div>
            <span class="cursor-pointer hover:scale-105 mx-2">&times;</span>
          </div>
        </li>
      </ul>
      <div>
        <div class="flex justify-between border-y px-4 py-2 border-gray-300">
          <span class="text-gray-800">Subtotal</span>
          <span class="font-bold text-gray-900">{{ cart.cartStore.sum }}USD</span>
        </div>
        <div class="flex justify-center">
          <button
            type="button"
            class="bg-red-200 hover:bg-red-500 text-gray-900 hover:text-white px-4 py-1.5 rounded my-1"
          >
            view cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  display: grid;
  grid-template-rows: 10% auto 20%;
  /* place-items: center; */
}
</style>
