<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { Window, Markdown, Carousel, Warning } from "@components";
import { projects } from "@content";
import { IProject } from "@domain";

const display = ref("");
const activeProject = ref<IProject>(projects[Object.keys(projects)[0]]);

onMounted(() => {
  const id = useRoute().params.id as string;
  activeProject.value = projects[id] as IProject;

  axios
    .get(activeProject.value.display.src)
    .then((response) => {
      display.value = response.data;
    })
    .catch((error) => {
      console.error("Error loading Markdown file:", error);
    });
});
</script>

<template>
  <div class="view-container">
    <div class="left">
      <Window :file="activeProject.carousel.metaInfo" class="carousel-window">
        <Carousel :images="activeProject.carousel.images" />
      </Window>

      <Window :file="activeProject.warning.metaInfo" class="warning-window">
        <Warning
          :message="activeProject.warning.message"
          :links="activeProject.warning.links"
        />
      </Window>
    </div>

    <Window :file="activeProject.display.metaInfo" class="display-window">
      <Markdown :source="display" />
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
  overflow-y: auto;

  @include lg {
    flex-direction: row;
    overflow: hidden;
    height: 100%;
  }
}

.left {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  width: 100%;
  height: max-content;
  overflow: hidden;

  @include lg {
    height: 100%;
  }
}

.carousel-window {
  @include lg {
    flex-grow: 1;
  }
}

.display-window {
  width: 100%;
  height: 40rem;

  @include lg {
    height: 100%;
  }
}
</style>
