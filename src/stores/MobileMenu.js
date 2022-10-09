import { defineStore } from "pinia";
import { ref } from "vue";

export const useMobileMenuStore = defineStore("mobile", () => {
  const show = ref(false);
  function toggle() {
    show.value = !show.value;
  }

  return { show, toggle };
});
