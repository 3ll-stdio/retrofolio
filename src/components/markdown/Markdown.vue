<script setup lang="ts">
import { marked } from "marked";

defineProps<{
  source: string;
}>();
</script>

<template>
  <div v-html="marked.parse(source)" class="markdown" />
</template>

<style lang="scss">
.markdown {
  padding: var(--spacing-2xl);

  * {
    padding: revert; 
    margin: revert;
  }

  *:focus,
  *:focus-within,
  *:focus-visible,
  *:active {
    outline: initial;
  }

  img {
    user-select: initial;
    pointer-events: initial;
  }

  li {
    list-style-type: initial;
  }

  a {
    color: initial;
    outline: initial;
    text-decoration: initial;
    cursor: initial;
    display: initial;
  }

  button {
    border: initial;
    cursor: initial;
    background-color: initial;
    text-decoration: initial;
    user-select: initial;
  }

  dialog {
    margin: initial;
    border: initial;
  }

  input,
  textarea {
    background: initial;
    border: initial;
  }

  hr {
    border: initial;
  }
}
</style>
