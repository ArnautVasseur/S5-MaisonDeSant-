<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Comp_CardButton from "../composants/Comp_CardButton.vue";
import Comp_Map from "../composants/Comp_Map.vue";
import Comp_Footer from "../composants/Comp_Footer.vue";
</script>

<template>
  <Comp_Header />

  <h2
    class="sm:text-desktop_h1 text-desktop_h4 font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
  >
    <span class="text-primary_blue">Notre</span> équipe
    <span class="text-primary_blue">et son emplacement</span> géographique
  </h2>

  <div class="grid grid-cols-2 gap-10">
    <div>
      <h3
        class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
      >
        <span class="text-primary_blue">Notre</span> équipe
      </h3>

      <p class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-10">
        Notre équipe est composée de professionnels à votre écoute, spécialisés
        dans le domaine de la podologie.
      </p>

      <p class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-5">
        Forts de leur expertise et de leur dévouement, ils sont déterminés à
        traiter vos problèmes et améliorer votre bien-être.
        <span class="font-semibold"
          >→ Rendez-vous réalisés sur Doctolib. ←</span
        >
      </p>
    </div>
  </div>

  <div class="sm:flex grid gap-10 ml-10 mr-10 mt-10">
    <Comp_CardButton
      nom="Esther JURY VERMOT DES ROCHES"
      diplomes="- Diplôme de la FIFA en médecine du football - Diplôme d'État de pédicure-podologue - Master en biomécanique humaine"
      imageSrc="/public/images/EstherJURYVERMOTDESROCHES.webp"
      imageAlt="Image de Esther JUTY VERMOT DES ROCHES"
      url="https://www.doctolib.fr/pedicure-podologue/grand-charmont/esther-jury-vermot-des-roches"
    />
    <Comp_CardButton
      nom="Anaëlle SELISE"
      diplomes="- Licence Biologie-santé - Diplôme d'État de pédicure-podologue"
      imageSrc="/public/images/AnaëlleSELISE.webp"
      imageAlt="Image de Anaëlle SELISE"
      url="https://www.doctolib.fr/pedicure-podologue/montbeliard/anaelle-selise"
    />
    <Comp_CardButton
      nom="Valentin EYSSERIC"
      diplomes="- Diplôme d'État de pédicure-podologue"
      imageSrc="/public/images/ValentinEYSSERIC.webp"
      imageAlt="Image de Valentin EYSSERIC"
      url="https://www.doctolib.fr/pedicure-podologue/montbeliard/valentin-eysseric"
    />
  </div>

  <div class="grid sm:grid-cols-2 grid-cols-1 gap-10">
    <div>
      <h3
        class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-dark_primary_green ml-10 mt-20"
      >
        <span class="text-primary_blue">Emplacement</span> géographique
      </h3>

      <p class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-10">
        Maison de Santé CitéVie
      </p>
      <p class="font-quicksand sm:text-desktop text-desktop_small ml-10">
        → 56 Rue Jacques Foillet, 25200 Montbéliard
      </p>

      <div class="ml-10 mt-5 flex">
        <img
          class="w-5"
          src="/public/icons/phone-icon.svg"
          alt="Icone d'un téléphone"
        />
        <p class="font-quicksand sm:text-desktop text-desktop_small ml-2">
          Contact : 03 81 96 26 27
        </p>
      </div>

      <p class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-6">
        Informations pratiques :
      </p>
      <ul
        class="list-disc font-quicksand sm:text-desktop text-desktop_small ml-16"
      >
        <li class="mt-1">2ème étage</li>
        <li class="mt-1">Accès hadicapé</li>
        <li class="mt-1">Parking gratuit</li>
        <li class="mt-1">Arrêt de bus FROMAGERIE</li>
      </ul>
    </div>

    <div class="sm:mt-36 sm:-ml-52 mt-10"><Comp_Map /></div>
  </div>

  <Comp_Footer class="bottom-0 sm:top-[1160px] top-[2060px] absolute w-full" />
</template>

<style></style>
