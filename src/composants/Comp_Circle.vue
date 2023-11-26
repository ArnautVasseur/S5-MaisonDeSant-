<template>
  <div>
    <div :style="circleStyle" class="circle">
      <div :style="haloStyle" class="halo"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'blue'
    },
    size: {
      type: Number,
      default: 50
    }
  },
  computed: {
    circleStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        backgroundColor: this.color,
        borderRadius: '50%',
        position: 'relative'
      };
    },
    haloStyle() {
      const haloSize = this.size * 1.25;
      return {
        width: `${haloSize}px`,
        height: `${haloSize}px`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        border: `1px solid ${this.color}`
      };
    }
  }
};
</script>

<style scoped>

</style>
