<script setup lang="ts">
import { Badge, Header, Footer } from "@components";
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
    </div>

    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>
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
  box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.4) inset;
}

.view {
  flex-grow: 1;
}

.nav {
  position: fixed;
  left: 50%;
  bottom: var(--spacing-md);
}
</style>
