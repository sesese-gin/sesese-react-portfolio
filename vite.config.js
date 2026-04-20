import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://sesese-react-portfolio.vercel.app',
  server: {
  watch: {
      usePolling: true, // OSの代わりにViteが自分で見に行く
    }
  }
})
