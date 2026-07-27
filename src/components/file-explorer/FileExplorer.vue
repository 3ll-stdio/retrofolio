<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import type { ComponentPublicInstance } from "vue";
import { type IFile } from "../../domain";
import { files } from "../../content";

const emits = defineEmits(["handleFileChange"]);
const filesArray: IFile[] = Object.values(files);
const activeIndex = ref(0);
const rowRefs = ref<(HTMLTableRowElement | null)[]>([]);

const setRowRef = (
  el: Element | ComponentPublicInstance | null,
  index: number
) => {
  rowRefs.value[index] = el as HTMLTableRowElement | null;
};

const handleClick = (file: IFile, index: number) => {
  activeIndex.value = index;
  emits("handleFileChange", file);
};

const focusAndSelectRow = async (index: number) => {
  activeIndex.value = index;
  emits("handleFileChange", filesArray[index]);
  await nextTick();
  rowRefs.value[index]?.focus();
};

const handleArrowNavigation = (index: number, direction: "up" | "down") => {
  const newIndex = direction === "up" ? index - 1 : index + 1;
  const filesCount = filesArray.length;
  const validIndex = (newIndex + filesCount) % filesCount;
  focusAndSelectRow(validIndex);
};

const handleRowKeydown = (
  index: number,
  file: IFile,
  event: KeyboardEvent
) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    handleArrowNavigation(index, "up");
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    handleArrowNavigation(index, "down");
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleClick(file, index);
  }
};

onMounted(() => {
  handleClick(filesArray[0], 0);
});
</script>

<template>
  <div class="file-explorer">
    <table>
      <thead>
        <tr>
          <th class="p3">File Name</th>
          <th class="p3">Owner</th>
          <th class="p3">Type</th>
          <th class="p3">Date</th>
        </tr>
      </thead>
      <tbody role="listbox" aria-label="File options">
        <tr
          v-for="(file, index) in filesArray"
          :key="index"
          :ref="(el) => setRowRef(el, index)"
          @click="handleClick(file, index)"
          @focus="activeIndex = index"
          @keydown="handleRowKeydown(index, file, $event)"
          :class="{ active: activeIndex === index }"
          :aria-selected="activeIndex === index"
          :tabindex="activeIndex === index ? 0 : -1"
          role="option"
        >
          <td>{{ file.metaInfo.name }}</td>
          <td>{{ file.metaInfo.owner }}</td>
          <td>{{ file.metaInfo.type }}</td>
          <td>{{ file.metaInfo.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.file-explorer {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  position: sticky;
  top: 0;
  z-index: 1;
}

tbody {
  user-select: none;
}

tbody tr {
  cursor: pointer;
  transition: background-color var(--duration-1) var(--easing-1);

  &:hover,
  &:focus {
    background-color: var(--primary-9);
  }

  &:hover td,
  &:focus td {
    color: var(--primary-2);
  }

  &:active {
    background-color: var(--primary-5);
  }

  &:active td {
    color: var(--elevation-11);
  }
}

th {
  background-color: var(--elevation-9);
  text-align: left;
}

th,
td {
  padding: var(--spacing-xs) 0;

  &:first-child {
    padding-left: var(--spacing-md);
  }

  &:last-child {
    padding-right: var(--spacing-md);
  }
}

td {
  width: 25%;
  color: var(--elevation-4);
  transition: color var(--duration-1) var(--easing-1);
}

.active {
  background-color: var(--primary-5);

  & td {
    color: var(--elevation-11);
  }

  &:hover,
  &:focus {
    background-color: var(--primary-5);
  }

  &:hover td,
  &:focus td {
    color: var(--elevation-11);
  }

  &:active {
    background-color: var(--primary-5);
  }
}
</style>
