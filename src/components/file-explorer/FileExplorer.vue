<script lang="ts">
import { IFile } from "@domain";

export default {
  name: "FileExplorer",
  props: {
    files: {
      type: Array<IFile>,
      required: true,
    },
    handleFileChange: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick(file: IFile, event: Event) {
      const activeElement = document.querySelector(".active");
      if (activeElement) {
        activeElement.classList.remove("active");
      }

      const target = event.currentTarget as HTMLElement;
      target.classList.add("active");

      this.handleFileChange(file);
    },
    handleArrowNavigation(index: number, direction: string, event: Event) {
      event.preventDefault();
      const newIndex = direction === "up" ? index - 1 : index + 1;
      const filesCount = this.files.length;
      const validIndex = (newIndex + filesCount) % filesCount;

      const focusedElement = document.activeElement as HTMLElement;
      if (focusedElement) focusedElement.blur();

      const target = document.querySelector(
        `.file-explorer tr[data-file-index="${validIndex.toString()}"]`
      ) as HTMLElement;

      if (target) target.focus();
    },
  },
};
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
      <tbody>
        <tr
          v-for="(file, index) in files"
          :key="index"
          @click="handleClick(file, $event)"
          @keyup.enter="handleClick(file, $event)"
          @keyup.up="handleArrowNavigation(index, 'up', $event)"
          @keyup.down="handleArrowNavigation(index, 'down', $event)"
          :data-file-index="index"
          :class="index ? '' : 'active'"
          tabindex="0"
        >
          <td>{{ file.name }}</td>
          <td>{{ file.owner }}</td>
          <td>{{ file.type }}</td>
          <td>{{ file.date }}</td>
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
