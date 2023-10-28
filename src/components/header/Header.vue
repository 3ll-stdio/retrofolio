<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route, route.name)

const pageTitle = computed(() => {
  switch (route.path) {
    case "/home":
      return "Retrofolio's Official Site";
    case "/about":
      return "Retrofolio's Official CV";
    case "/projects":
      return "Retrofolio's Official Projects";
    case "/projects/project-1":
      return "Project 1";
    case "/projects/project-2":
      return "Project 2";
    case "/projects/project-3":
      return "Project 3";
    case "/projects/project-4":
      return "Project 4";
    default:
      return "Retrofolio's Official Site";
  }
});
</script>

<template>
  <header>
    <h1 class="p p2-semibold">{{ pageTitle }}</h1>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: var(--elevation-0);
}

h1 {
  width: 100%;
  text-align: center;
  color: var(--elevation-11);
  padding: var(--spacing-2xs) var(--spacing-md);
}
</style>
