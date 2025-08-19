import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({ compilerOptions: { customElement: true } })],
  build: {
    lib: {
      entry: "src/lib/Widget.svelte",
      name: 'ChatWidget',
      fileName: 'chat-widget',
      formats: ['es','iife']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        globals: {}
      }
    }
  }
})
