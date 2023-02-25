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
      '@routers': path.resolve(__dirname, './src/routers'),
      '@fetches': path.resolve(__dirname, './src/fetches'),
    },
  },
  server: {
    proxy: {
      '/auth/login': {
        target: 'http://146.56.168.39/api/v1',
        changeOrigin: true,
      },
      '/auth/logout': {
        target: 'http://146.56.168.39/api/v1',
        changeOrigin: true,
      },
      '/users': {
        target: 'http://146.56.168.39/api/v1/',
        changeOrigin: true,
      },
      '/categories': {
        target: 'http://146.56.168.39/api/v1/',
        changeOrigin: true,
      },
      '/products': {
        target: 'http://146.56.168.39/api/v1/',
        changeOrigin: true,
      },
      '/parts': {
        target: 'http://146.56.168.39/api/v1/',
        changeOrigin: true,
      },
    },
  },
});
