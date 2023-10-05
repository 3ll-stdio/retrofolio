<script setup lang="ts"></script>

<template>
  <button class="theme-selector">
    <p class="p2">Change theme:</p>
    <div class="circle"></div>
  </button>
</template>

<style scoped lang="scss">
.theme-selector {
  display: inline-flex;
  gap: var(--spacing-2xs);
  align-items: center;
  padding: var(--spacing-2xs) var(--spacing-xs);
  color: var(--elevation-4);
  user-select: none;
  transition: background-color var(--duration-1) var(--easing-1);

  &:hover,
  &:focus {
    background-color: var(--elevation-7);
  }

  &:active {
    background-color: var(--elevation-6);
  }
}

.circle {
  width: var(--spacing-md);
  height: var(--spacing-md);
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-circle);
  background-color: var(--primary-5);
}
</style>
