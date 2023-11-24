<!-- Map.vue -->
<template>
  <div id="map" class="h-[301px] w-[780px] rounded-10"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // Initialize the map
      this.map = L.map('map').setView([47.49752950435361, 6.820239318769022], 20);

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      // Add a marker
      L.marker([47.49752950435361, 6.820239318769022]).addTo(this.map)
        .bindPopup('Maison de santé CitéVie');
    },
  },
};
</script>

<style scoped>

</style>
