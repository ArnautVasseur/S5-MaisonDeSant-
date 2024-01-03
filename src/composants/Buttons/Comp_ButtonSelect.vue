<script setup>

defineProps({
  option1: String,
  option2: String,
  option3: String,
})

</script>


<template>
  <select
    name="pointure"
    id="pointure-select"
    class="rounded-lg bg-clear-primary-green font-quicksand text-desktop w-80 h-10"
  >
    <option class="text-center">Sélectionner une pointure</option>
    <option value={{option1}} class="text-center">{{option1}}</option>
    <option value={{option2}} class="text-center">{{option2}}</option>
    <option value={{option3}} class="text-center">{{option3}}</option>
  </select>
</template>