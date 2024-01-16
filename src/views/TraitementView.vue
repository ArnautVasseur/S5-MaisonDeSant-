<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Comp_Card from "../composants/Comp_Card.vue";
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

onMounted(() => {
  getsoins();
});

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
    class="sm:text-desktop_h1 text-desktop_h4 font-raleway font-semibold text-dark_primary_green ml-10 mt-20 text-center"
  >
    <span class="text-black">Les</span> traitements
  </h2>

  <div>
    <h3
      class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-black ml-10 mt-20 text-center"
    >
      Comment ce passe
      <span class="text-dark_primary_green">les soins</span> ?
    </h3>

    <ul
      class="list-disc font-quicksand mt-5 ml-5 sm:text-desktop text-desktop_small grid place-content-center"
    >
      <li class="mt-10">
        Onychoplastie, Orthonxie et Orthoplastie ont pour tarifs → 40€
      </li>
      <li class="mt-5">Les autres traitement ont comme tarif → 35€</li>
    </ul>

    <p
      class="font-quicksand sm:text-desktop text-desktop_small mt-10 text-center"
    >
      Pour chaque consultation pour le traitement de vos pieds, <br />
      la durée moyenne est d'environ
      <span class="font-semibold">30 minutes.</span>
    </p>
    <p
      class="font-quicksand sm:text-desktop text-desktop_small mt-5 text-center"
    >
      Les soins sont réalisés par des professionnels de la santé, <br />
      qui utilisent des produits et des outils soigneusement sélectionnés <br />
      pour garantir une approche médicale de qualité.
    </p>
  </div>

  <div class="sm:flex grid mt-20 gap-12 items-center sm:ml-28 ml-2">
    <img
      class="sm:h-[273px] h-[205px]"
      src="/public/images/siege.png"
      alt="Fauteuil où se déroule les soins"
    /><img
      class="sm:h-[273px] h-[152px]"
      src="/public/images/outils.png"
      alt="Instruments utilisés par le pédicure-podologue"
    />
    <img
      class="sm:h-[273px] h-[152px]"
      src="/public/images/cremes.png"
      alt="Produits proposés à la vente "
    />
  </div>

  <div
    class="sm:h-[1822px] h-[3800px] bg-gradient-to-r from-[#DDF4EA] to-[#FBF8F7] mt-24"
  >
    <h3
      class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-black ml-24 pt-20"
    >
      Les différents soins que nous réalisons
    </h3>

    <div class="grid sm:grid-cols-3 grid-cols-1 sm:ml-10 sm:mr-10 -ml-20 mt-10">
      <div v-for="soin in soins" :key="soin.id" class="mt-10">
        <div class="w-[450px]">
          <button class="border-4 border-[#86CDB0] rounded ml-24">
            <img
              class="w-24 h-32 rounded-xl"
              :src="soin.image_url"
              :alt="imageAlt"
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
  </div>

  <Comp_Footer class="bottom-0 sm:top-[2500px] top-[4800px] absolute w-full" />
</template>

<style></style>
