<script setup>
defineProps({
  buttonTitle: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <button
    type="button"
    class="px-9 py-2 flex-none h-12 uppercase text-md font-medium font-sans"
    :class="classes"
  >
    {{ buttonTitle }}
  </button>
</template>
