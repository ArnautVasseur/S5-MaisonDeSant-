<script setup>
import Logo from "../composants/Comp_Logo.vue";
import Circle from "../composants/Comp_Circle.vue";
import Button from "../composants/Buttons/Comp_Button.vue"

var x=window.scrollX;
var y=window.scrollY;
window.onscroll=function(){window.scrollTo(x, y);};
</script>

<template>
  <div :class="{ 'custom-scrollbar-view': specificViewActive }" id="myContainer">
    <header class="flex items-center gap-10">
      <img
        src="images/IV_logo.png"
        alt="logo_pedicure_podologue"
        class="w-[71.97px] h-[75px] top-5 left-5 ml-5"
      />
      <Logo />
      <Circle
        color="#BAE9D5"
        :size="300"
        class="absolute left-[1290px] bottom-[560px] hidden sm:block"
      />
    </header>
    <Circle
      color="#BAE9D5"
      :size="150"
      class="absolute left-[123px] top-60 hidden sm:block"
    />
    <Circle
      color="#DDF4EA"
      :size="250"
      class="absolute right-[1315px] bottom-24 hidden sm:block"
    />
    <Circle
      color="#BAE9D5"
      :size="400"
      class="absolute left-[1080px] -bottom-[250px] hidden sm:block"
    />
    <Circle
      color="#DDF4EA"
      :size="400"
      class="absolute left-[1290px] bottom-0 hidden sm:block"
    />

    <div class="flex justify-center items-center sm:gap-32 gap-12 mt-40">
      <img
        class="sm:w-[100px] w-[50px]"
        src="/icons/foot-icon.svg"
        alt="Icone d'un pied"
      />
      <p
        class="font-raleway sm:text-8xl text-5xl text-primary_blue font-semibold"
      >
        404
      </p>
      <img
        class="sm:w-[100px] w-[50px]"
        src="/icons/foot-icon.svg"
        alt="Icone d'un pied"
      />
    </div>
    <p
      class="font-quicksand sm:text-desktop_h3 text-desktop_h4 text-center mt-14"
    >
      Erreur 404 - Page non trouvée. Veuillez vérifier l'URL ou retourner à la
      page d'accueil.
    </p>
    <Router-Link to="/">
      <Button show-icon="/icons/foot-icon.svg" name="Retour à la page d’accueil" class="mt-10 m-auto"></Button>
    </Router-Link>
  </div>
</template>