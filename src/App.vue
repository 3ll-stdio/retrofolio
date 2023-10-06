<script setup lang="ts">
import { Badge, Screen, Nav } from "@components";
</script>

<template>
  <div class="pc">
    <Badge />

    <Screen />

    <Nav class="nav"></Nav>
  </div>
</template>

<style scoped lang="scss">
@use "./styles/breakpoints.scss" as *;

.pc {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm) var(--spacing-sm);
  width: 100%;
  height: 100%;
  background-color: var(--primary-5);
}

.nav {
  display: inline-flex;
  justify-content: center;

  @include md {
    position: fixed;
    left: 0;
    right: 0;
    bottom: var(--spacing-2xs);
    z-index: 10;
  }
}
</style>
