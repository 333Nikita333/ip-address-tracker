import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/ip-address-tracker/",
  server: {
    open: './',
    port: 4000,
  },
  preview: {
    open: './',
    port: 4000,
  },
})
