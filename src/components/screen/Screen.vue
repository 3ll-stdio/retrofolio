<script setup lang="ts">
import { Header, Footer } from "@components";
</script>

<template>
  <div class="screen">
    <Header />

    <div class="view">
      <router-view></router-view>
    </div>

    <Footer />

    <div class="shadow"></div>

    <!-- <Noise class="noise" /> -->
  </div>
</template>

<style scoped>
.screen {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: var(--elevation-10);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--primary-5);
  box-shadow: 0px 3px 2px 2px rgba(0, 0, 0, 0.4),
    0px -3px 2px 2px rgba(255, 255, 255, 0.4);
}

.shadow {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 64px 0px black inset;
  pointer-events: none;
}

.view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
}
</style>
