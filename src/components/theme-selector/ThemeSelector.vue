<script setup lang="ts">
import { onMounted, ref } from "vue";
import { THEMES } from "@domain";

const themes: string[] = Object.values(THEMES).map((theme) => theme);

const isOpen = ref(false);
const activeTheme = ref(themes[0]);

const handleThemeChange = (theme: string) => {
  activeTheme.value = theme;

  const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
  body.setAttribute("data-theme", theme);

  closeDropdown();
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

onMounted(() => {
  handleThemeChange(themes[0]);
});
</script>

<template>
  <div class="theme-selector">
    <button
      class="theme-selector-btn"
      @click="toggleDropdown"
      :style="isOpen ? 'z-index: 60' : ''"
    >
      <div class="circle active-theme" />
    </button>

    <ul v-show="isOpen" class="theme-dropdown">
      <li
        v-for="(theme, index) in themes"
        :key="index"
        class="theme-option"
        @click="handleThemeChange(theme)"
      >
        <div class="circle" :style="`background-color: var(--${theme}-5)`" />
      </li>
    </ul>

    <div v-show="isOpen" class="backdrop" @click="closeDropdown" />
  </div>
</template>

<style scoped lang="scss">
.theme-selector {
  height: 100%;
  position: relative;
}

.theme-selector-btn {
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

.active-theme {
  background-color: var(--primary-5);
}

.circle {
  width: var(--spacing-md);
  height: var(--spacing-md);
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-circle);
}

.theme-dropdown {
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

.theme-option {
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

.theme-option .circle {
  width: var(--spacing-md);
  height: var(--spacing-md);
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-circle);
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
