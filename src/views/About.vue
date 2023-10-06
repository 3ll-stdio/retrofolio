<script setup lang="ts">
import { reactive, onMounted } from "vue";
import axios from "axios";
import { Window, Markdown } from "@components";

const state = reactive({
  markdownContent: "",
  fileInfo: {
    title: "CV.md",
    directory: "~/About/CV.md",
    type: "Markdown",
    size: "83KB",
    date: "05/10/2023",
  },
});

onMounted(() => {
  axios
    .get("./assets/about/cv.md")
    .then((response) => {
      state.markdownContent = response.data;
    })
    .catch((error) => {
      console.error("Error loading Markdown file:", error);
    });
});
</script>

<template>
  <div class="view-container">
    <Window :file="state.fileInfo" class="cv">
      <Markdown :source="state.markdownContent" />
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
