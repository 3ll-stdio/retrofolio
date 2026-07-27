<script setup lang="ts">
import { computed } from "vue";
import { renderMarkdown } from "./renderMarkdown";

const props = defineProps<{
  source: string;
}>();

const sanitizedMarkdown = computed(() => renderMarkdown(props.source));
</script>

<template>
  <div class="markdown-container">
    <article
      class="markdown"
      v-html="sanitizedMarkdown"
    />
  </div>
</template>

<style lang="scss">
.markdown-container {
  height: 100%;
  padding: var(--spacing-2xl);
  overflow-y: auto;
}

.markdown {
  max-width: 48rem;
  color: var(--elevation-2);
  font-family: var(--font-paragraph);
  font-size: var(--text-base);
  line-height: 1.65;
  word-wrap: break-word;
  overflow-wrap: anywhere;

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }

  *:focus-visible {
    outline: 2px solid var(--primary-4);
    outline-offset: 2px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--elevation-1);
    font-family: var(--font-heading);
    font-weight: 800;
    line-height: 1.25;
    margin-top: var(--spacing-2xl);
    margin-bottom: var(--spacing-sm);
    scroll-margin-top: var(--spacing-md);
  }

  h1 {
    font-size: var(--text-2xl);
    margin-top: 0;
    padding-bottom: var(--spacing-xs);
    border-bottom: 1px solid var(--elevation-8);
  }

  h2 {
    font-size: var(--text-xl);
    padding-bottom: var(--spacing-3xs);
    border-bottom: 1px solid var(--elevation-8);
  }

  h3 {
    font-size: var(--text-lg);
  }

  h4 {
    font-size: var(--text-md);
  }

  h5,
  h6 {
    font-family: var(--font-paragraph);
    font-size: var(--text-base);
    font-weight: 600;
  }

  p {
    margin: 0 0 var(--spacing-md);
  }

  strong {
    color: var(--elevation-1);
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  del {
    color: var(--elevation-4);
    text-decoration: line-through;
  }

  a {
    color: var(--primary-4);
    display: inline;
    text-decoration: underline;
    text-underline-offset: 0.15em;
    text-decoration-thickness: 1px;
    cursor: pointer;
    transition: color var(--duration-1) var(--easing-1);

    strong {
      color: inherit;
    }

    &:hover,
    &:focus-visible {
      color: var(--primary-3);
    }

    &:active {
      color: var(--primary-5);
    }
  }

  ul,
  ol {
    margin: 0 0 var(--spacing-md);
    padding-left: var(--spacing-xl);
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin: var(--spacing-3xs) 0;
    padding-left: var(--spacing-3xs);
    color: var(--elevation-2);
    list-style-type: inherit;

    > ul,
    > ol {
      margin-top: var(--spacing-2xs);
      margin-bottom: var(--spacing-2xs);
    }

    > p {
      margin-bottom: var(--spacing-2xs);
    }

    > p:last-child {
      margin-bottom: 0;
    }
  }

  ul ul {
    list-style-type: circle;
  }

  ul ul ul {
    list-style-type: square;
  }

  hr {
    width: 100%;
    height: 1px;
    margin: var(--spacing-xl) 0;
    border: none;
    background-color: var(--elevation-8);
  }

  blockquote {
    margin: 0 0 var(--spacing-md);
    padding: var(--spacing-xs) var(--spacing-md);
    border-left: 3px solid var(--primary-7);
    background-color: color-mix(in srgb, var(--elevation-10) 55%, transparent);
    color: var(--elevation-3);

    > :first-child {
      margin-top: 0;
    }

    > :last-child {
      margin-bottom: 0;
    }

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

  img {
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
    margin: var(--spacing-md) 0;
    border-radius: var(--radius-xs);
    border: 1px solid var(--elevation-8);
    pointer-events: auto;
  }

  // Inline code
  :not(pre) > code {
    font-family: var(--font-paragraph);
    font-size: 0.9em;
    color: var(--primary-3);
    background-color: var(--primary-10);
    border: 1px solid var(--primary-8);
    border-radius: 0.2rem;
    padding: 0.1em var(--spacing-2xs);
    white-space: break-spaces;
  }

  // Fenced / indented code blocks
  pre {
    margin: 0 0 var(--spacing-md);
    padding: var(--spacing-md);
    overflow-x: auto;
    background-color: var(--elevation-11);
    border: 1px solid var(--elevation-8);
    border-radius: var(--radius-xs);
    -webkit-overflow-scrolling: touch;

    code {
      display: block;
      font-family: var(--font-paragraph);
      font-size: var(--text-sm);
      line-height: 1.55;
      color: var(--elevation-2);
      background: none;
      border: none;
      border-radius: 0;
      padding: 0;
      white-space: pre;
      tab-size: 2;
    }
  }

  table {
    display: block;
    width: max-content;
    max-width: 100%;
    margin: 0 0 var(--spacing-md);
    border-collapse: collapse;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  thead {
    background-color: var(--elevation-10);
  }

  th,
  td {
    padding: var(--spacing-2xs) var(--spacing-sm);
    border: 1px solid var(--elevation-8);
    text-align: left;
    vertical-align: top;
  }

  th {
    color: var(--elevation-1);
    font-weight: 600;
  }

  td {
    color: var(--elevation-2);
  }

  tbody tr:nth-child(even) {
    background-color: color-mix(in srgb, var(--elevation-10) 40%, transparent);
  }

  input[type="checkbox"] {
    margin-right: var(--spacing-2xs);
    accent-color: var(--primary-5);
    vertical-align: middle;
  }
}
</style>
