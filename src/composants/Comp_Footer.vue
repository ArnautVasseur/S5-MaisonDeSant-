<script setup>
import Logo from "../composants/Comp_Logo.vue";
</script>

<template>
  <div class="grid bg-secondary-beige h-80 items-center">
    <div class="flex justify-center">
      <img
        class="h-20"
        src="/public/images/IV_logo_.JPG"
        alt="Logo pédicure-podologue"
      />
      <Logo class="ml-10" />
    </div>
    <nav>
      <ul class="flex justify-center font-quicksand gap-14">
        <li class="flex items-center gap-2">
          <a href=""></a>
          <img
            class="w-5"
            src="/public/icons/map-icon.svg"
            alt="Icone d'un pointeur"
          />
          Nous connaitre
        </li>
        <li class="font-semibold flex items-center gap-2">
          <a href=""></a>
          <img
            class="w-5"
            src="/public/icons/icon-devis.svg"
            alt="Icone d'un document"
          />
          Faire mon devis
        </li>
      </ul>
    </nav>
    <div class="m-auto w-4/5 h-0.5 bg-medium_primary_green"></div>
    <nav>
      <ul class="flex font-quicksand gap-14 justify-center mb-10">
        <li class="flex items-center gap-2">
          <a href=""></a>
          <img class="w-5" src="/public/icons/info-icon.svg" alt="Icone info" />
          Charte de confidentialité et d'utilisation
        </li>
        <li class="flex items-center gap-2">
          <a href=""></a>
          <img
            class="w-5"
            src="/public/icons/admin-icon.svg"
            alt="Icone du buste d'un bonhomme"
          />
          Gestion administrateur
        </li>
        <li class="flex items-center gap-2">
          <a href=""></a>
          <img
            class="w-5"
            src="/public/icons/accessibility-icon.svg"
            alt="Icone d'un bonhomme"
          />
          Accessibilité
        </li>
        <li class="flex items-center gap-2">
          <a href=""></a>
          <img
            class="w-5"
            src="/public/icons/translate-icon.svg"
            alt="Icone d'un pictogramme pour la traduction"
          />
          Langues
        </li>
      </ul>
    </nav>
  </div>
</template>
