<script setup lang="ts">
defineProps<{
  file: {
    title: string;
    directory: string;
    type: string;
    size: string;
    date: string;
  };
}>();
</script>

<template>
  <div class="window">
    <div class="window-header">
      <p class="p3 header-title">{{ file.title }}</p>

      <div class="utils">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>

    <div class="window-body">
      <slot></slot>
    </div>

    <div class="window-footer">
      <p class="p3 footer-title">{{ file.directory }}</p>

      <div class="info">
        <p class="p3">{{ file.type }}</p>
        <hr />
        <p class="p3">{{ file.size }}</p>
        <hr />
        <p class="p3">{{ file.date }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.window {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  overflow: hidden;
}

.window-header,
.window-footer {
  display: inline-flex;
  padding: var(--spacing-xs);
  background-color: var(--elevation-8);
}

.window-header {
  border-top-left-radius: var(--radius-xs);
  border-top-right-radius: var(--radius-xs);
}

.window-footer {
  border-bottom-left-radius: var(--radius-xs);
  border-bottom-right-radius: var(--radius-xs);
  color: var(--elevation-4);
}

.header-title,
.footer-title {
  flex-grow: 1;
}

.utils {
  display: inline-flex;
  gap: var(--spacing-2xs);
  align-items: center;
}

.utils .circle {
  width: var(--spacing-xs);
  height: var(--spacing-xs);
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-circle);
  background-color: var(--elevation-6);
}

.window-body {
  height: 100%;
  border-left: 2px solid var(--elevation-8);
  border-right: 2px solid var(--elevation-8);
  overflow: hidden;
}

.info {
  display: inline-flex;
  gap: var(--spacing-xs);
  align-items: center;
}

.info hr {
  width: var(--spacing-2xs);
  height: var(--spacing-2xs);
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-circle);
  background-color: var(--elevation-4);
}
</style>
