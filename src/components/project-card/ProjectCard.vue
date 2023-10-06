<script setup lang="ts">
defineProps<{
  link: string;
}>();
</script>

<template>
  <router-link :to="link" class="project-card">
    <div class="img-container">
      <img src="/assets/projects/project-1/images/img-1.png" alt="" />
    </div>

    <div class="project-info">
      <h5 class="h4">Project Title</h5>

      <p class="p1 project-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat ipsum
        volutpat porttitor nec ut augue. Tincidunt libero vestibulum massa ac
        sagittis suscipit bibendum viverra rutrum.
      </p>

      <div class="tags">
        <p class="p2-medium tag">tag</p>
        <p class="p2-medium tag">tag</p>
        <p class="p2-medium tag">tag</p>
      </div>
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
}

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--spacing-2xs);
}

.tag {
  padding: var(--spacing-2xs) var(--spacing-xs);
  background-color: var(--primary-10);
  color: var(--primary-4);
  border-radius: var(--radius-md);
}
</style>
