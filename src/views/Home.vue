<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { Window, Markdown, DisplayImg, FileExplorer } from "@components";
import { IFile } from "@domain";
import { fileExplorer, files } from "@content";

const activeFile = ref(files[Object.keys(files)[0]]);
const displayContent = ref("");

const handleFileChange = (file: IFile) => {
  activeFile.value = file;

  axios
    .get(activeFile.value.display.src)
    .then((response) => {
      displayContent.value = response.data;
    })
    .catch((error) => {
      console.error("Error loading Markdown file:", error);
    });
};
</script>

<template>
  <div class="view-container">
    <Window :file="activeFile.display.metaInfo" class="readme">
      <Markdown :source="displayContent" />
    </Window>

    <div class="right">
      <Window :file="activeFile.image.metaInfo" class="display-img">
        <DisplayImg :source="activeFile.image.src" />
      </Window>

      <Window :file="fileExplorer.metaInfo" class="file-explorer">
        <FileExplorer @handleFileChange="handleFileChange" />
      </Window>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "src/styles/breakpoints.scss" as *;

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

.readme {
  height: 40rem;

  @include lg {
    height: 100%;
  }
}

.right {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  height: 100%;
  width: 100%;
}

.display-img {
  @include lg {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 60%;
  }
}

.file-explorer {
  height: 25rem;

  @include lg {
    flex-grow: 1;
    height: auto;
  }
}
</style>
