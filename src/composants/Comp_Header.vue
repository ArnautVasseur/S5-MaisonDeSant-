<script setup>
import Logo from "../composants/Comp_Logo.vue";

// Fonction pour déplacer le soulignement
function moveUnderline(event) {
  const hoveredElement = event.target.closest("li");
  if (hoveredElement) {
    const underline = document.querySelector(".underline");
    const underlineWidth = hoveredElement.clientWidth;
    const underlineOffset =
      hoveredElement.offsetLeft + (underlineWidth - 80) / 2; // Ajustement pour centrer

    // Déplacez le soulignement et fixez la largeur à 100px
    underline.style.transform = `translateX(${underlineOffset}px)`;
    underline.style.width = "100px";
  }
}
</script>

<template>
  <div class="flex bg-secondary-beige h-16 items-center relative">
    <Router-Link to="/"><Logo class="ml-10" /></Router-Link>
    <nav>
      <ul class="flex items-center font-quicksand gap-14 ml-80">
        <Router-Link to="/semelles-orthopediques">
          <li class="flex items-center gap-2" @mouseover="moveUnderline">
            <img
              class="w-5"
              src="/public/icons/footprint-icon.svg"
              alt="Icone d'un pied"
            />
            Semelles orthopédiques
          </li>
        </Router-Link>
        <Router-Link to="/traitement">
          <li class="flex items-center gap-2" @mouseover="moveUnderline">
            <a href=""></a>
            <img
              class="w-5"
              src="/public/icons/Medical-icon.svg"
              alt="Icone d'un stéthoscope"
            />
            Traitements
          </li>
        </Router-Link>
        <Router-Link to="/nous-connaitre">
          <li class="flex items-center gap-2" @mouseover="moveUnderline">
            <a href=""></a>
            <img
              class="w-5"
              src="/public/icons/map-icon.svg"
              alt="Icone d'un pointeur"
            />
            Nous connaître
          </li>
        </Router-Link>
        <Router-Link to="/faire-devis">
          <button
            class="border border-dark_primary_green rounded-3xl py-3 px-5"
          >
            <li
              class="font-semibold flex items-center gap-2 hover:underline hover:decoration-dark_primary_green hover:underline-offset-4"
            >
              <a href=""></a>
              <img
                class="w-5"
                src="/public/icons/icon-devis.svg"
                alt="Icone d'un document"
              />
              Faire mon devis
            </li>
          </button>
        </Router-Link>
      </ul>

      <!-- Soulignement -->
      <div
        class="underline bg-dark_primary_green h-[3px] absolute bottom-4 left-0 transition-transform transition-width"
      ></div>
    </nav>
  </div>
</template>

<style>
.transition-transform {
  transition: transform 0.3s ease;
}

.transition-width {
  transition: width 0.3s ease;
}
</style>
