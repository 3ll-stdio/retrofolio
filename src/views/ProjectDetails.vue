<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Window } from "../components/window";
import { Markdown } from "../components/markdown";
import { Carousel } from "../components/carousel";
import { Warning } from "../components/warning";
import { projects } from "../content";
import { useMarkdownSource } from "../composables/useMarkdownSource";

const route = useRoute();
const router = useRouter();
const firstProject = Object.values(projects)[0];

const activeProject = computed(() => {
  const id = String(route.params.id ?? "");
  return projects[id] ?? firstProject;
});

const displaySource = computed(() => activeProject.value.display.src);
const { content: display } = useMarkdownSource(displaySource);

if (route.params.id && !projects[String(route.params.id)]) {
  void router.replace("/projects");
}

watch(
  () => route.params.id,
  (id) => {
    if (id && !projects[String(id)]) {
      void router.replace("/projects");
    }
  }
);
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
