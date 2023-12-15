<script setup>
const props = defineProps({
  imageSrc: String,
  imageAlt: String,
  title: String,
  text: String,
});
</script>

<template>
  <div class="w-60">
    <div class="w-24 h-24 bg-[#EAF4EB] rounded-full m-auto"></div>
    <img
      :src="imageSrc"
      :alt="imageAlt"
      class="sm:w-14 w-5 absolute -mt-[74px] ml-[92px]"
    />
    <p
      class="text-primary_blue text-desktop_h3 font-quicksand font-semibold text-center mt-7"
    >
      {{ title }}
    </p>
    <p class="font-quicksand mt-2 text-center">{{ text }}</p>
  </div>
</template>
