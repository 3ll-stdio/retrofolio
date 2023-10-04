<script setup lang="ts">
import NavButton from "./NavButton.vue";
</script>

<template>
  <div class="container">
    <nav>
      <NavButton link="/" text="Home"></NavButton>
      <NavButton link="/about" text="About"></NavButton>
      <NavButton link="/projects" text="Projects"></NavButton>
    </nav>
  </div>
</template>

<style scoped>
.container {
  pointer-events: none;
}

nav {
  display: inline-flex;
  padding: var(--spacing-sm);
  align-items: center;
  gap: var(--spacing-sm);
  border-radius: var(--radius-md);
  background: var(--elevation-10);
  border-top: var(--highlight-1);
  border-bottom: var(--shadow-1);
  pointer-events: all;
}
</style>
