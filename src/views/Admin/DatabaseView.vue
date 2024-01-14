<script setup>
import Comp_Header from "../../composants/Comp_Header.vue";
import Comp_Footer from "../../composants/Comp_Footer.vue";
import Comp_Button from "../../composants/Buttons/Comp_Button.vue";
import { supabase } from '../../lib/supabaseClient'
import { pathologies, soins, praticiens, insertpathologies, insertsoins, deletepathologies, deletesoins, updatepathologies } from '../../lib/supabaseFunctions';
import { ref, onMounted } from 'vue'

async function getsoins() {
  const { data } = await supabase.from('soins').select()
  soins.value = data
}

async function getpathologies() {
  const { data } = await supabase.from('pathologies').select()
  pathologies.value = data
}

async function getpraticiens() {
  const { data } = await supabase.from('praticiens').select()
  praticiens.value = data
}

onMounted(() => {
  getpathologies(),
  getsoins(),
  getpraticiens()
})

const result = ref()
const action = ref()

</script>

<template>
    <Comp_Header />

    <h1 class="text-primary_blue text-desktop_h1 font-raleway font-semibold mt-10 ml-10">
        Votre espace d’
        <span class="text-dark_primary_green">administration</span>
    </h1>

    <h2 class="text-primary_blue text-desktop_h2 font-raleway font-semibold mt-10 ml-10">
        <span class="text-dark_primary_green">Ajoutez</span>
        ,
        <span class="text-dark_primary_green">modifiez</span>
        ou
        <span class="text-dark_primary_green">supprimez</span>
        des éléments de votre site
    </h2>

    <div class="flex mt-10 ml-10 gap-80">
        <div class="flex flex-col">
            <select name="soins" class="rounded-lg bg-medium_primary_green font-quicksand text-desktop h-10 " v-model="result" id="soin"> 
                <option disabled class="text-center bg-clear-primary-green">Choisissez la liste d'éléments que vous souhaitez modifier</option>
                <option value="Soins" class="text-center bg-clear-primary-green">Les différents soins que vous pratiquez</option>
                <option value="Pathologies" class="text-center bg-clear-primary-green">Les différentes pathologies</option>
                <option value="Praticiens" class="text-center bg-clear-primary-green">Les différents praticiens présents</option>
            </select>

            <p v-if="result == 'Soins'" class="mt-10 font-semibold font-quicksand">Ici, la liste des différents soins que vous pratiquez : </p>
            <p v-if="result == 'Pathologies'" class="mt-10 font-semibold font-quicksand">Ici, la liste des différents pathologies : </p>
            <p v-if="result == 'Praticiens'" class="mt-10 font-semibold font-quicksand">Ici, la liste des différents praticiens présents : </p>
        </div>

        <!-- form add soins -->
        <div v-if="result == 'Soins' && action == 'Ajouter'" class="w-full max-w-lg font-quicksand text-desktop font-medium flex flex-col justify-center items-center gap-5 bg-secondary-beige p-5 rounded-10 drop-shadow-green-shadow">
            <input class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green" type="text" id="soinsname_insert" placeholder="Nom *">
            <textarea class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green" type="text" id="soinsdesc_insert" placeholder="Description *"></textarea>
            <input class="block w-full text-sm text-gray-900 border border-medium_primary_green cursor-pointer bg-clear-primary-green focus:outline-none" id="soinsimage_insert" type="file">
            <button class="p-3 bg-medium_primary_green rounded-lg" id="successMessage" @click="insertsoins()">
                Ajouter Soin
            </button>
            <div id="successMessage" style="display: none; color: green;"></div>
        </div>
        <!-- form add soins -->

        <!-- form add pathologie -->
        <div v-if="result == 'Pathologies' && action == 'Ajouter'" class="w-full max-w-lg font-quicksand text-desktop font-medium flex flex-col justify-center items-center gap-5 bg-secondary-beige p-5 rounded-10 drop-shadow-green-shadow">
            <input class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green" type="text" id="pathoname_insert" placeholder="Nom *">
            <textarea class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green" type="text" id="pathodesc_insert" placeholder="Description *"></textarea>
            <button class="p-3 bg-medium_primary_green rounded-lg" id="successMessage" @click="insertpathologies()">
                Ajouter Pathologie
            </button>
            <div id="successMessage" style="display: none; color: green;"></div>
        </div>
        <!-- form add pathologie -->

        <!-- form add praticien -->
        <div v-if="result == 'Praticiens' && action == 'Ajouter'" class="w-full max-w-lg font-quicksand text-desktop font-medium flex flex-col justify-center items-center gap-5 bg-secondary-beige p-5 rounded-10 drop-shadow-green-shadow">
            <input class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green" type="text" id="pratiname_insert" placeholder="Nom *">
            <textarea class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green" type="text" id="pratidiplo_insert" placeholder="Diplômes *"></textarea>
            <button class="p-3 bg-medium_primary_green rounded-lg" id="successMessage" @click="insertpathologies()">
                Ajouter Praticien
            </button>
            <div id="successMessage" style="display: none; color: green;"></div>
        </div>
        <!-- form add praticien -->
    </div>

    <select class="rounded-lg w-80 mt-10 bg-medium_primary_green ml-10 font-quicksand text-desktop h-10 " v-model="action"> 
        <option value="Ajouter" class="text-center bg-clear-primary-green">Ajouter</option>
        <option value="Modifier" class="text-center bg-clear-primary-green">Modifier</option>
        <option value="Supprimer" class="text-center bg-clear-primary-green">Supprimer</option>
    </select>

    <!--Liste des soins-->
    <div v-if="result == 'Soins'" class="ml-10 mt-10">
        <ul v-for="soin in soins" :key="soin.id" class="mt-10">
            <div class="flex gap-5 bg-secondary-beige w-[430px] p-5 rounded-xl drop-shadow-green-shadow">
                <img class="w-24 h-32 rounded-xl" :src="soin.image_url" alt="image de soin">
                <div class="flex flex-col">
                    <li class="font-quicksand font-semibold mb-3">{{ soin.name }}</li>
                    <li class="font-quicksand">{{ soin.desc }}</li>
                </div>
            </div>
        </ul>
    </div>

    <!--Liste des pathologies-->
    <div v-if="result == 'Pathologies'" class="ml-10 mt-10">
        <ul v-for="patho in pathologies" :key="patho.id" class="mt-10">
            <div class="flex gap-5 bg-secondary-beige w-[430px] p-5 rounded-xl drop-shadow-green-shadow">
                <div class="flex flex-col">
                    <li class="font-quicksand font-semibold mb-3">{{ patho.name }}</li>
                    <li class="font-quicksand">{{ patho.desc }}</li>
                </div>
            </div>
        </ul>
    </div>

    <!--Liste des particiens-->
    <div v-if="result == 'Praticiens'" class="ml-10 mt-10">
        <ul v-for="praticien in praticiens" :key="praticien.id" class="mt-10">
            <div class="flex gap-5 bg-secondary-beige w-[430px] p-5 rounded-xl drop-shadow-green-shadow">
                <div class="flex flex-col">
                    <li class="font-quicksand font-semibold mb-3">{{ praticien.name }}</li>
                    <li class="font-quicksand">{{ praticien.diplomes }}</li>
                </div>
            </div>
        </ul>
    </div>

    <!-- <Comp_Footer class="bottom-0 sm:top-[600px] top-[1000px] absolute w-full" /> -->
</template>

<style>

</style>