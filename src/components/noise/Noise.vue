<script lang="ts">
export default {
  data() {
    return {
      name: "Noise",
    };
  },
  methods: {
    generateNoise() {
      this.noise = document.createElement("canvas");
      this.noise.height = window.innerHeight * 2;
      this.noise.width = window.innerWidth * 2;

      let noiseContext = this.noise.getContext("2d");
      let noiseData = noiseContext.createImageData(
        this.noise.width,
        this.noise.height
      );
      let buffer32 = new Uint32Array(noiseData.data.buffer);
      let len = buffer32.length - 1;

      while (len--) {
        buffer32[len] = Math.random() < 0.5 ? 0 : -1 >> 0;
      }

      noiseContext.putImageData(noiseData, 0, 0);
    },
    moveNoise() {
      let canvas = this.$refs.canvas;
      let context = canvas.getContext("2d");
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(this.noise, -x, -y);

      requestAnimationFrame(this.moveNoise);
    },
  },
  mounted() {
    this.$refs.canvas.height = window.innerHeight;
    this.$refs.canvas.width = window.innerWidth;
    this.generateNoise();

    requestAnimationFrame(this.moveNoise);
  },
};
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>

<style scoped>
canvas {
  height: 100%;
  width: 100%;
  mix-blend-mode: soft-light;
  opacity: 0.4;
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  pointer-events: none;
}
</style>
