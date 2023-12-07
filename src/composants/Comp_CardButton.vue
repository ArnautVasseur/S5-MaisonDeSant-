<script setup>
import Button from "./Buttons/Comp_Button.vue";

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
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="rounded-lg h-[115px] w-[105px]"
      />
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
    <a :href="url"
      ><Button class="m-auto mb-5" name="Prendre rendez-vous" show-icon="true"
    /></a>
  </div>
</template>
