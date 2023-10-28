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
    width: 100%;
    height: auto;
    border-radius: var(--radius-xs);
    border: 1px solid var(--elevation-8);
  }

  h {
    color: var(--elevation-1);
  }

  p,
  li {
    color: var(--elevation-2);
  }

  ul,
  ol {
    padding-left: var(--spacing-2xl);
  }

  li {
    list-style-type: revert;
  }

  a {
    color: var(--primary-5);
    outline: revert;
    text-decoration: revert;
    cursor: revert;
    display: revert;
    transition: color var(--duration-1) var(--easing-1);

    strong {
      color: inherit;
    }

    &:hover,
    &:focus-visible {
      color: var(--primary-4);
    }

    &:active {
      color: var(--primary-3);
    }
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
    width: 100%;
    height: 1px;
    background-color: var(--elevation-8);
  }

  blockquote {
    margin: 0;
    padding-left: var(--spacing-md);
    border-left: 2px solid var(--elevation-8);
    color: var(--elevation-3);

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      color: var(--elevation-1);
    }
  }

  strong {
    color: var(--elevation-1);
  }

  code {
    font-size: var(--text-sm);
    color: var(--primary-4);
    background-color: var(--primary-10);
    border: 1px solid var(--primary-8);
    border-radius: 0.2rem;
    padding: 0 var(--spacing-2xs);
  }

  pre code {
    font-size: var(--text-sm);
    color: revert;
    background-color: var(--elevation-11);
    border: 1px solid var(--elevation-8);
    border-radius: var(--radius-xs);
    padding: var(--spacing-md);
  }
}
</style>
