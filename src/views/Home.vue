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
    url: "src/assets/home/file-1/readme.md",
    img: "src/assets/home/file-1/display-img.png",
    name: "project-1",
    owner: "TeamA",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-2/readme.md",
    img: "src/assets/home/file-2/display-img.png",
    name: "project-2",
    owner: "TeamB",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-3/readme.md",
    img: "src/assets/home/file-3/display-img.png",
    name: "project-3",
    owner: "TeamB",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
  },
  {
    url: "src/assets/home/file-4/readme.md",
    img: "src/assets/home/file-4/display-img.png",
    name: "project-4",
    owner: "TeamC",
    type: "Markdown",
    date: "05/08/2023",
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
  <Window :file="displayFile.fileInfo" class="readme">
    <Markdown :source="displayFile.markdownContent" />
  </Window>

  <div class="right">
    <Window :file="displayImg.fileInfo">
      <DisplayImg :source="displayImg.src" />
    </Window>

    <Window :file="displayFile.fileInfo" class="file-explorer">
      <FileExplorer :files="files" :handleFileChange="handleFileChange" />
    </Window>
  </div>
</template>

<style scoped lang="scss">
@use "src/styles/breakpoints.scss" as *;

.readme {
  height: 40rem;

  @include lg {
    height: 100%;
  }
}

.file-explorer {
  flex-grow: 1;
  max-height: 24rem;
  
  @include lg {
    max-height: auto;
  }
}

.right {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  height: 100%;

  @include lg {
    grid-column: 2 / 3;
  }
}
</style>
