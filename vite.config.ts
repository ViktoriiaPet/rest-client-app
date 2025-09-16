import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const isTest = mode === 'test' || !!process.env.VITEST;

  return {
    plugins: [tailwindcss(), !isTest && reactRouter()],
    define: {
      global: 'globalThis',
      'process.env': {},
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      environment: 'jsdom',
      coverage: {
        provider: 'v8',
        all: true,
        include: ['src/**/*.{ts,tsx}'],
        exclude: [
          'src/**/*.{test,spec}.{ts,tsx}',
          '**/node_modules/**',
          '**/dist/**',
          'src/index.{ts,tsx}',
          'src/**/types/**',
          'src/components/ui/**',
          'src/*.d.ts',
          'src/routes.ts',
        ],
        reporter: ['text', 'html', 'lcov'],
      },
    },
  };
});
