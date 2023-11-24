<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <button
    class="rounded-lg bg-medium_primary_green font-quicksand text-desktop w-48 h-10"
  >
    {{ name }}
  </button>
</template>
