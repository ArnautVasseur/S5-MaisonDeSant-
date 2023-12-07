<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Comp_Form from "../composants/Comp_Form.vue";
import Comp_Footer from "../composants/Comp_Footer.vue";
</script>

<template>
  <Comp_Header />

  <h2
    class="sm:text-desktop_h1 text-desktop_h3 font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
  >
    <span class="text-primary_blue">Votre devis pour vos</span> semelles
    orthopédiques
  </h2>
  <h2
    class="sm:text-desktop_h1 text-desktop_h3 font-raleway font-semibold text-dark_primary_green ml-10"
  >
    <span class="text-primary_blue">par mail </span> sous 24h
  </h2>

  <div class="grid sm:grid-cols-2 grid-cols-1 gap-10">
    <div>
      <div class="flex">
        <img
          class="sm:w-10 w-5 ml-10 mt-10"
          src="/public/icons/document-validation-icon.svg"
          alt="Icone d'un document avec une coche de validation au centre"
        />
        <p
          class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-10"
        >
          L'assurance maladie rembourse une partie des frais des semelles
          orthopédiques
          <span class="font-semibold"
            >uniquement sur prescription médicale.</span
          >
        </p>
      </div>
      <div class="flex">
        <img
          class="sm:w-10 w-5 ml-10 mt-10"
          src="/public/icons/age-icon.svg"
          alt="Icone d'un adulte tenant la main d'un enfant"
        />
        <p
          class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-10"
        >
          Elle prend en charge
          <span class="font-semibold">1 paire par an</span> pour un
          <span class="font-semibold">adulte</span>, et
          <span class="font-semibold">2 paires par an</span> pour un
          <span class="font-semibold">enfant.</span>
        </p>
      </div>
      <div class="flex">
        <img
          class="sm:w-10 w-5 ml-10 mt-10"
          src="/public/icons/payments-icon.svg"
          alt="Icone d'une carte de payement"
        />
        <p
          class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-10"
        >
          La base de remboursement
          <span class="font-semibold">varie selon la pointure</span> des
          semelles orthopédiques
        </p>
      </div>
      <div class="flex">
        <img
          class="sm:w-10 w-5 ml-10 mt-10"
          src="/public/icons/handshake-icon.svg"
          alt="Icone de deux mains qui se serrent la main"
        />
        <p
          class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-10"
        >
          Le devis à envoyer à la mutuelle permet de connaître
          <span class="font-semibold">le remboursement</span> qui compensera une
          <span class="font-semibold">partie</span>, voire
          <span class="font-semibold">la totalité des frais.</span>
        </p>
      </div>
    </div>
    <div class="mt-10 ml-16">
      <Comp_Form />
    </div>
  </div>

  <Comp_Footer class="bottom-0 sm:top-[600px] top-[1000px] absolute w-full" />
</template>

<style></style>
