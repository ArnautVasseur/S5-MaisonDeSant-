<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Comp_CardButton from "../composants/Comp_CardButton.vue";
import Comp_Map from "../composants/Comp_Map.vue";
import Comp_Footer from "../composants/Comp_Footer.vue";

var isScrollEnabled = true;
function toggleScrolling() {
  if (isScrollEnabled) {
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  } else {
    window.onscroll = null;
  }
}
toggleScrolling();
</script>

<template>
  <Comp_Header />

  <h2
    class="sm:text-desktop_h1 text-desktop_h4 font-raleway font-semibold text-dark_primary_green ml-10 mt-10 text-center"
  >
    <span class="text-black">Notre</span> équipe <br />
    <span class="text-black">et son emplacement</span> géographique
  </h2>

  <h3
    class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-dark_primary_green mt-10 text-center"
  >
    <span class="text-black">Notre</span> équipe
  </h3>

  <p
    class="font-quicksand sm:text-desktop text-desktop_small text-center mt-10"
  >
    Notre équipe est composée de professionnels à votre écoute, spécialisés dans
    <br />
    le domaine de la podologie.
  </p>

  <p class="font-quicksand sm:text-desktop text-desktop_small text-center mt-5">
    Forts de leur expertise et de leur dévouement, ils sont déterminés à traiter
    vos <br />
    problèmes et améliorer votre bien-être.
    <span class="font-semibold">→ Rendez-vous réalisés sur Doctolib. ←</span>
  </p>

  <div class="sm:flex grid gap-10 sm:ml-10 ml-2 mr-10 mt-10">
    <Comp_CardButton
      nom="Esther JURY VERMOT DES ROCHES"
      diplomes="- Diplôme de la FIFA en médecine du football - Diplôme d'État de pédicure-podologue - Master en biomécanique humaine"
      imageSrc="/public/images/EstherJURYVERMOTDESROCHES.jpg"
      imageAlt="Image de Esther JUTY VERMOT DES ROCHES"
      url="https://www.doctolib.fr/pedicure-podologue/grand-charmont/esther-jury-vermot-des-roches"
    />
    <Comp_CardButton
      nom="Anaëlle SELISE"
      diplomes="- Licence Biologie-santé - Diplôme d'État de pédicure-podologue"
      imageSrc="/public/images/AnaelleSELISE.jpg"
      imageAlt="Image de Anaëlle SELISE"
      url="https://www.doctolib.fr/pedicure-podologue/montbeliard/anaelle-selise"
    />
    <Comp_CardButton
      nom="Valentin EYSSERIC"
      diplomes="- Diplôme d'État de pédicure-podologue"
      imageSrc="/public/images/ValentinEYSSERIC.jpg"
      imageAlt="Image de Valentin EYSSERIC"
      url="https://www.doctolib.fr/pedicure-podologue/montbeliard/valentin-eysseric"
    />
  </div>

  <h3
    class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-dark_primary_green text-center mt-20"
  >
    <span class="text-black">Emplacement</span> géographique
  </h3>

  <p
    class="font-quicksand sm:text-desktop text-desktop_small text-center mt-10"
  >
    Maison de Santé CitéVie
  </p>
  <p class="font-quicksand sm:text-desktop text-desktop_small text-center">
    → 56 Rue Jacques Foillet, 25200 Montbéliard
  </p>

  <div class="mt-5 flex justify-center">
    <img
      class="w-5"
      src="/public/icons/phone-icon.svg"
      alt="Icone d'un téléphone"
    />
    <p class="font-quicksand sm:text-desktop text-desktop_small ml-2">
      Contact : 03 81 96 26 27
    </p>
  </div>

  <p class="font-quicksand sm:text-desktop text-desktop_small text-center mt-6">
    Informations pratiques :
  </p>
  <p class="font-quicksand sm:text-desktop text-desktop_small text-center mt-2">
    2ème étage | Accès hadicapé | Parking gratuit | Arrêt de bus FROMAGERIE
  </p>

  <div class="ml-72 mt-10"><Comp_Map /></div>

  <Comp_Footer class="bottom-0 sm:top-[1400px] top-[2400px] absolute w-full" />
</template>

<style></style>
