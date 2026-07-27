<script setup lang="ts">
import { computed, ref } from "vue";
import { NOISE_PRESET_OPTIONS, NOISE_PRESETS, type NoisePresetOption } from "@domain";
import { useNoisePreset } from "../../composables/useNoisePreset";

const presets: NoisePresetOption[] = NOISE_PRESET_OPTIONS;

const isOpen = ref(false);
const { activeNoisePreset, setNoisePreset } = useNoisePreset();

const handleNoiseChange = (preset: NOISE_PRESETS) => {
  setNoisePreset(preset);
  isOpen.value = false;
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const dropdownId = "noise-dropdown";
const activeNoise = computed(() => activeNoisePreset.value);
</script>

<template>
  <div class="noise-selector">
    <button
      class="noise-selector-btn"
      @click="toggleDropdown"
      :style="isOpen ? 'z-index: 60' : ''"
      :aria-expanded="isOpen"
      :aria-controls="dropdownId"
      aria-label="Select noise preset"
    >
      <span class="circle" :class="`preset-${activeNoise}`" aria-hidden="true" />
    </button>

    <ul v-show="isOpen" :id="dropdownId" class="noise-dropdown" role="listbox">
      <li
        v-for="preset in presets"
        :key="preset.value"
        class="noise-option"
        role="option"
      >
        <button
          type="button"
          @click="handleNoiseChange(preset.value)"
          :aria-selected="activeNoise === preset.value"
          :aria-label="`Use ${preset.label.toLowerCase()} noise preset`"
        >
          <span class="circle" :class="`preset-${preset.value}`" aria-hidden="true" />
        </button>
      </li>
    </ul>

    <div v-show="isOpen" class="backdrop" @click="closeDropdown" />
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
  position: relative;

  &:hover,
  &:focus-visible {
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
  border: 1px solid rgba(0, 0, 0, 0.35);
}

.preset-soft {
  background-image: radial-gradient(circle at 30% 35%, #d1d1d1 0%, #8f8f8f 70%);
}

.preset-medium {
  background-image: radial-gradient(circle at 35% 35%, #d8d8d8 0%, #686868 75%);
}

.preset-strong {
  background-image: radial-gradient(circle at 30% 30%, #efefef 0%, #4a4a4a 75%);
}

.preset-flicker {
  background-image: radial-gradient(circle at 35% 35%, #e4e4e4 0%, #5f5f5f 80%);
}

.preset-speckle {
  background-color: #6a6a6a;
  background-image:
    radial-gradient(circle at 22% 28%, #efefef 0 1.1px, transparent 1.3px),
    radial-gradient(circle at 68% 18%, #2e2e2e 0 1px, transparent 1.2px),
    radial-gradient(circle at 42% 62%, #f2f2f2 0 1.2px, transparent 1.4px),
    radial-gradient(circle at 78% 72%, #1f1f1f 0 1.1px, transparent 1.3px),
    radial-gradient(circle at 18% 78%, #d8d8d8 0 0.9px, transparent 1.1px),
    radial-gradient(circle at 55% 40%, #3a3a3a 0 0.8px, transparent 1px);
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
  z-index: 60;
}

.noise-option {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs);
  cursor: pointer;
  pointer-events: all;
  border-top: var(--highlight-1);
  border-bottom: var(--shadow-1);
}

.noise-option button {
  display: inline-flex;
  padding: var(--spacing-xs);
  align-items: center;
  gap: var(--spacing-2xs);
}

.noise-option:hover,
.noise-option:focus-within {
  background-color: var(--primary-5);
}

.noise-option .circle {
  width: var(--spacing-md);
  height: var(--spacing-md);
}

.backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
}
</style>
