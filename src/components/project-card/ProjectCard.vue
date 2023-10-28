<script setup lang="ts">
import { IProjectCard } from "@domain";

defineProps<{
  project: IProjectCard;
}>();
</script>

<template>
  <router-link :to="project.url" class="project-card">
    <div class="img-container">
      <img :src="project.image" alt="" />
    </div>

    <div class="project-info">
      <h5 class="h4">{{ project.name }}</h5>

      <p class="p1 project-description">{{ project.description }}</p>

      <ul class="tags">
        <li v-for="(tag, index) in project.tags" :key="index" class="tag">
          <p class="p2-medium">{{ tag }}</p>
        </li>
      </ul>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.project-card {
  display: inline-flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  width: 100%;
  max-width: 55rem;
  border-radius: var(--radius-md);
  transition: background-color var(--duration-1) var(--easing-1);

  &:hover,
  &:focus {
    background-color: var(--elevation-9);
  }

  &:active {
    background-color: var(--elevation-8);
  }
}

.img-container {
  width: max-content;
  height: 100%;
}

.img-container img {
  width: 9rem;
  height: auto;
  aspect-ratio: 5 / 4;
  object-fit: cover;
  border-radius: var(--radius-xs);
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  flex-grow: 1;
}

.project-description {
  color: var(--elevation-4);
  display: -webkit-box;
  -webkit-line-clamp: 5; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 7em;
}

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--spacing-2xs);
  padding-top: var(--spacing-xs);
}

.tag {
  padding: var(--spacing-2xs) var(--spacing-xs);
  background-color: var(--primary-10);
  color: var(--primary-4);
  border-radius: var(--radius-md);
}
</style>
