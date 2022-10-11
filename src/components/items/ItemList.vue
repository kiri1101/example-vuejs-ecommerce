<script setup>
import ItemSingle from "./ItemSingle.vue";
</script>

<template>
  <div class="grid justify-center bg-slate-100">
    <h1
      class="p-4 mt-20 text-5xl text-black font-[Loto] font-bold underline underline-offset-[20px] decoration-sky-400"
    >
      Featured Products
    </h1>
    <ul class="grid grid-cols-2 gap-6 my-20 sm:grid-cols-3 lg:grid-cols-5">
      <ItemSingle />
    </ul>
  </div>
</template>
