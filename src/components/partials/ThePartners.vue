<script setup>
import { onMounted, reactive } from "vue";
const store = reactive({
  partners: [],
});

onMounted(() => {
  fetch("http://localhost:3000/slides")
    .then((response) => response.json())
    .then((data) => (store.partners = data))
    .catch((err) => console.log(err));
});
</script>

<template>
  <div>
    <ul class="grid grid-cols-2 gap-12 p-20 mx-auto md:grid-cols-4 md:gap-4">
      <li v-for="slide in store.partners" :key="slide.title" class="flex justify-center">
        <img :src="slide.image" :alt="slide.content" />
      </li>
    </ul>
  </div>
</template>
