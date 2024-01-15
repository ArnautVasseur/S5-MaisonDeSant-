<script setup>
import Button from "./Buttons/Comp_Button.vue";

import { ref } from "vue";

const soin = ref();
const pointure = ref();
const reglement = ref();
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
          type="date"
          id="birthday_input"
          class="w-full px-10 py-2 rounded-lg placeholder-black bg-clear-primary-green"
          placeholder="Date de naissance *"
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
      <select
        name="soins"
        class="rounded-lg bg-clear-primary-green font-quicksand text-desktop w-80 h-10"
        v-model="soin"
        id="soin"
      >
        <option disabled class="text-center">Sélectionner un soin</option>
        <option value="CONSULTATION DE PÉDICURIE" class="text-center">
          CONSULTATION DE PÉDICURIE
        </option>
        <option value="ORTHOPLASTIE" class="text-center">ORTHOPLASTIE</option>
        <option value="ONYCHOPLASTIE" class="text-center">ONYCHOPLASTIE</option>
        <option value="ORTHONYXIE" class="text-center">ORTHONYXIE</option>
        <option value="SEMELLES ORTHOPÉDIQUES" class="text-center">
          SEMELLES ORTHOPÉDIQUES
        </option>
      </select>

      <select
        name="pointure"
        class="rounded-lg bg-clear-primary-green font-quicksand text-desktop w-80 h-10"
        v-model="pointure"
        id="pointure"
      >
        <option disabled class="text-center">
          Sélectionner une pointure ( si demande de semelles )
        </option>
        <option value="Moins de 28" class="text-center">Moins de 28</option>
        <option value="Entre 28 et 37" class="text-center">
          Entre 28 et 37
        </option>
        <option value="Plus de 37" class="text-center">Plus de 37</option>
      </select>

      <select
        name="règlement"
        class="rounded-lg bg-clear-primary-green font-quicksand text-desktop w-80 h-10"
        v-model="reglement"
        id="reglement"
      >
        <option disabled class="text-center">
          Sélectionner un moyen de paiement
        </option>
        <option value="Chèque" class="text-center">Chèque</option>
        <option value="Carte Bleue" class="text-center">Carte Bleue</option>
        <option value="Espèces" class="text-center">Espèces</option>
      </select>
    </div>

    <p class="text-gray-400 text-desktop_small mt-5">
      * Aucun règlement n'est à prévoir pour la demande de devis
    </p>

    <button @click="modifyPdf" name="Demander un devis" class="mt-5 rounded-lg bg-medium_primary_green font-quicksand text-desktop px-10 h-10 flex justify-center gap-3 items-center hover:bg-hover-green duration-150 ease-out">Demander un devis</button>

    <div class="mt-2" id="ErrorMessage" style="display: none; color: red"></div>
  </div>
</template>

<script>
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from "downloadjs";
import emailjs from "emailjs-com";

const choice = ref();
const result = ref();
const display = ref();

