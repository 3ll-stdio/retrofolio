<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import { ICarousel } from "@domain";

const props = defineProps<{
  images: ICarousel["images"];
}>();

const activeImage = ref(props.images[0]);

const handleClick = (image: string, index: number) => {
  const activeElement = document.querySelector(".carousel .active");
  if (activeElement) activeElement.classList.remove("active");

  const target = document.querySelector(
    `.carousel-imgs img[data-image-index="${index}"]`
  );
  if (target) target.classList.add("active");

  activeImage.value = image;
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

  const focusedElement = document.activeElement as HTMLElement;
  if (focusedElement) focusedElement.blur();

  const target = document.querySelector(
    `.carousel-imgs img[data-image-index="${validIndex.toString()}"]`
  ) as HTMLElement;

  if (target) {
    target.focus();
    target.click();
  }
};

onMounted(() => {
  handleClick(props.images[0], 0);
});

watchEffect(() => {
  activeImage.value = props.images[0];
});
</script>

<template>
  <div class="carousel">
    <div class="display-img">
      <img :src="activeImage" />
    </div>
    <div class="carousel-imgs">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt=""
        @click="handleClick(image, index)"
        @keyup.enter="handleClick(image, index)"
        @keyup.left="handleArrowNavigation(index as number, 'left', $event)"
        @keyup.right="handleArrowNavigation(index as number, 'right', $event)"
        :data-image-index="index"
        tabindex="0"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "src/styles/breakpoints.scss" as *;

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
