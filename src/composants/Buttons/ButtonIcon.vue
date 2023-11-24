<script setup>
import CalendarIcon from "../icons/CalendarIcon.vue";

const props = defineProps({
  name: String,
});
</script>

<template>
  <button
    class="rounded-lg bg-medium_primary_green font-quicksand text-desktop w-72 h-10 flex justify-center gap-3 items-center"
  >
    <CalendarIcon />
    {{ name }}
  </button>
</template>
