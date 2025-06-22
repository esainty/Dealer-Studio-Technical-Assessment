import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true, 
    }),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@routes': path.resolve(__dirname, '/src/routes'),
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@styled-system': path.resolve(__dirname, '/styled-system'),
    }
  }
})
