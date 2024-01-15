<script setup>
import Circle from "../../composants/Comp_Circle.vue";
import Comp_Header from "../../composants/Comp_Header.vue";
import Comp_FormAuth from "../../composants/Comp_FormAuth.vue";
import { ref, computed } from 'vue';
import { supabase } from '../../lib/supabaseClient';


var x=window.scrollX;
var y=window.scrollY;
window.onscroll=function(){window.scrollTo(x, y);};
</script>

<template>
    <div>
        <Comp_Header></Comp_Header>
        <Circle
        color="#BAE9D5"
        :size=150
        class="absolute left-[123px] top-60 hidden sm:block"
        />
        <Circle
        color="#DDF4EA"
        :size=250
        class="absolute right-[1315px] bottom-24 hidden sm:block"
        />
        <Circle
        color="#BAE9D5"
        :size=400
        class="absolute left-[1080px] -bottom-[250px] hidden sm:block"
        />
        <Circle
        color="#DDF4EA"
        :size=400
        class="absolute left-[1290px] bottom-0 hidden sm:block"
        />

        <Comp_FormAuth/>
    </div>
</template>

<style scoped>

</style>