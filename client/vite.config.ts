import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@type': path.resolve(__dirname, './src/types'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@images': path.resolve(__dirname, './src/images'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  server: {
    proxy: {
      '/login': {
        target: 'http://52.198.80.244/api/v1/auth',
        changeOrigin: true,
      },
      '/users': {
        target: 'http://52.198.80.244/api/v1/',
        changeOrigin: true,
      },
      '/categories': {
        target: 'http://52.198.80.244/api/v1/',
        changeOrigin: true,
      },
    },
  },
});
