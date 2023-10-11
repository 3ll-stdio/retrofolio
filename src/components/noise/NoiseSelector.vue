<script setup lang="ts">
import { onMounted, ref } from "vue";
import { NOISES } from "@domain";

const noises: string[] = Object.values(NOISES).map(
  (noise) => `/assets/noises/${noise}.gif`
);

const isOpen = ref(false);
const activeNoise = ref(noises[0]);

const handleNoiseChange = (noise: string) => {
  activeNoise.value = noise;

  const noiseHTML = document.getElementById("noise") as HTMLImageElement;
  if (noiseHTML) noiseHTML.src = noise;

  isOpen.value = false;
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  handleNoiseChange(noises[0]);
});
</script>

<template>
  <div class="noise-selector">
    <button class="noise-selector-btn" @click="toggleDropdown">
      <img class="circle" :src="activeNoise" />
    </button>

    <ul v-show="isOpen" class="noise-dropdown">
      <li
        v-for="(noise, index) in noises"
        :key="index"
        class="noise-option"
        @click="handleNoiseChange(noise)"
      >
        <img :src="noise" :alt="`Noise ${index}`" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.noise-selector {
  height: 100%;
  position: relative;
}

.noise-selector-btn {
  display: inline-flex;
  gap: var(--spacing-2xs);
  align-items: center;
  padding: var(--spacing-2xs) var(--spacing-xs);
  height: 100%;
  color: var(--elevation-4);
  user-select: none;
  transition: background-color var(--duration-1) var(--easing-1);

  &:hover,
  &:focus {
    background-color: var(--elevation-7);
  }

  &:active {
    background-color: var(--elevation-6);
  }
}

.circle {
  width: var(--spacing-md);
  height: var(--spacing-md);
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-circle);
  background-color: var(--primary-5);
}

.noise-dropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 2.2rem;
  background-color: var(--elevation-8);
  border-radius: var(--radius-xs);
  overflow: hidden;
}

.noise-option {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs);
  cursor: pointer;
  pointer-events: all;
  border-top: var(--highlight-1);
  border-bottom: var(--shadow-1);

  &:hover,
  &:focus-visible {
    background-color: var(--primary-5);
  }
}

.noise-option img {
  width: var(--spacing-md);
  height: var(--spacing-md);
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-circle);
}
</style>
