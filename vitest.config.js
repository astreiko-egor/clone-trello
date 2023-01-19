import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vitePluginVueTypeImports from 'vite-plugin-vue-type-imports';

export default defineConfig({
  plugins: [vue(), vueJsx(), vitePluginVueTypeImports()],
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': './'
    },
  }
})