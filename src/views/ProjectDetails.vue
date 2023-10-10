<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { Window, Markdown } from "@components";
import { projects } from "@content";
import { IProject } from "@domain";

let readme = ref("");
let activeProject = reactive(projects[Object.keys(projects)[0]]);

onMounted(() => {
  const id = useRoute().params.id as string;
  activeProject = projects[id] as IProject;

  axios
    .get(activeProject.readme.src)
    .then((response) => {
      readme.value = response.data;
    })
    .catch((error) => {
      console.error("Error loading Markdown file:", error);
    });
});
</script>

<template>
  <div class="view-container">
    <div class="left">
      <Window :file="activeProject.carousel.metaInfo" class="carousel"></Window>

      <Window :file="activeProject.warning.metaInfo" class="warning"></Window>
    </div>

    <Window :file="activeProject.readme.metaInfo" class="readme">
      <Markdown :source="readme" />
    </Window>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/breakpoints.scss" as *;

.view-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  width: 100%;
  height: 100%;
  overflow: hidden;

  @include lg {
    flex-direction: row;
  }
}

.left {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  width: 100%;
  height: 100%;
}

.carousel {
  flex-basis: 70%;
}

.warning {
  flex-grow: 1;
}

.readme {
  width: 100%;
}
</style>
