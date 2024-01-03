<script setup>
import Button from "./Buttons/Comp_Button.vue";

import { ref } from 'vue';

const pointure = ref()
const reglement = ref()

</script>

<template>
  <div class="flex flex-col items-center">  
    <form class="w-full max-w-lg mt-8 font-quicksand text-desktop font-medium">
      <div class="mb-4">
        <input
          type="text"
          id="last_name_input"
          class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green"
          placeholder="Nom de famille *"
        />
      </div>
      <div class="mb-4">
        <input
          type="text"
          id="first_name_input"
          class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green"
          placeholder="Prénom *"
        />
      </div>
      <div class="mb-4">
        <input
          type="email"
          id="email"
          class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green"
          placeholder="E-mail *"
        />
      </div>
      <div class="mb-4">
        <input
          type="text"
          id="ssn_input"
          class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green"
          placeholder="N° de sécurité sociale *"
        />
      </div>
    </form>

    <div class="flex flex-col gap-4">

      <select name="pointure" class="rounded-lg bg-clear-primary-green font-quicksand text-desktop w-80 h-10" v-model="pointure" id="pointure" >
        <option disabled class="text-center">Sélectionner une pointure</option>
        <option value="Moins de 28" class="text-center">Moins de 28</option>
        <option value="Entre 28 et 37" class="text-center">Entre 28 et 37</option>
        <option value="Plus de 37" class="text-center">Plus de 37</option>
      </select>

      <select name="règlement" class="rounded-lg bg-clear-primary-green font-quicksand text-desktop w-80 h-10" v-model="reglement" id="reglement">
        <option disabled class="text-center">Sélectionner un moyen de paiement</option>
        <option value="Chèque" class="text-center">Chèque</option>
        <option value="Carte Bleue" class="text-center">Carte Bleue</option>
        <option value="Espèces" class="text-center">Espèces</option>
      </select>

    </div>

    <p class="text-gray-400 text-desktop_small mt-5">* Aucun règlement n'est à prévoir pour la demande de devis</p>

    <Button @click="modifyPdf" name="Demander un devis" class="mt-5" />

    <div id="ErrorMessage" style="display: none; color: red;"></div>
  </div>

</template>

<script>

import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs';

const result = ref()
const display = ref()

export default {
    data() {
        return {
            currentDate: null,
        };
    },
    methods: {
        async modifyPdf() {
            try {
              switch(reglement.value){
                  case "Chèque":
                      display.value = 1;
                      break;
                  case "Espèces":
                      display.value = 2;
                      break;
                  case "Carte Bleue":
                      display.value = 3;
                      break;
                  default:
                      display.value = 0;
                      break;
              }

              switch(pointure.value){
                  case "Moins de 28":
                      result.value = 1;
                      break;
                  case "Entre 28 et 37":
                      result.value = 2;
                      break;
                  case "Plus de 37":
                      result.value = 3;
                      break;
                  default:
                      result.value = 0;
                      break;
              }

              if(result.value == 0 || display.value == 0){
                  // Show success message
                  ErrorMessage.textContent = "Veuillez remplir tous les champs";
                  ErrorMessage.style.display = 'block';

                  // Optional: Hide the success message after a certain time (e.g., 3 seconds)
                  setTimeout(() => {
                      ErrorMessage.style.display = 'none';
                  }, 3000);

              } else {

                  const url = '../public/devis/devis.pdf';
                  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

                  // Load a PDFDocument from the existing PDF bytes
                  const pdfDoc = await PDFDocument.load(existingPdfBytes);

                  // Embed the Helvetica font
                  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

                  // Get the first page of the document
                  const pages = pdfDoc.getPages();
                  const firstPage = pages[0];

                  // Get the width and height of the first page
                  const { width, height } = firstPage.getSize();
                  const patient_first_name = document.getElementById("first_name_input").value;
                  const patient_name = document.getElementById("last_name_input").value;
                  const patient_ssn = document.getElementById("ssn_input").value;

                  const now = new Date();
                  const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
                  const currentDate = formattedDate;

                  const date = currentDate

                  // Serialize the PDFDocument to bytes (a Uint8Array)
                  const pdfBytes = await pdfDoc.save();

                  // Trigger the browser to download the PDF document
                  download(pdfBytes, 'pdf-lib_modification_example.pdf', 'application/pdf');
              
              }

          } catch (error) {
              console.error("An error occurred:", error);
          }
      },

        getCurrentDate() {
            const now = new Date();
            const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
            this.currentDate = formattedDate;
        }
    },
    mounted() {
        this.getCurrentDate();
    },
};

</script>