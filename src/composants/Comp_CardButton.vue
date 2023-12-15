<script setup>
const props = defineProps({
  imageSrc: String,
  imageAlt: String,
  nom: String,
  diplomes: String,
  url: String,
});
</script>

<template>
  <div
    class="grid bg-secondary-beige drop-shadow-green-shadow rounded-xl w-[26.688rem] h-72"
  >
    <div class="p-5 justify-start items-center gap-5 inline-flex">
      <img :src="imageSrc" :alt="imageAlt" class="rounded-lg" />
      <div class="flex-col justify-start items-start inline-flex">
        <div
          class="w-[16.313rem] h-[1.625rem] text-black text-base font-semibold font-raleway"
        >
          {{ nom }}
        </div>
        <div
          class="w-[16.313rem] h-[6.188rem] text-black font-normal leading-6 font-quicksand mt-5"
        >
          {{ diplomes }}
        </div>
      </div>
    </div>
    <a :href="url">
      <button
        class="m-auto rounded-3xl bg-dark_primary_green font-quicksand text-white text-desktop px-10 h-10 flex justify-center gap-3 items-center hover:bg-hover-green duration-150 ease-out"
      >
        <img
          src="../../public/icons/calendar-icon-white.svg"
          alt="calendar-icon"
          class="w-6"
        />
        Prendre rendez-vous
      </button></a
    >
  </div>
</template>
