import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: '/WeddingWebsite/', // добавьте эту строку!
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#6b8768',
          'link-color': '#8fa58c',
          'border-radius-base': '5px',
        },
        javascriptEnabled: true,
      },
    },
  },
});
