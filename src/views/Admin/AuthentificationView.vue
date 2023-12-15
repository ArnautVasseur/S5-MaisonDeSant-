<script setup>
import Circle from "../../composants/Comp_Circle.vue";
import Comp_Header from "../../composants/Comp_Header.vue";
import Comp_FormAuth from "../../composants/Comp_FormAuth.vue";
</script>

<template>
    <Comp_Header></Comp_Header>
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

    <Comp_FormAuth/>
</template>

<script>

export default {
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  beforeDestroy() {
    document.body.style.overflow = '';
  },
};

</script>

<style scoped></style>