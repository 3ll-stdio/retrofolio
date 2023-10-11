<script setup lang="ts"></script>

<template>
  <img id="noise" src="/assets/noises/noise-1.gif" />
</template>

<style scoped>
#noise {
  height: 100%;
  width: 100%;
  mix-blend-mode: soft-light;
  opacity: 0.2;
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
