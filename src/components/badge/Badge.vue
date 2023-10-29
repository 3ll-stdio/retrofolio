<script setup lang="ts">
import { LOGOS } from "@domain";
import { Logo } from "@components";
</script>

<template>
  <router-link to="/" class="badge">
    <div class="outer">
      <div class="inner">
        <Logo :variant="LOGOS.MARK" class="logo" />
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.badge {
  &:hover .logo,
  &:focus-visible .logo {
    animation: flip 2s linear infinite;
  }
}

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
  perspective: 400px;
  animation: flip 2s linear;
}

@keyframes flip {
  0% {
    transform: rotateY(0deg) translateY(0rem);
  }
  25% {
    transform: rotateY(90deg) translateY(-0.1rem);
  }
  50% {
    transform: rotateY(180deg) translateY(0rem);
  }
  75% {
    transform: rotateY(90deg) translateY(-0.1rem);
  }
  100% {
    transform: rotateY(0deg) translateY(0rem);
  }
}
</style>
