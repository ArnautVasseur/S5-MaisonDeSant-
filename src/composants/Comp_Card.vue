<template>
  <div class="w-[450px]">
    <button class="border-4 border-[#86CDB0] rounded ml-24 mt-24">
      <img class="w-24" :src="imageSrc" :alt="imageAlt" />
    </button>
    <div class="ml-24 mt-5">
      <h3 class="uppercase text-desktop_h3 my-5 font-quicksand font-semibold">{{ name }}</h3>
      <p class="font-quicksand">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    imageSrc: String,
    imageAlt: String,
  },
};
</script>
