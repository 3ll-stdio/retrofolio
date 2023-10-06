<script setup lang="ts">
import { marked } from "marked";

defineProps<{
  source: string;
}>();
</script>

<template>
  <div class="markdown-container">
    <div v-html="marked.parse(source)" class="markdown" />
  </div>
</template>

<style lang="scss">
.markdown-container {
  height: 100%;
  padding: var(--spacing-2xl);
  overflow-y: auto;
}

.markdown {
  * {
    padding: revert;
    margin: revert;
  }

  *:focus,
  *:focus-within,
  *:focus-visible,
  *:active {
    outline: revert;
  }

  img {
    user-select: revert;
    pointer-events: revert;
  }

  li {
    list-style-type: revert;
  }

  a {
    color: revert;
    outline: revert;
    text-decoration: revert;
    cursor: revert;
    display: revert;
  }

  button {
    border: revert;
    cursor: revert;
    background-color: revert;
    text-decoration: revert;
    user-select: revert;
  }

  dialog {
    margin: revert;
    border: revert;
  }

  input,
  textarea {
    background: revert;
    border: revert;
  }

  hr {
    border: revert;
  }
}
</style>
