<script setup>
import Logo from "../composants/Comp_Logo.vue";
</script>

<template>
  <div class="flex bg-secondary-beige h-16 items-center">
    <Logo class="ml-10" />
    <nav>
      <ul class="flex font-quicksand gap-14 ml-80">
        <li
          class="flex items-center gap-2 hover:underline hover:decoration-dark_primary_green hover:underline-offset-4"
        >
          <a href=""></a>
          <img
            class="w-5"
            src="/public/icons/footprint-icon.svg"
            alt="Icone d'un pied"
          />
          Semelles orthopédiques
        </li>
        <li
          class="flex items-center gap-2 hover:underline hover:decoration-dark_primary_green hover:underline-offset-4"
        >
          <a href=""></a>
          <img
            class="w-5"
            src="/public/icons/Medical-icon.svg"
            alt="Icone d'un stéthoscope"
          />
          Traitements
        </li>
        <li
          class="flex items-center gap-2 hover:underline hover:decoration-dark_primary_green hover:underline-offset-4"
        >
          <a href=""></a>
          <img
            class="w-5"
            src="/public/icons/map-icon.svg"
            alt="Icone d'un pointeur"
          />
          Nous connaitre
        </li>
        <li
          class="font-semibold flex items-center gap-2 hover:underline hover:decoration-dark_primary_green hover:underline-offset-4"
        >
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
  </div>
</template>
