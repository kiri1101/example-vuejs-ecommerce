<script setup>
import { RouterLink } from "vue-router";
defineProps({
  adclass: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="border-gray-300 border-y-2" :class="adclass">
    <RouterLink to="/">
      <h1
        class="p-6 mx-16 text-2xl font-semibold text-gray-800 uppercase hover:text-sky-300 hover:underline"
      >
        Sale up to 70% off for all clothes & fashion items, on all brands.
      </h1>
    </RouterLink>
  </div>
</template>
