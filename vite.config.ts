import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		lib: {
			entry: 'src/index.tsx',
			name: 'ChatWidget',
			formats: ['iife'],
		},
		minify: 'terser',  // better tree-shaking and compresses more aggressively
		terserOptions: {
		compress: {
			passes: 6,
			ecma: 2020,
		}
		},

		rollupOptions: {
		output: {
			inlineDynamicImports: true,
			compact: true, // reduces whitespace in output
			globals: {}
		},
		},
		outDir: 'dist',
	}
});
