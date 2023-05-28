import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  dotenv.config();

  return {
    plugins: [react()],
    server: {
      open: true,
      port: 4000,
    },
    preview: {
      open: true,
      port: 4000,
    },
    define: {
      'process.env': process.env,
    },
  };
});