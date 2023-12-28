<script setup>
const props = defineProps({
  imageSrc: String,
  imageAlt: String,
  name: String,
  description: String,
});
</script>

<template>
  <div class="w-[450px]">
    <button class="border-4 border-[#86CDB0] rounded ml-24 mt-24">
      <img class="w-24" :src="imageSrc" :alt="imageAlt" />
    </button>
    <h3
      class="uppercase text-desktop_h3 font-quicksand font-semibold ml-24 mt-5"
    >
      {{ name }}
    </h3>
    <p class="font-quicksand ml-24 mt-5">
      {{ description }}
    </p>
  </div>
</template>
