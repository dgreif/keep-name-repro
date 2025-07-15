import { defineConfig } from "rolldown-vite";

export default defineConfig({
  optimizeDeps: {
    rollupOptions: {
      keepNames: true, // Preserve class names for catalyst controllers
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
