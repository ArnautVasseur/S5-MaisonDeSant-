<script setup>
import Logo from "../composants/Comp_Logo.vue";
import Comp_Circle from "../composants/Comp_Circle.vue";
</script>

<template>
  <div class="grid bg-secondary-beige h-80 items-center overflow-hidden">
    <Comp_Circle
      v-if="isLargeScreen"
      class="absolute -top-[50px] -left-[50px]"
      :size="180"
      color="#BAE9D5"
    />
    <Comp_Circle
      v-if="isLargeScreen"
      class="absolute -bottom-7 -right-7"
      :size="142.73"
      color="#BAE9D5"
    />
    <div class="flex justify-center">
      <img
        class="h-20"
        src="/images/IV_logo.png"
        alt="Logo pédicure-podologue"
      />
      <Logo class="ml-10" />
    </div>
    <nav>
      <ul class="flex justify-center font-quicksand gap-14">
        <Router-Link to="/nous-connaitre">
          <li class="flex items-center gap-2">
            <a href=""></a>
            <img
              class="w-5"
              src="/icons/map-icon.svg"
              alt="Icone d'un pointeur"
            />
            Nous connaitre
          </li></Router-Link
        >
        <Router-Link to="/faire-devis">
          <li class="font-semibold flex items-center gap-2">
            <a href=""></a>
            <img
              class="w-5"
              src="/icons/icon-devis.svg"
              alt="Icone d'un document"
            />
            Faire mon devis
          </li></Router-Link
        >
      </ul>
    </nav>
    <div class="m-auto w-4/5 h-0.5 bg-medium_primary_green"></div>
    <nav>
      <ul class="flex font-quicksand gap-14 justify-center mb-10">
        <Router-Link to="/charte-confidentialite">
          <li class="flex items-center gap-2">
            <img class="w-5" src="/icons/info-icon.svg" alt="Icone info" />
            Charte de confidentialité et d'utilisation
          </li>
        </Router-Link>
        <RouterLink to="/authentification"><li class="flex items-center gap-2">
          <img
            class="w-5"
            src="/icons/admin-icon.svg"
            alt="Icone du buste d'un bonhomme"
          />
          Gestion administrateur
        </li></RouterLink>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isLargeScreen() {
      // You can customize this logic based on your breakpoints
      return window.innerWidth >= 1024; // Adjust the breakpoint as needed
    },
  },
};
</script>
