import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://www.stem-online.hr',
  compressHTML: true,

  integrations: [
    sitemap({
      customPages: [
        'https://www.stem-online.hr/',
        'https://www.stem-online.hr/matematika',
        'https://www.stem-online.hr/fizika',
        'https://www.stem-online.hr/kemija',
        'https://www.stem-online.hr/instrukcije',
      ],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      }
    })
  ],

  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': [],
          }
        }
      }
    },
  },
});