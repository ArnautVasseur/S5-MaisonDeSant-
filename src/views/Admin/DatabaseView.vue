<script setup>

import Comp_Header from "../../composants/Comp_Header.vue";
import Comp_Footer from "../../composants/Comp_Footer.vue";
import Comp_Button from "../../composants/Buttons/Comp_Button.vue";
import { supabase } from '../../lib/supabaseClient'
import { insertpathologies, insertsoins, pathologies, soins, deletepathologies, deletesoins, updatepathologies } from '../../lib/supabaseFunctions';
import { ref, onMounted } from 'vue'

async function getsoins() {
  const { data } = await supabase.from('soins').select()
  soins.value = data
}

async function getpathologies() {
  const { data } = await supabase.from('pathologies').select()
  pathologies.value = data
}

onMounted(() => {
  getpathologies(),
  getsoins()
})

const result = ref()

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

    <select name="soins" class="rounded-lg bg-medium_primary_green font-quicksand text-desktop h-10 mt-10 ml-10" v-model="result" id="soin"> 
        <option disabled class="text-center bg-clear-primary-green">Choisissez la liste d'éléments que vous souhaitez modifier</option>
        <option value="Soins" class="text-center bg-clear-primary-green">Les différents soins que vous pratiquez</option>
        <option value="Pathologies" class="text-center bg-clear-primary-green">Les différentes pathologies</option>
        <option value="Praticiens" class="text-center bg-clear-primary-green">Les différents praticiens présents</option>
    </select>

    <p class="ml-10 mt-24 font-semibold font-quicksand">Ici, la liste des différents soins que vous pratiquez : </p>

    <div class="flex gap-10 mt-10 ml-10">
        <Comp_Button
        show-icon="/icons/add-icon.svg"
        name="Ajouter"/>
        <Comp_Button
        show-icon="/icons/update-icon.svg"
        name="Modifier"/>
        <Comp_Button
        show-icon="/icons/delete-icon.svg"
        name="Supprimer"/>
    </div>

    <!-- <div class="flex justify-center items-center">
        <input class="text-black m-5" type="text" id="soinsname_insert" placeholder="nom du soin">
        <textarea class="text-black m-5" type="text" id="soinsdesc_insert" placeholder="description du soin"></textarea>
        <input type="file" id="soinsimage_insert" accept="image/*" />
        <button class="border p-3 m-5" @click="insertsoins">
            Insert here
        </button>

        <div id="successMessage" style="display: none; color: green;"></div>
    </div> -->

    <div v-if="result == 'Soins'">
        <ul v-for="soin in soins" :key="soin.id" class="border mt-5 flex flex-col items-center justify-center gap-3 p-5">
            <li>{{ soin.name }}</li>
            <img class="w-10 h-10" :src="soin.image_url" alt="">
        </ul>
    </div>

    <div v-if="result == 'Pathologies'">
        <ul class="border mt-20 flex flex-col items-center justify-center gap-3 p-5">
            <li v-for="patho in pathologies" :key="patho.id">{{ patho.name }}</li>
        </ul>
    </div>

    <!-- <Comp_Footer class="bottom-0 sm:top-[600px] top-[1000px] absolute w-full" /> -->
</template>

<script>

</script>

<style>

</style>