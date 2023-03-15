import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { matchPath } from 'react-router-dom'
import * as path from 'path';
//Para que me funcionara los typados js tuve que instalar: npm install --save-dev @types/node si no va pues hay que poner esto: "types": ["node"]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, ''), //Carpeta donde alojamos el archivo main.js
  base: './',
  build: {
    rollupOptions: {
      // external: [
      //   "react", // ignore react stuff
      //   "react-dom",
      // ],
      input: {
        main: path.resolve(__dirname, 'index.html'), //Indicamos la pagina que debe analizar
      },
      output: {
        dir: path.resolve(__dirname, 'dist'), //Donde se va a crear el build de nuestra aplicacion
        format: 'es', //Formato de ES modules
      },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false, //(Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
  },
  server: {
    port: 8080,
    host: true
  }
})
