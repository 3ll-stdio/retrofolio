<script setup lang="ts">
import { Badge, Header, Footer, Nav } from "@components";
</script>

<template>
  <div class="pc">
    <router-link to="/" class="logo">
      <Badge />
    </router-link>

    <div class="screen">
      <Header />

      <div class="view">
        <router-view></router-view>
      </div>

      <Footer />

      <div class="shadow"></div>

      <!-- <Noise class="noise" /> -->
    </div>

    <Nav class="nav"></Nav>
  </div>
</template>

<style scoped>
.pc {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md) var(--spacing-md);
  width: 100%;
  height: 100%;
  background-color: var(--primary-5);
}

.screen {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  width: 100%;
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
  flex-grow: 1;
}

.nav {
  display: inline-flex;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: var(--spacing-xs);
  z-index: 10;
}
</style>
