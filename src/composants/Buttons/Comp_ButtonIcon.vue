<script setup>

const props = defineProps({
  name: String,
});

</script>

<template>
  <button
    class="rounded-lg bg-medium_primary_green font-quicksand text-desktop w-72 h-10 flex justify-center gap-3 items-center"
  >
    <img src="icons/calendar-icon" alt="calendar_icon">
    {{ name }}
  </button>
</template>
