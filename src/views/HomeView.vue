<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Comp_IconHomeView from "../composants/Comp_IconHomeView.vue";
import Comp_Card from "../composants/Comp_Card.vue";
import Comp_CardPraticiens from "../composants/Comp_CardPraticiens.vue";
import Comp_Footer from "../composants/Comp_Footer.vue";
</script>

<template>
  <Comp_Header />

  <div class="h-[600px] bg-gradient-to-r from-[#124559] to-white">
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
    <h2 class="text-white font-raleway font-semibold text-[5rem] sm:pl-24 pl-5">
      Notre expertise
    </h2>
    <p
      class="font-quicksand text-white text-desktop_h4 opacity-75 pt-5 sm:pl-24 pl-5"
    >
      Des semelles orthopédiques modulé avec précision en réponse à votre
      diagnostic.
    </p>

    <Router-Link to="/traitement">
      <button
        class="ml-24 mt-9 rounded-3xl bg-dark_primary_green font-quicksand font-semibold text-white text-desktop px-10 h-10 hover:bg-hover-green duration-150 ease-out"
      >
        Découvrir
      </button></Router-Link
    >

    <!--<img src="../../public/images/semelles.jpg" alt="Une paire de semelles" />-->
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
    <div class="sm:flex grid">
      <Comp_Card
        name="Orthonyxie"
        description="Traitement pour les ongles incarnés pour redresser l'ongle afin de soulager la douleur et l'inconfort."
        imageSrc="/public/images/orthonxie.jpg"
        imageAlt="Un ongle avec orthonxie"
      />
      <Comp_Card
        name="Orthoplastie"
        description="L'orthoplastie crée des appareillages sur mesure pour améliorer la fonction musculo-squelettique et le confort des patients."
        imageSrc="/public/images/orthoplastie.png"
        imageAlt="Un ongle avec orthoplastie"
      />
      <Comp_Card
        name="Bilan podologique"
        description="Evaluation spécialisée des pieds visant à identifier et traiter les problèmes podologiques, améliorant ainsi la santé et la mobilité des patients."
        imageSrc="/public/images/Bilanpodologique.png"
        imageAlt="Un pied pour un bilan podologique"
      />
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

    <div class="mt-20 sm:flex grid justify-between sm:mx-24 mx-10">
      <Comp_CardPraticiens
        name="Esther JURY VERMOT DES ROCHES"
        imageSrc="/public/images/EstherJURYVERMOTDESROCHES.webp"
        imageAlt="Image de Esther JUTY VERMOT DES ROCHES"
      />
      <Comp_CardPraticiens
        name="Anaëlle SELISE"
        imageSrc="/public/images/AnaëlleSELISE.webp"
        imageAlt="Image d'Anaëlle SELISE"
      />
      <Comp_CardPraticiens
        name="Valentin EYSSERIC"
        imageSrc="/public/images/ValentinEYSSERIC.webp"
        imageAlt="Image de Valentin EYSSERIC"
      />
    </div>

    <Router-Link to="/nous-connaitre">
      <button
        class="mt-20 ml-[584px] rounded-3xl bg-primary_beige font-quicksand font-semibold text-[#2E957E] text-desktop px-10 h-10 hover:bg-hover-green hover:text-white duration-150 ease-out"
      >
        Découvrir nos practiciens
      </button></Router-Link
    >
  </div>

  <h2
    class="sm:text-desktop_h2 text-desktop_h4 font-raleway font-semibold text-dark_primary_green text-center mt-32"
  >
    <span class="text-black">Vos</span> témoignages
  </h2>

  <p
    class="font-quicksand sm:text-desktop text-desktop_small text-center mt-10"
  >
    Nous travaillons avec des médecins spécialistes <br />
    dans leur domaine pour vous aider.
  </p>

  <Comp_Footer class="bottom-0 sm:top-[3500px] top-[5700px] absolute w-full" />
</template>

<style scoped></style>
