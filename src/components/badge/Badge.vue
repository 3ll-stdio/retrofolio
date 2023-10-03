<script setup lang="ts">
import { LOGOS } from "@domain";
import { Logo } from "@components";
</script>

<template>
  <div class="outer">
    <div class="inner">
      <Logo :variant="LOGOS.MARK" class="logo" />
    </div>
  </div>
</template>

<style scoped>
.outer,
.inner {
  padding: var(--spacing-2xs);
  width: max-content;
  height: max-content;
  border-radius: var(--radius-circle);
}

.outer {
  box-shadow: 0px -2px 2px 0px rgba(255, 255, 255, 0.4) inset,
    0px 2px 2px 0px rgba(0, 0, 0, 0.4) inset;
}

.inner {
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4),
    0px -2px 2px 0px rgba(255, 255, 255, 0.4);
}

.logo {
  width: var(--spacing-2xl);
  height: var(--spacing-2xl);
  aspect-ratio: 1 / 1;
}
</style>
