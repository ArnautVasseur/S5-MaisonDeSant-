<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Comp_Card from "../composants/Comp_Card.vue";
import Comp_Footer from "../composants/Comp_Footer.vue";
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
      class="list-disc font-quicksand mt-5 sm:text-desktop text-desktop_small grid place-content-center"
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

  <div class="flex mt-20 gap-12 items-center ml-28">
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

  <div class="h-[1822px] bg-gradient-to-r from-[#DDF4EA] to-[#FBF8F7] mt-24">
    <h3
      class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-black ml-24 pt-28"
    >
      Les différents soins que nous réalisons
    </h3>

    <div class="grid sm:grid-cols-3 grid-cols-1 gap-10 mt-20 ml-10 mr-10">
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
      <Comp_Card
        name="Onychoplastie"
        description="L'onychoplastie concerne la conception d'orthèses spécifiques pour traiter les problèmes des ongles, visant à améliorer la santé et le confort des patients."
        imageSrc="/public/images/onychoplastie.png"
        imageAlt="Un ongle avant/après avec onychoplastie"
      />
      <Comp_Card
        name="Ongle incarné"
        description="Le bord de l'ongle pénètre dans la peau, nécessitant parfois une intervention, comme l'ablation partielle de l'ongle, pour soulager la douleur et favoriser la guérison."
        imageSrc="/public/images/ongle-incarné.png"
        imageAlt="Un ongle avec un ongle incarné"
      />
      <Comp_Card
        name="Hématome"
        description="L'hématome sous l'ongle, causé par un traumatisme, peut nécessiter un drainage pour soulager la pression du sang accumulé."
        imageSrc="/public/images/hématome.png"
        imageAlt="Un ongle avec un hématome"
      />
      <Comp_Card
        name="Verrue plantaire"
        description="La verrue plantaire, causée par le VPH, peut nécessiter un traitement pour l'élimination et le soulagement de l'inconfort."
        imageSrc="/public/images/verrue_plantaire.png"
        imageAlt="Une verrue plantaire"
      />
      <Comp_Card
        name="Mycose unguéale"
        description="Infection fongique des ongles, nécessitant un traitement spécifique pour éliminer le champignon et restaurer la santé de l'ongle."
        imageSrc="/public/images/mycose-unguéale.png"
        imageAlt="Un ongle avec une mycose unguéale"
      />
      <Comp_Card
        name="Durillon"
        description="Le durillon est un épaississement de la peau dû à la pression, souvent sur les pieds ou les mains, nécessitant parfois un traitement pour soulager l'inconfort."
        imageSrc="/public/images/durillon.png"
        imageAlt="Un pied avec un durillon"
      />
      <Comp_Card
        name="Crevasses"
        description="Fissures dans la peau, généralement causées par la sécheresse, nécessitant des soins hydratants pour favoriser la guérison et prévenir l'inconfort."
        imageSrc="/public/images/crevasses.png"
        imageAlt="Un pied avec des crevasses"
      />
      <Comp_Card
        name="Pied d’athlète"
        description="Infection fongique de la peau, en particulier entre les orteils, nécessitant un traitement antifongique pour éliminer l'infection et soulager."
        imageSrc="/public/images/pied-d-athlète.png"
        imageAlt="Un pied avec une indection dit pied d'athlète"
      />
    </div>
  </div>

  <Comp_Footer class="bottom-0 sm:top-[2800px] top-[3800px] absolute w-full" />
</template>

<style></style>
