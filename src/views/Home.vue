<script setup lang="ts">
import { computed, ref } from "vue";
import { Window } from "../components/window";
import { Markdown } from "../components/markdown";
import { DisplayImg } from "../components/display-img";
import { FileExplorer } from "../components/file-explorer";
import { type IFile } from "../domain";
import { fileExplorer, files } from "../content";
import { useMarkdownSource } from "../composables/useMarkdownSource";

const filesArray = Object.values(files);
const activeFile = ref(filesArray[0]);
const activeDisplaySource = computed(() => activeFile.value.display.src);
const { content: displayContent } = useMarkdownSource(activeDisplaySource);

const handleFileChange = (file: IFile) => {
  activeFile.value = file;
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
