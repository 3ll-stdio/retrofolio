<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { type ICarousel } from "../../domain";

const props = defineProps<{
  images: ICarousel["images"];
}>();

const activeIndex = ref(0);
const activeImage = computed(() => props.images[activeIndex.value] ?? "");

const handleClick = (index: number) => {
  activeIndex.value = index;
};

const handleArrowNavigation = (
  index: number,
  direction: string,
  event: Event
) => {
  event.preventDefault();
  const newIndex = direction === "left" ? index - 1 : index + 1;
  const filesCount = props.images.length;
  const validIndex = (newIndex + filesCount) % filesCount;
  activeIndex.value = validIndex;
};

watch(
  () => props.images,
  () => {
    activeIndex.value = 0;
  }
);

const imageAlt = (index: number) => `Project image ${index + 1}`;
</script>

<template>
  <div class="carousel">
    <div class="display-img">
      <img :src="activeImage" :alt="imageAlt(activeIndex)" />
    </div>
    <div class="carousel-imgs">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="imageAlt(index)"
        @click="handleClick(index)"
        @keyup.enter="handleClick(index)"
        @keyup.left="handleArrowNavigation(index as number, 'left', $event)"
        @keyup.right="handleArrowNavigation(index as number, 'right', $event)"
        :class="{ active: activeIndex === index }"
        :aria-selected="activeIndex === index"
        tabindex="0"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../../styles/breakpoints.scss" as *;

.carousel {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.display-img {
  width: 100%;
  height: 25rem;
  padding: var(--spacing-md);

  @include lg {
    height: 5rem;
    max-height: 100%;
    flex-grow: 1;
  }
}

.display-img img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
  background-color: var(--primary-1);
  object-fit: cover;
  border: 1px solid var(--elevation-8);
}

.carousel-imgs {
  display: inline-flex;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  padding-top: 0;
  width: 100%;
  overflow-x: auto;
}

.carousel-imgs img {
  height: var(--spacing-5xl);
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-sm);
  cursor: pointer;
  pointer-events: all;
  filter: grayscale(1);
  transition: filter var(--duration-1) var(--easing-1),
    border var(--duration-1) var(--easing-1);

  &:hover,
  &:focus {
    filter: grayscale(0);
  }
}

.carousel img.active {
  border: 2px solid var(--primary-3);
  filter: grayscale(0);

  &:hover,
  &:focus-visible {
    filter: grayscale(0) blur(1px);
  }
}
</style>
