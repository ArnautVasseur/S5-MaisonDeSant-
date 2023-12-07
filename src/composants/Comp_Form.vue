<script setup>
import Button from "./Buttons/Comp_Button.vue";
import ButtonSelect from "./Buttons/Comp_ButtonSelect.vue";
</script>

<template>
  <form class="w-full max-w-lg mt-8 font-quicksand text-desktop font-medium">
    <div class="mb-4">
      <input
        type="text"
        id="name"
        class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green"
        placeholder="Nom de famille *"
      />
    </div>
    <div class="mb-4">
      <input
        type="text"
        id="name"
        class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green"
        placeholder="Prénom *"
      />
    </div>
    <div class="mb-4">
      <input
        type="email"
        id="email"
        class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green"
        placeholder="E-mail *"
      />
    </div>
    <div class="mb-4">
      <input
        type="text"
        id="ssn"
        class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green"
        placeholder="N° de sécurité sociale *"
      />
    </div>
  </form>

  <ButtonSelect class="ml-24" />
  <Button name="Demander un devis" class="ml-36 mt-5" />
</template>
