import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
