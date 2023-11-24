<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <button
    class="rounded-lg bg-clear-primary-green font-quicksand text-desktop w-48 h-10"
  >
    {{ name }}
  </button>
</template>
