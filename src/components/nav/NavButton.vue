import { RouterLink } from 'vue-router';
<script setup lang="ts">
defineProps<{
  link: RouterLink;
  text: string;
}>();
</script>

<template>
  <router-link :to="link" class="nav-button">
    <p class="p text-nav">{{ text }}</p>
  </router-link>
</template>

<style scoped lang="scss">
.nav-button {
  display: inline-flex;
  padding: var(--spacing-lg) var(--spacing-xl);
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-md);
  background-color: var(--elevation-9);
  border-top: var(--highlight-1);
  border-bottom: var(--shadow-1);
  transition: background-color, border;
  transition-duration: var(--duration-1);
  transition-easing: var(--easing-1);

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

.nav-button p {
  color: var(--elevation-0);
}

.nav-button.router-link-active {
  background-color: var(--primary-5);
  border-top: var(--shadow-1);
  border-bottom: var(--highlight-1);
}

.nav-button.router-link-active p {
  color: var(--elevation-11);
}
</style>
