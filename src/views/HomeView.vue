<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Comp_IconHomeView from "../composants/Comp_IconHomeView.vue";
import Comp_Card from "../composants/Comp_Card.vue";
import Comp_CardPraticiens from "../composants/Comp_CardPraticiens.vue";
import Comp_Footer from "../composants/Comp_Footer.vue";
import { supabase } from "../lib/supabaseClient";
import {
  pathologies,
  soins,
  praticiens,
  insertpathologies,
  insertsoins,
  deletepathologies,
  deletesoins,
  updatepathologies,
  updatesoins,
  insertpraticiens,
  updatepraticiens,
  deletepraticiens,
} from "../lib/supabaseFunctions";
import { ref, onMounted, computed } from "vue";

async function getsoins() {
  const { data } = await supabase.from("soins").select();
  soins.value = data;
}

async function getpraticiens() {
  const { data } = await supabase.from("praticiens").select();
  praticiens.value = data;
}

onMounted(() => {
  getsoins(), getpraticiens();
});

const displayedSoins = computed(() => soins.value.slice(0, 3));
const displayedPraticiens = computed(() => praticiens.value.slice(0, 3));

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

  <div class="sm:h-[600px] h-[700px] bg-gradient-to-r from-[#124559] to-white">
    <div class="sm:flex grid">
      <div>
        <h3
          class="uppercase text-[#AEC3B0] font-quicksand font-semibold text-desktop_h3 pt-32 sm:pl-24 pl-5"
        >
          Vos pieds entre de bonnes mains
        </h3>
        <h2
          class="text-white font-raleway font-semibold text-[5rem] pt-5 sm:pl-24 pl-5"
        >
          Votre Confort,
        </h2>
        <h2
          class="text-white font-raleway font-semibold text-[5rem] sm:pl-24 pl-5"
        >
          Notre expertise
        </h2>
        <p
          class="font-quicksand text-white text-desktop_h4 opacity-75 pt-5 sm:pl-24 pl-5"
        >
          Des semelles orthopédiques modulées avec précision en réponse à votre
          diagnostic.
        </p>

        <Router-Link to="/traitement">
          <button
            class="ml-24 mt-9 rounded-3xl bg-dark_primary_green font-quicksand font-semibold text-white text-desktop px-10 h-10 hover:bg-hover-green duration-150 ease-out"
          >
            Découvrir
          </button></Router-Link
        >
      </div>

      <img
        src="../../public/images/Hero.png"
        alt="Une paire de semelles"
        class="sm:ml-20 sm:w-[585px] hidden sm:visible"
      />
    </div>
  </div>

  <h2
    class="sm:text-desktop_h1 text-center text-desktop_h4 font-raleway font-semibold text-dark_primary_green ml-10 mt-28"
  >
    <span class="text-black">Des semelles orthopédiques<br /></span>
    pour tous
  </h2>

  <p class="text-center text-[#5A5A5A] text-desktop_h4 font-quicksand mt-4">
    Nos semelles sont pensées pour convenir au plus grand nombre de <br />
    personne et pour toutes vos activitées.
  </p>

  <div
    class="grid ml-14 mt-10 sm:grid-cols-3 grid-cols-1 sm:mt-10 sm:justify-items-center"
  >
    <Comp_IconHomeView
      imageSrc="/public/icons/face-icon.svg"
      imageAlt="Icone d'un visage"
      title="ENFANTS"
      text="Des semelles stimulantes et correctrices évoluant tout au long de la croissance."
    />
    <Comp_IconHomeView
      imageSrc="/public/icons/old-icon.svg"
      imageAlt="Icone d'une personne agée"
      title="SÉNIORS"
      text="Des semelles confortables et respectueuses des déformations pour toutes les pathologies."
    />
    <Comp_IconHomeView
      imageSrc="/public/icons/sport02-icon.svg"
      imageAlt="Icone d'un sportif"
      title="SPORTIFS"
      text="Des semelles plus légères et dynamiques pour de meilleures performances."
    />
    <Comp_IconHomeView
      class="mt-10"
      imageSrc="/public/icons/shoe-icon.svg"
      imageAlt="Icone d'une chaussures"
      title="CHAUSSURES ÉTROITES"
      text="Des semelles correctrices plus fines, adaptées à un faible volume chaussant."
    />
    <Comp_IconHomeView
      class="mt-10"
      imageSrc="/public/icons/clock-icon.svg"
      imageAlt="Icone d'une horloge"
      title="AFFECTION DE LONGUE DURÉE"
      text="Des semelles conformes à la législation et au protocole ALD (Affection de Longue Durée)."
    />
    <Comp_IconHomeView
      class="mt-10"
      imageSrc="/public/icons/foot02-icon.svg"
      imageAlt="Icone d'un os du pied"
      title="PIED DIABÉTIQUE"
      text="Une optimisation des zones de décharges pour une meilleure répartition des appuis."
    />
  </div>

  <div
    class="sm:h-[700px] h-[1300px] bg-gradient-to-r from-[#DDF4EA] to-[#BAE9D5] sm:mt-36"
  >
    <h2
      class="sm:text-desktop_h1 text-desktop_h4 font-raleway font-semibold text-black pt-32 pl-24"
    >
      <span class="text-[#3C9E85]">Soins et examens pour </span>vos
      <br />pathologies
    </h2>
    <div class="sm:flex grid -ml-20 sm:-ml-0">
      <div v-for="(soin, index) in displayedSoins" :key="index" class="mt-10">
        <div class="w-[450px]">
          <button class="border-4 border-[#86CDB0] rounded ml-24">
            <img
              class="w-24 h-32 rounded-xl"
              :src="soin.image_url"
              :alt="soin.name"
            />
          </button>
          <div class="ml-24 mt-5">
            <h3
              class="uppercase text-desktop_h3 my-5 font-quicksand font-semibold"
            >
              {{ soin.name }}
            </h3>
            <p class="font-quicksand">{{ soin.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <Router-Link to="/traitement">
      <button
        class="mt-10 sm:ml-[559px] ml-5 rounded-3xl bg-primary_beige font-quicksand font-semibold text-dark_primary_green text-desktop px-10 h-10 hover:bg-hover-green hover:text-white duration-150 ease-out"
      >
        Rechercher les soins réalisables
      </button></Router-Link
    >
  </div>
  <div
    class="sm:h-[900px] h-[1500px] bg-gradient-to-r from-[#D3F1E4] to-[#74E4B5]"
  >
    <h2
      class="sm:text-desktop_h2 text-desktop_h4 font-raleway font-semibold text-primary_beige pt-28 text-center"
    >
      <span class="text-black">Notre</span>
      équipe
    </h2>

    <p
      class="font-quicksand sm:text-desktop text-desktop_small text-center mt-10"
    >
      Notre équipe est composée de professionnels à votre écoute, spécialisés
      <br />
      dans le domaine de la podologie.
    </p>

    <p
      class="font-quicksand sm:text-desktop text-desktop_small text-center mt-5"
    >
      Forts de leur expertise et de leur dévouement, ils sont déterminés à
      traiter <br />
      vos problèmes et améliorer votre bien-être. <br />
      <span class="font-semibold">→ Rendez-vous réalisez sur Doctolib. ←</span>
    </p>

    <div
      class="mt-20 sm:flex grid gap-20 justify-between sm:mx-24 sm:-ml-0 -ml-10"
    >
      <div
        v-for="(praticien, index) in displayedPraticiens"
        :key="index"
        class=""
      >
        <div class="w-[450px]">
          <button class="border-4 border-[#86CDB0] rounded ml-24">
            <img
              class="w-36 h-44 rounded-xl"
              :src="praticien.image_url"
              :alt="praticien.name"
            />
          </button>
          <div class="ml-24 mt-5 mr-20">
            <h3
              class="uppercase text-desktop_h3 my-5 font-quicksand font-semibold"
            >
              {{ praticien.name }}
            </h3>
            <p class="font-quicksand">{{ praticien.diplomes }}</p>
          </div>
        </div>
      </div>
    </div>

    <Router-Link to="/nous-connaitre">
      <button
        class="sm:mt-20 mt-10 ml-10 sm:ml-[584px] rounded-3xl bg-primary_beige font-quicksand font-semibold text-[#2E957E] text-desktop px-10 h-10 hover:bg-hover-green hover:text-white duration-150 ease-out"
      >
        Découvrir nos praticiens
      </button></Router-Link
    >
  </div>

  <p
    class="font-quicksand sm:text-desktop_h2 text-desktop_small text-center mt-10"
  >
    Nous travaillons avec des médecins spécialistes <br />
    dans leur domaine pour vous aider.
  </p>

  <Comp_Footer class="bottom-0 sm:top-[3370px] top-[5500px] absolute w-full" />
</template>

<style scoped></style>
