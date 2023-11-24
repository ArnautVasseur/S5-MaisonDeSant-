<script setup>
import { vModelCheckbox } from "vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header></header>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>
  body{
    height: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>