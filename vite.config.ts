import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    React(),
    tsconfigPaths(),
    tailwindcss(),
    
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './app/components'),
      '@routes': path.resolve(__dirname, './app/routes'),
      '@utils': path.resolve(__dirname, './app/utils'),
      '@hooks': path.resolve(__dirname, './app/hooks'),
      '@domain': path.resolve(__dirname, './app/domain'),
      '@assets': path.resolve(__dirname, './app/assets'),
      '@style': path.resolve(__dirname, './app/styles'),
      '@services': path.resolve(__dirname, './app/services'), 
      '@store': path.resolve(__dirname, './app/store'),
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5173,
    cors: true,
    host: true
  },
});


