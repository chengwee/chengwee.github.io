import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Empty base allows the app to be deployed to any path (root or subdirectory)
  // using relative paths for assets, which fixes issues with GitHub Pages project sites.
  base: '', 
  build: {
    outDir: 'dist',
  },
});