export default {
  data() {
    return {
      currentDate: null,
    };
  },
  methods: {
    async modifyPdf() {
      try {
        console.log("enter download function");
        switch (soin.value) {
          case "CONSULTATION DE PÉDICURIE":
            choice.value = 1;
            break;
          case "ORTHOPLASTIE":
            choice.value = 2;
            break;
          case "ONYCHOPLASTIE":
            choice.value = 3;
            break;
          case "ORTHONYXIE":
            choice.value = 4;
            break;
          case "SEMELLES ORTHOPÉDIQUES":
            choice.value = 5;
            break;
          default:
            choice.value = 0;
            break;
        }

        switch (reglement.value) {
          case "Carte Bleue":
            display.value = 1;
            break;
          case "Chèque":
            display.value = 2;
            break;
          case "Espèces":
            display.value = 3;
            break;
          default:
            display.value = 0;
            break;
        }

        switch (pointure.value) {
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

        const patient_first_name =
          document.getElementById("first_name_input").value;
        const patient_last_name =
          document.getElementById("last_name_input").value;
        const patient_birthday =
          document.getElementById("birthday_input").value;
        const patient_ssn = document.getElementById("ssn_input").value;

        if (
          result.value == 0 ||
          display.value == 0 ||
          choice.value == 0 ||
          patient_first_name == "" ||
          patient_last_name == "" ||
          patient_birthday == "" ||
          patient_ssn == ""
        ) {
          ErrorMessage.textContent = "Veuillez remplir tous les champs";
          ErrorMessage.style.display = "block";

          setTimeout(() => {
            ErrorMessage.style.display = "none";
          }, 3000);
        } else {
          //variable qui gère quel devis pdf à utiliser
          var url = "";
          // si ce n'est pas un devis pour semelles orthopédique
          if (choice.value == 1) {
            url = "/devis/Consultation_de_pedicurie.pdf";

            const existingPdfBytes = await fetch(url).then((res) =>
              res.arrayBuffer()
            );
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const helveticaFont = await pdfDoc.embedFont(
              StandardFonts.Helvetica
            );
            const pages = pdfDoc.getPages();
            const firstPage = pages[0];
            const { width, height } = firstPage.getSize();
            const now = new Date();
            const formattedDate = `${now.getDate()}/${
              now.getMonth() + 1
            }/${now.getFullYear()}`;
            const currentDate = formattedDate;
            const date = currentDate;

            firstPage.drawText(patient_last_name, {
              x: 354,
              y: 708,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(patient_first_name, {
              x: 370,
              y: 696,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(patient_birthday, {
              x: 426,
              y: 684.8,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(date, {
              x: 397,
              y: 660,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            switch (display.value) {
              //Carte Bleue
              case 1:
                firstPage.drawText("x", {
                  x: 49,
                  y: 286,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
              //Chèque
              case 2:
                firstPage.drawText("x", {
                  x: 100,
                  y: 286,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
              //Espèces
              case 3:
                firstPage.drawText("x", {
                  x: 182,
                  y: 286,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
            }
            const pdfBytes = await pdfDoc.save();
            download(pdfBytes, "devis.pdf", "application/pdf");
          } else if (choice.value == 2) {
            url = "/devis/Orthoplastie.pdf";

            const existingPdfBytes = await fetch(url).then((res) =>
              res.arrayBuffer()
            );
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const helveticaFont = await pdfDoc.embedFont(
              StandardFonts.Helvetica
            );
            const pages = pdfDoc.getPages();
            const firstPage = pages[0];
            const { width, height } = firstPage.getSize();
            const now = new Date();
            const formattedDate = `${now.getDate()}/${
              now.getMonth() + 1
            }/${now.getFullYear()}`;
            const currentDate = formattedDate;
            const date = currentDate;

            firstPage.drawText(patient_last_name, {
              x: 354,
              y: 709,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(patient_first_name, {
              x: 370,
              y: 697,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(patient_birthday, {
              x: 426,
              y: 686,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(patient_ssn, {
              x: 430,
              y: 674.5,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            switch (display.value) {
              //Carte Bleue
              case 1:
                firstPage.drawText("x", {
                  x: 49,
                  y: 286,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
              //Chèque
              case 2:
                firstPage.drawText("x", {
                  x: 100,
                  y: 286,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
              //Espèces
              case 3:
                firstPage.drawText("x", {
                  x: 182,
                  y: 286,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
            }
            const pdfBytes = await pdfDoc.save();
            download(pdfBytes, "devis.pdf", "application/pdf");
          } else if (choice.value == 3 || choice.value == 4) {
            switch (choice.value) {
              case 3:
                url = "/devis/Onychoplastie.pdf";
                break;
              case 4:
                url = "/devis/Orthonyxie.pdf";
                break;
            }

            const existingPdfBytes = await fetch(url).then((res) =>
              res.arrayBuffer()
            );
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const helveticaFont = await pdfDoc.embedFont(
              StandardFonts.Helvetica
            );
            const pages = pdfDoc.getPages();
            const firstPage = pages[0];
            const { width, height } = firstPage.getSize();
            const now = new Date();
            const formattedDate = `${now.getDate()}/${
              now.getMonth() + 1
            }/${now.getFullYear()}`;
            const currentDate = formattedDate;
            const date = currentDate;

            firstPage.drawText(patient_last_name, {
              x: 353,
              y: 710,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(patient_first_name, {
              x: 369,
              y: 698,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(patient_birthday, {
              x: 426,
              y: 686,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(date, {
              x: 395,
              y: 662,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            switch (display.value) {
              //Carte Bleue
              case 1:
                firstPage.drawText("x", {
                  x: 49,
                  y: 286,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
              //Chèque
              case 2:
                firstPage.drawText("x", {
                  x: 100,
                  y: 286,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
              //Espèces
              case 3:
                firstPage.drawText("x", {
                  x: 182,
                  y: 286,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
            }
            const pdfBytes = await pdfDoc.save();
            download(pdfBytes, "devis.pdf", "application/pdf");
          }
          //si c'est un devis pour semelles orthopédiques
          else {
            switch (result.value) {
              case 1:
                url = "/devis/Inférieur_à_28.pdf";
                break;
              case 2:
                url = "/devis/Entre_28_et_37.pdf";
                break;
              case 3:
                url = "/devis/Supérieur_à_37.pdf";
                break;
            }

            const existingPdfBytes = await fetch(url).then((res) =>
              res.arrayBuffer()
            );
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const helveticaFont = await pdfDoc.embedFont(
              StandardFonts.Helvetica
            );
            const pages = pdfDoc.getPages();
            const firstPage = pages[0];
            const { width, height } = firstPage.getSize();
            const now = new Date();
            const formattedDate = `${now.getDate()}/${
              now.getMonth() + 1
            }/${now.getFullYear()}`;
            const currentDate = formattedDate;
            const date = currentDate;

            firstPage.drawText(patient_last_name, {
              x: 353,
              y: 710,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(patient_first_name, {
              x: 369,
              y: 698,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(patient_birthday, {
              x: 426,
              y: 686,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(date, {
              x: 395,
              y: 662,
              size: 11,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            });

            switch (display.value) {
              //Carte Bleue
              case 1:
                firstPage.drawText("x", {
                  x: 49,
                  y: 250,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
              //Chèque
              case 2:
                firstPage.drawText("x", {
                  x: 100,
                  y: 250,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
              //Espèces
              case 3:
                firstPage.drawText("x", {
                  x: 182,
                  y: 250,
                  size: 15,
                  font: helveticaFont,
                  color: rgb(0, 0, 0),
                });
                break;
            }
            const pdfBytes = await pdfDoc.save();

            download(pdfBytes, "devis.pdf", "application/pdf");
          }
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },

    getCurrentDate() {
      const now = new Date();
      const formattedDate = `${now.getDate()}/${
        now.getMonth() + 1
      }/${now.getFullYear()}`;
      this.currentDate = formattedDate;
    },
  },
  mounted() {
    this.getCurrentDate();
  },
};
</script>
