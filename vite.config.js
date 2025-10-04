import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(
    {babel: {
        plugins: ['@babel/plugin-transform-private-property-in-object']
      }}
  )],
  server: {
    proxy: {
      "/api": "http://localhost:3000", // proxy API to vercel dev
    },
    fs: {
      strict: false, // Allow access to public files
    },
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  build: {
    outDir: 'dist'
  },
})