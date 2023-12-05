<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Comp_Card from "../composants/Comp_Card.vue";
import Comp_Footer from "../composants/Comp_Footer.vue";
</script>

<template>
  <Comp_Header />

  <p
    class="text-desktop_h1 font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
  >
    <span class="text-primary_blue">Les</span> traitements
  </p>

  <div class="grid grid-cols-2 gap-10">
    <div>
      <p
        class="text-desktop_h2 font-raleway font-semibold text-primary_blue ml-10 mt-10"
      >
        Comment ce passe les soins ?
      </p>

      <p class="font-quicksand ml-10 mt-10">
        Chaque traitement à comme tarif → 35€
      </p>

      <p class="font-quicksand ml-10 mt-5">
        Pour chaque consultation pour le traitement de vos pieds, la durée
        moyenne est d'environ 30 minutes.
      </p>
      <p class="font-quicksand ml-10">
        Les soins sont réalisés par des professionnels de la santé, qui
        utilisent des produits et des outils soigneusement sélectionnés pour
        garantir une approche médicale de qualité.
      </p>
    </div>

    <div class="flex mt-11 gap-10 items-center m-auto">
      <img
        class="h-[273px]"
        src="/public/images/outils.png"
        alt="Instruments utilisés par le pédicure-podologue"
      />
      <img
        class="h-[273px]"
        src="/public/images/cremes.png"
        alt="Produits proposés à la vente "
      />
    </div>
  </div>

  <div class="grid grid-cols-2 gap-10 mt-10">
    <div class="m-auto">
      <img
        class="h-[273px]"
        src="/public/images/siege.png"
        alt="Fauteuil où se déroule les soins"
      />
    </div>

    <div class="m-auto mr-28">
      <p class="font-quicksand">
        Notre équipe s'engage à créer une atmosphère accueillante et
        professionnelle, en mettant l'accent sur la confidentialité et le
        respect des normes sanitaires.
      </p>

      <p class="font-quicksand mt-5">
        Nous sommes disponibles pour répondre à toutes vos questions relatives
        aux soins podologiques, cherchant constamment à rendre chaque
        consultation aussi agréable que bénéfique pour vous.
      </p>
    </div>
  </div>

  <p
    class="text-desktop_h2 font-raleway font-semibold text-primary_blue ml-10 mt-28"
  >
    Les différents soins que nous réalisons
  </p>

  <div class="grid grid-cols-3 gap-10 mt-10 ml-10 mr-10">
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

  <Comp_Footer class="bottom-0 top-[1960px] absolute w-full" />
</template>

<style></style>
