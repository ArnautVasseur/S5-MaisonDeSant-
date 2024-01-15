<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Button from "../composants/Buttons/Comp_Button.vue";
import Comp_CardPathologies from "../composants/Comp_CardPathologies.vue";
import Comp_Footer from "../composants/Comp_Footer.vue";
import { supabase } from '../lib/supabaseClient'
import { pathologies, soins, praticiens, insertpathologies, insertsoins, deletepathologies, deletesoins, updatepathologies, updatesoins, insertpraticiens, updatepraticiens, deletepraticiens } from '../lib/supabaseFunctions';
import { ref, onMounted, computed  } from 'vue'

async function getpathologies() {
  const { data } = await supabase.from('pathologies').select()
  pathologies.value = data
}

onMounted(() => {
  getpathologies()
})

console.log(pathologies.value)

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
    <span class="text-black">Vos</span> semelles orthopédiques
  </h2>

  <div>
    <h3
      class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-dark_primary_green ml-10 mt-20 text-center"
    >
      <span class="text-black">Tarifs et</span> devis
    </h3>

    <ul
      class="list-disc ml-5 font-quicksand mt-5 sm:text-desktop text-desktop_small grid sm:place-content-center"
    >
      <li class="mt-10">
        La consultation de podologie (bilan pour semelles orthopédiques) → 40€
      </li>
      <li class="mt-5">Semelles orthopédiques → 140€</li>
      <li class="mt-5">
        Recevez votre devis pour vos semelles orthopédiques
      </li>
    </ul>

    <Router-Link to="/faire-devis">
      <button
        class="mt-10 ml-[620px] rounded-3xl bg-dark_primary_green font-quicksand font-semibold text-white text-desktop px-10 h-10 hover:bg-[#6FD8AD] duration-150 ease-out"
      >
        Faire mon devis
      </button></Router-Link
    >
  </div>

  <div class="h-[1417px] bg-gradient-to-r from-[#DDF4EA] to-[#FDFCFC] mt-28">
    <div>
      <h3
        class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-dark_primary_green ml-10 pt-28"
      >
        <span class="text-black">Leur</span> conception
      </h3>

      <p class="font-quicksand ml-10 mt-10 sm:text-desktop text-desktop_small">
        La création des semelles orthopédiques dure en moyenne une heure,
        découpé en plusieurs étapes :
      </p>

      <ul
        class="list-disc font-quicksand ml-14 mt-5 sm:text-desktop text-desktop_small"
      >
        <li class="mt-10">
          30 minutes de discussion du problème, examen physique et à la prise
          d'empreintes,
        </li>
        <li class="mt-5">
          10 minutes pour l’impression de la semelle, réalisé avec l’une des six
          fraiseuses présentent en France dans un cabinet de podologie.
        </li>
        <li class="mt-5">le reste pour essayer, et faire les finissions.</li>
      </ul>
    </div>

    <div class="sm:flex grid ml-24 mt-10 gap-1 sm:gap-40">
      <img
        class="sm:h-[302px] h-4/6"
        src="/public/images/tapis.png"
        alt="Tapis pour prendre les appuis des pieds"
      />
      <img
        class="sm:h-[302px] h-4/6"
        src="/public/images/machine-semelles.png"
        alt="Machine pour faire les semelles orthopédiques"
      />
      <img
        class="sm:h-[302px] h-4/6"
        src="/public/images/entretien-semelle-orthopedique.png"
        alt="Main tenant des semelles orthopédiques"
      />
    </div>

    <div
      class="h-[2px] bg-gradient-to-r from-[#8FE8C2] to-[#DDF4EA] my-28 mx-24"
    ></div>

    <div class="grid sm:grid-cols-2 grid-cols-1 gap-10">
      <div>
        <h3
          class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-black ml-10 mt-10"
        >
          <span class="text-secondary-blue">Recouvrements</span>
          personalisés des semelles
        </h3>

        <p
          class="font-quicksand ml-10 mt-10 sm:text-desktop text-desktop_small"
        >
          Nous vous inviterons à choisir le revêtement qui correspond à votre
          style et à vos préférences parmi nos quatre options de matières :
        </p>

        <ul
          class="list-disc font-quicksand ml-14 mt-5 sm:text-desktop text-desktop_small"
        >
          <li>cuir lisse</li>
          <li>cuir micro-perforé</li>
          <li>mousse lisse</li>
          <li>mousse micro-perforée.</li>
        </ul>

        <p class="font-quicksand ml-10 mt-5 sm:text-desktop text-desktop_small">
          Sur place, optez alors pour celui qui complétera parfaitement votre
          confort et votre esthétique.
        </p>
      </div>

      <div class="mt-20 items-center m-auto">
        <img
          class="h-[230px]"
          src="/public/images/semelles.png"
          alt="Semelles orthopédiques de différentes couleurs"
        />
      </div>
    </div>
  </div>

  <h3
    class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-dark_primary_green ml-10 sm:mt-28 mt-[700px] text-center"
  >
    <span class="text-black">Les différentes</span> pathologies
  </h3>

    <div class="ml-10 mt-10 flex flex-wrap gap-5">
      <div v-for="patho in pathologies" :key="patho.id" class="mt-10">
        <div class="bg-secondary-beige w-64 p-5 rounded-xl drop-shadow-green-shadow">
          <p class="text-primary_blue text-desktop_h4 font-quicksand font-semibold">
            {{ patho.name }}
          </p>
          <p class="font-quicksand mt-2">{{ patho.desc }}</p>
        </div>
      </div>
    </div>


  <Comp_Footer class="bottom-0 sm:top-[2800px] top-[4600px] absolute w-full" />
</template>

<style></style>
