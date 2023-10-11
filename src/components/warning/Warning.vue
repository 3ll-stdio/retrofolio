<script setup lang="ts">
import { IWarning } from "@domain";

defineProps<{
  message: IWarning["message"];
  links: IWarning["links"];
}>();
</script>

<template>
  <div class="warning">
    <p class="h h3">{{ message }}</p>

    <ul class="links">
      <li v-for="(link, index) in links" :key="index" class="link">
        <a :href="link.url" :class="`text-button ${index ? 'secondary' : 'primary'}`" target="_blank">
          {{ link.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "src/styles/breakpoints.scss" as *;

.warning {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.links {
  display: inline-flex;
  gap: var(--spacing-md);
}

.link a {
  display: inline-flex;
  padding: var(--spacing-md) var(--spacing-lg);
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-sm);
  transition: background-color, border;
  transition-duration: var(--duration-1);
  transition-timing-function: var(--easing-1);
}

.link .primary {
  color: var(--elevation-11);
  background-color: var(--primary-5);
  border-top: var(--highlight-1);
  border-bottom: var(--shadow-1);

  &:hover,
  &:focus {
    background-color: var(--primary-6);
  }

  &:active {
    background-color: var(--primary-7);
    border-top: var(--shadow-1);
    border-bottom: var(--highlight-1);
  }
}

.link .secondary {
  color: var(--elevation-0);
  background-color: var(--elevation-9);
  border-top: var(--highlight-1);
  border-bottom: var(--shadow-1);

  &:hover,
  &:focus {
    background-color: var(--elevation-8);
  }

  &:active {
    background-color: var(--elevation-10);
    border-top: var(--shadow-1);
    border-bottom: var(--highlight-1);
  }
}
</style>
