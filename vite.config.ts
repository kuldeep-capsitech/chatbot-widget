import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "ChatWidget",
      // formats: ['iife','cjs', 'es', 'system', 'umd'],
      formats: ["iife"],
    },
    minify: "terser", // better tree-shaking and compresses more aggressively
    terserOptions: {
      compress: {
        passes: 6,
        ecma: 2020,
      },
    },

    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        compact: true, // reduces whitespace in output
        globals: {},
      },
      treeshake: "smallest",
    },
    outDir: "dist",
  },
});
