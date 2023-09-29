<script setup>
import { vModelCheckbox } from "vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div :class="isDark ? 'dark' : ''" > <!--si isDark = true, Dark mode | si isDark = false, Light mode-->
    <body class="bg-[#eee] dark:bg-[#222] duration-700"> <!-- Rajouter une transition duration pour une transition de DarkMode à LightMode + douce -->
      <button checked @click="isDark=!isDark" class="dark:text-white">
        click
      </button>
      <RouterView />
    </body>
    
  </div>
</template>

<style scoped>
  body{
    height: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>

<script>
export default {
  data() {
    return {
      isDark: true,
    };
  },
  components: {

  },
};
</script>