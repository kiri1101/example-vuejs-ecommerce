<script setup>
import { onMounted, reactive } from "vue";
const store = reactive({
  services: [],
});

onMounted(() => {
  fetch("http://localhost:3000/services")
    .then((response) => response.json())
    .then((data) => (store.services = data))
    .catch((err) => console.log(err));
});
</script>

<template>
  <div>
    <ul class="grid grid-cols-2 gap-8 mx-12 my-20 md:grid-cols-4">
      <li
        v-for="service in store.services"
        :key="service.id"
        class="grid gap-4 place-items-center"
      >
        <span><img :src="service.image" class="w-12" :alt="service.alt" /></span>
        <h3>{{ service.title }}</h3>
        <p class="text-center">{{ service.content }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  font-weight: 600;
  font-size: 1.2rem;
  color: black;
}
</style>
