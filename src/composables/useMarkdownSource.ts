import { onBeforeUnmount, ref, watch, type Ref } from "vue";

export const useMarkdownSource = (source: Ref<string>) => {
  const content = ref("");
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  let controller: AbortController | null = null;

  const load = async (url: string) => {
    controller?.abort();
    controller = new AbortController();

    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) {
        throw new Error(`Failed to load markdown (${response.status})`);
      }

      content.value = await response.text();
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }

      content.value = "";
      error.value = "Could not load this markdown file.";
      console.error("Error loading Markdown file:", err);
    } finally {
      isLoading.value = false;
    }
  };

  watch(
    source,
    (nextSource) => {
      void load(nextSource);
    },
    { immediate: true }
  );

  onBeforeUnmount(() => {
    controller?.abort();
  });

  return {
    content,
    isLoading,
    error,
  };
};
