import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Usa el puerto asignado por Render o 3000 por defecto
    host: true, // Permite acceso externo
    allowedHosts: ["bakery-m4by.onrender.com"] // Agrega el dominio de Render
  }
})
