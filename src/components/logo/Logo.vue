<script setup lang="ts">
import Mark from "./logo-variants/Mark.vue";
import { LOGOS } from "@domain";

defineProps<{
  variant: LOGOS;
}>();
</script>

<template>
  <div class="logo">
    <Mark v-if="variant === LOGOS.MARK" />
  </div>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  aspect-ratio: 1 / 1;
}
</style>
