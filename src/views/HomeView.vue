<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Comp_IconHomeView from "../composants/Comp_IconHomeView.vue";
import Button from "../composants/Buttons/Comp_Button.vue";
import Comp_Card from "../composants/Comp_Card.vue";
import Comp_CardButton from "../composants/Comp_CardButton.vue";
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
    class="sm:text-desktop_h1 text-center text-desktop_h4 font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
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

  <h2
    class="sm:text-desktop_h2 text-desktop_h4 font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
  >
    <span class="text-primary_blue">Soins et examens pour </span>vos pathologies
  </h2>

  <div class="sm:flex grid">
    <div>
      <p class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-10">
        Explorez notre liste de problèmes podologiques
      </p>
      <p class="font-quicksand sm:text-desktop text-desktop_small ml-10">
        et découvrez les informations concernant votre condition et les soins
        qui y sont associés.
      </p>

      <p
        class="font-quicksand sm:text-desktop text-desktop_small ml-10 mt-5 font-semibold"
      >
        Quelques exemples :
      </p>
    </div>
    <Router-Link to="/traitement">
      <Button name="Rechercher les soins réalisables" class="mt-10 ml-20"
    /></Router-Link>
  </div>

  <div class="grid sm:grid-cols-3 grid-cols-1 gap-10 mt-10 ml-10 mr-10">
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

  <div class="sm:flex grid gap-10 ml-10 mr-10 mt-10">
    <Comp_CardButton
      nom="Esther JURY VERMOT DES ROCHES"
      diplomes="- Diplôme de la FIFA en médecine du football - Diplôme d'État de pédicure-podologue - Master en biomécanique humaine"
      imageSrc="/public/images/EstherJURYVERMOTDESROCHES.webp"
      imageAlt="Image de Esther JUTY VERMOT DES ROCHES"
      url="https://www.doctolib.fr/pedicure-podologue/grand-charmont/esther-jury-vermot-des-roches"
    />
    <Comp_CardButton
      nom="Anaëlle SELISE"
      diplomes="- Licence Biologie-santé - Diplôme d'État de pédicure-podologue"
      imageSrc="/public/images/AnaëlleSELISE.webp"
      imageAlt="Image de Anaëlle SELISE"
      url="https://www.doctolib.fr/pedicure-podologue/montbeliard/anaelle-selise"
    />
    <Comp_CardButton
      nom="Valentin EYSSERIC"
      diplomes="- Diplôme d'État de pédicure-podologue"
      imageSrc="/public/images/ValentinEYSSERIC.webp"
      imageAlt="Image de Valentin EYSSERIC"
      url="https://www.doctolib.fr/pedicure-podologue/montbeliard/valentin-eysseric"
    />
  </div>

  <h2
    class="sm:text-desktop_h2 text-desktop_h4 font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
  >
    <span class="text-primary_blue">Vos</span> témoignages
  </h2>

  <Comp_Footer class="bottom-0 sm:top-[1500px] top-[3060px] absolute w-full" />
</template>

<style scoped></style>
