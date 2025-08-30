import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    manifest: {
      name: 'Hastle Castle Portal Calc',
      short_name: 'Portal Calc',
      description: 'Portal resources calculator for Hustle Castle',
      theme_color: '#000000',
      display: "standalone",
      icons: [
        {
          "src": "/fav/web-app-manifest-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/fav/web-app-manifest-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})