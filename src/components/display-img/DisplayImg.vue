<script setup lang="ts">
defineProps<{
  source: string;
}>();
</script>

<template>
  <div class="display-img">
    <img :src="source" />
  </div>
</template>

<style scoped lang="scss">
@use "src/styles/breakpoints.scss" as *;

.display-img {
  width: 100%;
  height: 25rem;
  padding: var(--spacing-md);

  @include lg {
    height: 100%;
  }
}

.display-img img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
  background-color: var(--primary-1);
  object-fit: cover;
  border: 1px solid var(--elevation-8);
}
</style>
