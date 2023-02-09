import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    hmr: true,
    open: true,
    port: 3000,
  },
  base: './',
})