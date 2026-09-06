import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const dir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "./",
  server: { host: true, port: 3000 },
  preview: { host: true, port: 3000 },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(dir, "index.html"),
        notes: resolve(dir, "notes.html"),
      },
    },
  },
});
