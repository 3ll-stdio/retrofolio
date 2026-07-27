<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const pageTitle = computed(() => {
  if (route.path.startsWith("/projects/")) {
    const projectName = route.path.split("/").pop();
    return projectName ? projectName.replace("-", " ").toUpperCase() : "Project";
  }

  switch (route.path) {
    case "/":
      return "Retrofolio's Official Site";
    case "/about":
      return "Retrofolio's Official CV";
    case "/projects":
      return "Retrofolio's Official Projects";
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
