<script setup>
const props = defineProps({
  imageSrc: String,
  imageAlt: String,
  name: String,
});
</script>

<template>
  <div class="w-[292px] h-[375px] border-2 border-black rounded-3xl">
    <img
      class="w-[230px] h-[250px] m-auto rounded-10"
      :src="imageSrc"
      :alt="imageAlt"
    />
    <h3
      class="uppercase text-desktop_h3 font-quicksand font-semibold text-center mt-5"
    >
      {{ name }}
    </h3>
  </div>
</template>
