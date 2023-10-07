<script setup lang="ts">
import { reactive, onMounted } from "vue";
import axios from "axios";
import { Window, Markdown, DisplayImg, FileExplorer } from "@components";
import { IFile } from "@domain";

const displayFile = reactive({
  markdownContent: "",
  fileInfo: {
    title: "CV.md",
    directory: "~/About/CV.md",
    type: "Markdown",
    size: "83KB",
    date: "05-10-2023",
  },
});

const displayImg = reactive({
  src: "",
  fileInfo: {
    title: "CV.md",
    directory: "~/About/CV.md",
    type: "Markdown",
    size: "83KB",
    date: "05-10-2023",
  },
});

const files = [
  {
    url: "./assets/home/file-1/readme.md",
    img: "./assets/home/file-1/display-img.png",
    name: "project-1",
    owner: "Team A",
    type: "Markdown",
    date: "05-08-2023",
  },
  {
    url: "./assets/home/file-2/readme.md",
    img: "./assets/home/file-2/display-img.png",
    name: "project-2",
    owner: "Team B",
    type: "Markdown",
    date: "05-08-2023",
  },
  {
    url: "./assets/home/file-3/readme.md",
    img: "./assets/home/file-3/display-img.png",
    name: "project-3",
    owner: "Team B",
    type: "Markdown",
    date: "05-08-2023",
  },
  {
    url: "./assets/home/file-4/readme.md",
    img: "./assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "Team C",
    type: "Markdown",
    date: "05-08-2023",
  },
];

onMounted(() => {
  handleFileChange(files[0]);
});

const handleFileChange = (file: IFile) => {
  displayImg.src = file.img;

  axios
    .get(file.url)
    .then((response) => {
      displayFile.markdownContent = response.data;
    })
    .catch((error) => {
      console.error("Error loading Markdown file:", error);
    });
};
</script>

<template>
  <div class="view-container">
    <Window :file="displayFile.fileInfo" class="readme">
      <Markdown :source="displayFile.markdownContent" />
    </Window>

    <div class="right">
      <Window :file="displayImg.fileInfo" class="display-img">
        <DisplayImg :source="displayImg.src" />
      </Window>

      <Window :file="displayFile.fileInfo" class="file-explorer">
        <FileExplorer :files="files" :handleFileChange="handleFileChange" />
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
