<script setup>
import IconButton from "../icons/IconButton.vue";
</script>

<template>
  <div>
    <ul class="grid grid-cols-1 gap-6 mx-4 md:grid-cols-3 md:mx-12">
      <li class="category h-72 md:h-[30rem] grid items-end">
        <div class="grid h-32 mx-4 text-white md:h-48">
          <h1 class="text-2xl font-bold">20% Off on Tank Tops</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, recusandae rem.
          </p>
          <IconButton
            buttonTitle="Shop Now"
            classes="bg-white text-black hover:bg-black hover:text-white w-full md:w-40"
          />
        </div>
      </li>
      <li class="category h-72 md:h-[30rem] grid items-end">
        <div class="grid h-32 mx-4 text-white md:h-48">
          <h1 class="text-2xl font-bold">20% Off on Tank Tops</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, recusandae rem.
          </p>
          <IconButton
            buttonTitle="Shop Now"
            classes="bg-white text-black hover:bg-black hover:text-white w-full md:w-40"
          />
        </div>
      </li>
      <li class="category h-72 md:h-[30rem] grid items-end">
        <div class="grid h-32 mx-4 text-white md:h-48">
          <h1 class="text-2xl font-bold">20% Off on Tank Tops</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, recusandae rem.
          </p>
          <IconButton
            buttonTitle="Shop Now"
            classes="bg-white text-black hover:bg-black hover:text-white w-full md:w-40"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.category {
  background-image: url("@/assets/img/pexels-sauqi-muhammad-5190583.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
