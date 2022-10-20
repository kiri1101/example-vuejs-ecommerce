<script setup>
import TheNavbar from "../components/partials/TheNavbar.vue";
import IconShoppingCart from "../components/icons/IconShoppingCart.vue";
import IconUserProfile from "../components/icons/IconUserProfile.vue";
import { onMounted, reactive, ref } from "vue";
import TheFooter from "../components/partials/TheFooter.vue";
import TheAdvert from "../components/partials/TheAdvert.vue";
import { useCartStore } from "../stores/cart.js";
// Props
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
// End

// Variables
const data = reactive({
  infos: null,
});

let qty = ref(1);

let cart = useCartStore();
// End

// Fetch Data
onMounted(() => {
  fetch("http://localhost:3000/items/" + props.id)
    .then((response) => response.json())
    .then((item) => (data.infos = item))
    .catch((err) => console.log(err.message));
});
</script>

<template>
  <header>
    <TheNavbar classes="text-black bg-slate-50/90" numclass="text-gray-900">
      <template #shopCart>
        <IconShoppingCart classes="fill-black" />
      </template>

      <template #userProfile>
        <IconUserProfile color="#000000" />
      </template>
    </TheNavbar>
  </header>

  <main class="bg-gray-100">
    <div v-if="data.infos">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 m-4 lg:mx-12 lg:my-16">
        <div class="bg-orange-400">
          <img
            class="main-img"
            :src="data.infos.image.source"
            :alt="data.infos.image.alt"
          />
        </div>
        <div class="p-2">
          <h2 class="font-normal text-md text-gray-600 mb-4">
            Home/{{ data.infos.category }}/{{ data.infos.title }}
          </h2>
          <h3 class="font-normal text-gray-900 mb-4">
            {{ data.infos.category }}
          </h3>
          <h1 class="text-4xl text-black font-normal mb-4">
            {{ data.infos.title }}
          </h1>
          <div v-if="data.infos.sale.state">
            <span class="font-medium text-gray-500 line-through">
              ${{ data.infos.oldAmount }}
            </span>
            <span class="ml-2 font-medium">${{ data.infos.sale.amount }}</span>
          </div>
          <span v-else class="font-medium text-2xl">${{ data.infos.oldAmount }}</span>

          <span class="text-md">+ Free Shipping</span>

          <p class="my-4 leading-loose font-normal">{{ data.infos.summary }}</p>
          <div class="my-4">
            <hr class="border-gray-400" />
          </div>
          <span class="font-medium text-2xl">${{ data.infos.oldAmount }}</span>
          <div class="mt-4">
            <input
              type="number"
              class="w-14 h-10 text-center font-semibold"
              v-model.number="qty"
              min="1"
            />
            <button
              @click="cart.store(data.infos, qty)"
              type="button"
              class="bg-blue-500 max-w-md ml-4 uppercase text-white text-lg font-semibold hover:bg-blue-600 px-20 py-1.5 mb-4"
            >
              Add to Cart
            </button>
          </div>
          <div><hr class="border-gray-400" /></div>
          <div class="text-sm">
            <span>SKU: N/A</span>
            <span class="ml-4">Category: {{ data.infos.category }}</span>
          </div>
        </div>
      </div>
      <!-- <div class="bg-fuchsia-400 h-96 mx-4 mt-12">
        <nav>
          <ul class="flex gap-2 mx-2">
            <li class="border-t-4 border-gray-900">Description</li>
            <li class="border-t-4 border-gray-900">Additional information</li>
            <li class="border-t-4 border-gray-900">Reviews (0)</li>
          </ul>
        </nav>
      </div> -->
    </div>
    <TheAdvert adclass="bg-white" />
  </main>
  <!-- Footer -->
  <TheFooter />
</template>

<style>
nav > ul > li {
  cursor: pointer;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 600;
}

nav > ul > li:hover {
  font-weight: 800;
}

.main-img {
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

h2 {
  font-size: large;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
