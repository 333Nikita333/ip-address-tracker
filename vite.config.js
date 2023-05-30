import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
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
  };
});
