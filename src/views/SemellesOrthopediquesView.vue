<script setup>
import Comp_Header from "../composants/Comp_Header.vue";
import Button from "../composants/Buttons/Comp_Button.vue";
import Comp_CardPathologies from "../composants/Comp_CardPathologies.vue";
import Comp_Footer from "../composants/Comp_Footer.vue";
</script>

<template>
  <Comp_Header />

  <h2
    class="sm:text-desktop_h1 text-desktop_h4 font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
  >
    <span class="text-primary_blue">Vos</span> semelles orthopédiques
  </h2>

  <div class="grid sm:grid-cols-2 grid-cols-1 gap-10">
    <div>
      <h3
        class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
      >
        <span class="text-primary_blue">Leur</span> conception
      </h3>

      <p class="font-quicksand ml-10 mt-10 sm:text-desktop text-desktop_small">
        La création des semelles orthopédiques dure en moyenne une heure,
        découpé en plusieurs étapes :
      </p>

      <ul
        class="list-disc font-quicksand ml-14 mt-5 sm:text-desktop text-desktop_small"
      >
        <li>
          30 minutes de discussion du problème, examen physique et à la prise
          d'empreintes,
        </li>
        <li>
          10 minutes pour l’impression de la semelle, réalisé avec l’une des six
          fraiseuses présentent en France dans un cabinet de podologie.
        </li>
        <li>le reste pour essayer, et faire les finissions.</li>
      </ul>
    </div>

    <div>
      <h3
        class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
      >
        <span class="text-primary_blue">Tarifs et</span> devis
      </h3>

      <ul
        class="list-disc font-quicksand ml-14 mt-5 sm:text-desktop text-desktop_small"
      >
        <li class="mt-10">
          La consultation de podologie (bilan pour semelles orthopédiques) → 40€
        </li>
        <li class="mt-5">Semelles orthopédiques → 140€</li>
        <li class="mt-5">
          Recevez votre devis pour vos semelles orthopédiques par mail sous 24h
        </li>
      </ul>

      <Router-Link to="/faire-devis"
        ><Button name="Faire mon devis" class="mt-10 ml-auto mr-28"
      /></Router-Link>
    </div>
  </div>

  <div class="sm:flex grid ml-10 mt-10 gap-10">
    <img
      class="h-[302px]"
      src="/public/images/entretien-semelle-orthopedique.png"
      alt="Main tenant des semelles orthopédiques"
    />
    <img
      class="h-[302px]"
      src="/public/images/machine-semelles.png"
      alt="Machine pour faire les semelles orthopédiques"
    />
    <img
      class="h-[302px]"
      src="/public/images/tapis.png"
      alt="Tapis pour prendre les appuis des pieds"
    />
  </div>

  <div class="grid sm:grid-cols-2 grid-cols-1 gap-10">
    <div>
      <h3
        class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-primary_blue ml-10 mt-10"
      >
        <span class="text-dark_primary_green">Recouvrements</span> personalisés
        des semelles
      </h3>

      <p class="font-quicksand ml-10 mt-10 sm:text-desktop text-desktop_small">
        Nous vous inviterons à choisir le revêtement qui correspond à votre
        style et à vos préférences parmi nos quatre options de matières :
      </p>

      <ul
        class="list-disc font-quicksand ml-14 mt-5 sm:text-desktop text-desktop_small"
      >
        <li>cuir lisse</li>
        <li>cuir micro-perforé</li>
        <li>mousse lisse</li>
        <li>mousse micro-perforée.</li>
      </ul>

      <p class="font-quicksand ml-10 mt-5 sm:text-desktop text-desktop_small">
        Sur place, optez alors pour celui qui complétera parfaitement votre
        confort et votre esthétique.
      </p>
    </div>

    <div class="sm:flex grid mt-20 items-center m-auto">
      <img
        class="h-[172px]"
        src="/public/images/semelles-orthopediques.png"
        alt="Semelles orthopédiques de différentes couleurs"
      />
      <img
        class="h-[156px]"
        src="/public/images/semelles-orthopediques-2.png"
        alt="Semelles orthopédiques de différentes couleurs"
      />
    </div>
  </div>

  <h3
    class="sm:text-desktop_h2 text-desktop font-raleway font-semibold text-dark_primary_green ml-10 mt-10"
  >
    <span class="text-primary_blue">Les différentes</span> pathologies
  </h3>

  <select
    name="pathologies"
    id="pathologies-select"
    class="rounded-lg bg-clear-primary-green font-quicksand text-desktop w-[438px] h-10 mt-10 ml-10"
  >
    <option value="" class="text-center">
      Sélectionner la provenance de la pathologie
    </option>
    <option value="pied" class="text-center">pathologies du pied</option>
    <option value="genoux" class="text-center">pathologies du genoux</option>
    <option value="hanche" class="text-center">pathologies de la hanche</option>
  </select>

  <div class="grid sm:grid-cols-5 grid-cols-1 gap-10 mt-11 ml-10 mr-10">
    <Comp_CardPathologies
      title="GENU VALGUM"
      text="Le genu valgum se manifeste par une déformation des jambes, créant une courbure vers l'intérieur et formant un X, avec les genoux qui se touchent tandis que les chevilles restent écartées."
    />
    <Comp_CardPathologies
      title="TENDINITE ROTULIENNE"
      text="La tendinite rotulienne résulte d'une surutilisation du tendon rotulien, fréquemment observée dans les sports d'appuis tels que le volley-ball, le handball, le basket-ball et le football."
    />
    <Comp_CardPathologies
      title="GONARTHROSE"
      text="La gonarthrose, forme d'arthrose du genou, se manifeste par des lésions dans les articulations entre le fémur et la rotule, ou entre le fémur et le tibia. La surcharge pondérale est le principal facteur de risque."
    />
    <Comp_CardPathologies
      title="GENU VARUM"
      text="Le genou varum se caractérise par une position des jambes formant un arc vers l'extérieur. C'est l'opposé du genou valgum (genoux en X)."
    />
    <Comp_CardPathologies
      title="SYNDROME DE L'ESSUIE-GLACE"
      text="Le syndrome de l'essuie-glace correspond à une inflammation de la bandelette fibreuse qui s'étend de la partie externe de la hanche jusqu'au tibia (au niveau du genou)"
    />
    <Comp_CardPathologies
      title="LÉSIONS MÉNISCALES"
      text="Une lésion méniscale se révèle par des douleurs au niveau du genou, parfois accompagnées de gonflement, de craquement, voire d'un blocage de l'articulation."
    />
    <Comp_CardPathologies
      title="PÉRIOSTITE TIBIALE"
      text="La périostite tibiale est une inflammation du périoste, une membrane entourant l'os du tibia. C'est une douleur qui est étendue le long du bord interne du tibia."
    />
    <Comp_CardPathologies
      title="SYNDROME FÉMORO PATELLAIRE"
      text="Le syndrome fémoro-patellaire se caractérise par une douleur autour ou sous la rotule, notamment lors de la descente des escaliers ou en position assise prolongée."
    />
    <Comp_CardPathologies
      title="TENNIS LEG"
      text="Le tennis leg résulte d’un mauvais échauffement qui, combiné à la fatigue et une mauvaise hydratation, aboutissent à une lésion musculaire au mollet."
    />
  </div>

  <Comp_Footer class="bottom-0 sm:top-[1660px] top-[4200px] absolute w-full" />
</template>

<style></style>
