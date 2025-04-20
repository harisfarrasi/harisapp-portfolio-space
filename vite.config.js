// This file is used to configure Vite, a build tool for modern web applications.
// It includes plugins for React and Tailwind CSS.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], 
})
