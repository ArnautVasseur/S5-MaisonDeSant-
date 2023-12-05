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
    class="p-5 bg-secondary-beige drop-shadow-green-shadow rounded-xl overflow-hidden justify-start items-center gap-5 inline-flex"
  >
    <img
      :src="imageSrc"
      :alt="imageAlt"
      class="rounded-lg h-[131px] w-[105px]"
    />
    <div class="flex-col justify-start items-start inline-flex my-5 w-[425px]">
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
