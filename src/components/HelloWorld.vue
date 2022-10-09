<script setup>
import IconButton from "./icons/IconButton.vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 mx-12 bottom-10">
    <div class="grid grid-rows-3">
      <h1
        class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-tight font-[Lato] font-semibold"
      >
        {{ title }}
      </h1>
      <h3 class="text-white text-2xl leading-tight mt-5 font-[Lato]">
        {{ msg }}
      </h3>
      <div class="flex flex-col sm:flex-row gap-4">
        <IconButton
          buttonTitle="Shop Now"
          classes="text-black bg-white hover:text-white hover:bg-black"
        />

        <IconButton
          buttonTitle="Find More"
          classes="text-white bg-transparent border border-white hover:text-black hover:bg-white"
        />
      </div>
    </div>
  </div>
</template>
