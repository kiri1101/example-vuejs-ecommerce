<script setup>
import { RouterLink } from "vue-router";
import TheFooter from "../components/partials/TheFooter.vue";
import TheServices from "../components/partials/TheServices.vue";
import TheSpecialBanner from "../components/partials/TheSpecialBanner.vue";
import ItemList from "../components/items/ItemList.vue";
import TheCategory from "../components/partials/TheCategory.vue";
import ThePartners from "../components/partials/ThePartners.vue";
</script>

<template>
  <main>
    <!-- Partners -->
    <ThePartners />
    <!-- End -->
    <!-- Category -->
    <TheCategory />
    <!-- End -->
    <div class="my-[6rem]"></div>
    <!-- Items List -->
    <ItemList />
    <!-- End -->
    <!-- Special Banner -->
    <TheSpecialBanner />
    <!-- End -->
    <!-- Our Services -->
    <TheServices />
    <!-- End -->
    <div class="border-y-2 border-gray-300">
      <RouterLink to="/">
        <h1
          class="uppercase text-gray-800 font-semibold p-6 hover:text-sky-300 hover:underline text-2xl mx-16"
        >
          Sale up to 70% off for all clothes & fashion items, on all brands.
        </h1>
      </RouterLink>
    </div>
  </main>
  <!-- Footer -->
  <TheFooter />
  <!-- End -->
</template>
