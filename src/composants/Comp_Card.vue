<script setup>

const props = defineProps({
  imageSrc: String,
  imageAlt: String,
  name: String,
  description: String,
});

</script>

<template>
  <div
    class="p-5 bg-white drop-shadow-green-shadow rounded-xl overflow-hidden justify-start items-center gap-5 inline-flex"
  >
    <img :src="imageSrc" :alt="imageAlt" class="rounded-lg" />
    <div class="flex-col justify-start items-start inline-flex">
      <div
        class="w-[16.313rem] h-[1.625rem] text-black text-base font-semibold font-raleway"
      >
        {{ name }}
      </div>
      <div
        class="w-[16.313rem] h-[6.188rem] text-black font-normal leading-6 font-quicksand"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>
