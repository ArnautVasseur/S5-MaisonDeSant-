<script setup>
const props = defineProps({
  title: String,
  text: String,
});
</script>

<template>
  <div class="w-60">
    <p class="text-primary_blue text-desktop_h4 font-quicksand font-semibold">
      {{ title }}
    </p>
    <p class="font-quicksand mt-2">{{ text }}</p>
  </div>
</template>
