import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@components": "src/components/index.ts",
      "@domain": "src/domain/index.ts",
      "@content": "src/content/index.ts",
    },
  },
  base: "/",
});
