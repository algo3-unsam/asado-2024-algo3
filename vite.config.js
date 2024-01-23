import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',      
    },
  },
  test: {
    globals: true,
    setupFiles: ['./setupTests.js'], 
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'json-summary'],
    },
  }
})