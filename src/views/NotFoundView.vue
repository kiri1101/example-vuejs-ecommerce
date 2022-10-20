<script setup>
import Icon404SVG from "../components/icons/Icon404SVG.vue";
</script>

<template>
  <header>
    <div><Icon404SVG /></div>
  </header>
</template>

<style scoped>
header {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: aqua;
}

header > div {
  max-height: 720px;
  max-width: 720px;
  border-radius: 0.2rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: rgb(253 230 138);
  font-size: 4rem;
  display: grid;
  place-items: center;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 750ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

div:hover {
  transform: scale(1.1);
  background-color: rgb(245 208 254);
}
</style>
