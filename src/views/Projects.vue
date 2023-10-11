<script setup lang="ts">
import { ProjectCard } from "@components";
import { projects } from "@content";
</script>

<template>
  <div class="view-container">
    <div class="projects-wrapper">
      <div class="header">
        <p class="intro">
          3LL STDIO INDUSTRIES UNIFIED OPERATING SYSTEM
          <br />
          COPYRIGHT 2075-2077 ROBCO INDUSTRIES
          <br />
          -Server 1-
        </p>

        <p class="hr">
          ===============================================================================================================
        </p>

        <h1 class="h1 title">Projects</h1>

        <p class="hr">
          ===============================================================================================================
        </p>
      </div>

      <ul class="projects-list">
        <li
          v-for="(project, index) in projects"
          :key="index"
          class="project-item"
        >
          <ProjectCard :project="project.card" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.view-container {
  grid-column: 1 / 3;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
}

.projects-wrapper {
  padding: var(--spacing-md);
  width: 100%;
  height: 100%;
}

.header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  text-align: center;
}

.intro,
.hr {
  color: var(--elevation-4);
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: center;
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-9xl);
}
</style>
