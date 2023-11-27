import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'frontend2', // name of the fed group...
      filename: 'frontend2.js', // default file name
      // Modules to expose
      exposes: { 
        './App': './src/App.jsx'
      },
      shared: ['react','react-dom'] // libs/deps to be shared
    })
  ],
  server: {
    port: 5001,
    strictPort: true
  },
  build: {
    target: 'esnext', // needed to final build
    minify: false, 
    cssCodeSplit: false
  },
  base: process.env.NODE_ENV === "production" ? "http://localhost:5001/" : "/",
})
