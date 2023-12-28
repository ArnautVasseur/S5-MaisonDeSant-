<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Comp_IconHomeView from "../composants/Comp_IconHomeView.vue";
import Comp_Card from "../composants/Comp_Card.vue";
import Comp_Footer from "../composants/Comp_Footer.vue";
</script>

<template>
  <Comp_Header />

  <div class="h-[600px] bg-gradient-to-r from-[#124559] to-white">
    <h3
      class="uppercase text-[#AEC3B0] font-quicksand font-semibold text-desktop_h3 pt-32 pl-24"
    >
      Vos pieds entre de bonnes mains
    </h3>
    <h2 class="text-white font-raleway font-semibold text-[5rem] pt-5 pl-24">
      Votre Confort,
    </h2>
    <h2 class="text-white font-raleway font-semibold text-[5rem] pl-24">
      Notre expertise
    </h2>
    <p class="font-quicksand text-white text-desktop_h4 opacity-75 pt-5 pl-24">
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

  <div class="grid sm:grid-cols-3 grid-cols-1 sm:mt-10 sm:justify-items-center">
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

  <div class="h-[700px] bg-gradient-to-r from-[#DDF4EA] to-[#BAE9D5] mt-36">
    <h2
      class="sm:text-desktop_h1 text-desktop_h4 font-raleway font-semibold text-black pt-32 pl-24"
    >
      <span class="text-[#3C9E85]">Soins et examens pour </span>vos
      <br />pathologies
    </h2>
    <div class="flex">
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
        class="mt-10 rounded-3xl bg-primary_beige font-quicksand font-semibold text-dark_primary_green text-desktop px-10 h-10 hover:bg-hover-green hover:text-white duration-150 ease-out"
      >
        Rechercher les soins réalisables
      </button></Router-Link
    >
  </div>

  <h2
    class="sm:text-desktop_h2 text-desktop_h4 font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
  >
    <span class="text-primary_blue">Notre</span>
    équipe
  </h2>

  <div class="grid sm:grid-cols-2 grid-cols-1">
    <div>
      <p class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-10">
        Notre équipe est composée de professionnels à votre écoute, spécialisés
        dans le domaine de la podologie.
      </p>

      <p class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-5">
        Forts de leur expertise et de leur dévouement, ils sont déterminés à
        traiter vos problèmes et améliorer votre bien-être.
        <span class="font-semibold"
          >→ Rendez-vous réalisez sur Doctolib. ←</span
        >
      </p>
    </div>
    <Router-Link to="/nous-connaitre"
      ><Button name="Nous connaitre" class="mt-10 ml-20"
    /></Router-Link>
  </div>

  <h2
    class="sm:text-desktop_h2 text-desktop_h4 font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
  >
    <span class="text-primary_blue">Vos</span> témoignages
  </h2>

  <Comp_Footer class="bottom-0 sm:top-[3000px] top-[3060px] absolute w-full" />
</template>

<style scoped></style>
