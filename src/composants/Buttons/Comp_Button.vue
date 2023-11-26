<script setup>
const props = defineProps({
  showIcon: Boolean,
  name: String,
});

</script>

<template>
  <button class="rounded-lg bg-medium_primary_green font-quicksand text-desktop px-10 h-10 flex justify-center gap-3 items-center hover:bg-hover-green duration-150 ease-out">
    <img src="../../../public/icons/calendar-icon.svg" alt="calendar-icon" class="w-6" v-if="showIcon">
    {{ name }}
  </button>
</template>