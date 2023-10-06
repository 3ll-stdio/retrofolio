<script setup lang="ts">
defineProps<{
  source: string;
}>();
</script>

<template>
  <div class="container">
    <img :src="source" class="display-img" />
  </div>
</template>

<style scoped lang="scss">
@use "src/styles/breakpoints.scss" as *;

.container {
  width: 100%;
  height: 25rem;
  padding: var(--spacing-md);
}

.display-img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
  background-color: var(--primary-1);
  object-fit: cover;
}
</style>
