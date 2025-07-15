import { defineConfig } from "vite";

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
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      headless: true,
      instances: [
        {
          browser: "chromium",
        },
      ],
    },
  },
});
