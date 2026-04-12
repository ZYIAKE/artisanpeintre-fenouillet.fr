import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from '@prerenderer/rollup-plugin';
import path from 'path';

const allRoutes = [
  '/',
  '/services',
  '/services/peinture-interieure',
  '/services/peinture-exterieure',
  '/services/ravalement-facade',
  '/services/papier-peint-revetements',
  '/services/enduit-preparation',
  '/services/peinture-decorative',
  '/zones-intervention',
  '/zones-intervention/aucamville',
  '/zones-intervention/fonbeauzard',
  '/zones-intervention/gagnac-sur-garonne',
  '/zones-intervention/saint-alban',
  '/zones-intervention/launaguet',
  '/zones-intervention/castelginest',
  '/zones-intervention/beauzelle',
  '/zones-intervention/gratentour',
  '/zones-intervention/seilh',
  '/zones-intervention/bruguieres',
  '/zones-intervention/blagnac',
  '/zones-intervention/toulouse',
  '/zones-intervention/aussonne',
  '/zones-intervention/lunion',
  '/zones-intervention/cornebarrieu',
  '/zones-intervention/colomiers',
  '/zones-intervention/balma',
  '/zones-intervention/tournefeuille',
  '/zones-intervention/saint-orens-de-gameville',
  '/zones-intervention/cugnaux',
  '/tarifs',
  '/a-propos',
  '/contact',
  '/mentions-legales',
  '/politique-confidentialite',
  '/cookies',
  '/plan-du-site',
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: allRoutes,
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        maxConcurrentRoutes: 5,
        renderAfterTime: 3000,
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:\/\/localhost:\d+/g, 'https://artisanpeintre-fenouillet.fr');
        return renderedRoute;
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});
