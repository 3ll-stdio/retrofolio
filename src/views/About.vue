<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { Window, Markdown } from "@components";
import { IWindow } from "@domain";

const readme = ref("");

const metaInfo: IWindow = {
  name: "CV.md",
  directory: "~/About/CV.md",
  type: "Markdown",
  size: "83KB",
  date: "05/10/2023",
};

onMounted(() => {
  axios
    .get("./assets/about/cv.md")
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
