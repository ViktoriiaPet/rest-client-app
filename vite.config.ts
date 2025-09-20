import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { envOnlyMacros } from 'vite-env-only';

export default defineConfig(({ mode }) => {
  const isTest = mode === 'test' || !!process.env.VITEST;

  return {
    plugins: [tailwindcss(), !isTest && reactRouter(), envOnlyMacros()],
    define: {
      global: 'globalThis',
      'process.env': {},
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
