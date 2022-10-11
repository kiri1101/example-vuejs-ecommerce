<script setup>
import { reactive } from "vue";
import container from "../../stores/container.js";
const data = reactive(container);
</script>

<template>
  <div>
    <ul class="grid grid-cols-2 gap-12 p-20 mx-auto md:grid-cols-4 md:gap-4">
      <li v-for="slide in data.slides" :key="slide.title" class="flex justify-center">
        <img :src="slide.image" :alt="slide.content" />
      </li>
    </ul>
  </div>
</template>
