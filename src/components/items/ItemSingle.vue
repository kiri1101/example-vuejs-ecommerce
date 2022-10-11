<script setup>
import IconStar from "../icons/IconStar.vue";
import { reactive } from "vue";
import container from "../../stores/container.js";
const data = reactive(container);
</script>

<template>
  <li v-for="item in data.items" :key="item.id">
    <div class="w-52">
      <div v-if="item.sale.state">
        <div
          class="absolute z-10 flex w-12 h-12 p-2 text-white rounded-full -top-5 -right-5 bg-sky-400 place-items-center"
        >
          Sale!
        </div>
      </div>
      <img :src="item.image.source" :alt="item.image.alt" class="static z-0 w-64 mb-3" />
      <span class="mb-2 font-medium">{{ item.title }}</span
      ><br />
      <span class="mb-2 font-medium">{{ item.category }}</span
      ><br />
      <div v-if="item.sale.state">
        <span class="font-medium text-gray-500 line-through">{{ item.oldAmount }}</span>
        <span class="ml-2 font-medium">{{ item.sale.amount }}</span>
      </div>
      <span v-else class="font-medium">{{ item.oldAmount }}</span>
      <!-- Review Stars -->
      <IconStar />
    </div>
  </li>
</template>
