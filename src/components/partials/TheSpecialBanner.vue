<script setup>
import IconButton from "../icons/IconButton.vue";
</script>

<template>
  <div class="banner h-96 md:h-[32rem]">
    <div
      class="flex items-center bg-gradient-to-r from-cyan-500/60 to-blue-500/10 h-full text-white"
    >
      <div class="grid w-full md:w-[30rem] mx-10 md:mx-20 gap-6">
        <h5 class="flex justify-center sm:justify-start font-sans font-semibold text-xl">
          Limited Time Offer
        </h5>
        <h1 class="font-sans font-semibold text-3xl md:text-5xl">Special Edition</h1>
        <p class="font-sans leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam quod
          voluptate facere iusto ipsa tempore sunt.
        </p>
        <h2 class="flex justify-center sm:justify-start text-xl font-semibold capitalize">
          Buy This T-Shirt At 20% Discount, Use Code OFF20
        </h2>
        <IconButton
          buttonTitle="Shop Now"
          classes="bg-white text-black hover:bg-black hover:text-white w-full md:w-44"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-image: url("@/assets/img/banner-03.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (min-width: 1024px) {
  .banner {
    background-attachment: fixed;
  }
}
</style>
