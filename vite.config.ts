import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sitemap from 'vite-plugin-sitemap';
import { robots } from 'vite-plugin-robots';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',

  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1600,
  },

  plugins: [
    tailwindcss(),
    vue(),
    robots(),

    sitemap({
      hostname: 'https://portfolio-uiux-6i5g.vercel.app/',
      changefreq: 'hourly',
      priority: 1,
    }),
  ],

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  server: {},

  optimizeDeps: {
    exclude: ['@tailwindcss/vite'],
    force: true,
  },
});