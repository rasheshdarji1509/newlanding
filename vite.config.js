import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'react-dom': 'react-dom/client'
    }
  },
  build: {
    rollupOptions: {
      external: ['react-dom/client'] 
    }
  }
});
