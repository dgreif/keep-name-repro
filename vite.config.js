import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    force: true, // Force so we get the error consistently
    rollupOptions: {
      // Removing this option causes the error to not occur
      keepNames: true, // Preserve class names for catalyst controllers
    },
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
