<script setup lang="ts">
import { computed } from "vue";
import { Window } from "../components/window";
import { Markdown } from "../components/markdown";
import { type IWindow } from "../domain";
import { useMarkdownSource } from "../composables/useMarkdownSource";

const metaInfo: IWindow = {
  name: "CV.md",
  directory: "~/About/CV.md",
  type: "Markdown",
  size: "83KB",
  date: "05/10/2023",
};
const cvSource = computed(() => "/assets/about/cv.md");
const { content: readme } = useMarkdownSource(cvSource);
</script>

<template>
  <div class="view-container">
    <Window :file="metaInfo" class="cv">
      <Markdown :source="readme" />
    </Window>
  </div>
</template>

<style scoped>
.view-container {
  padding: var(--spacing-md);
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.cv {
  height: 100%;
}
</style>
