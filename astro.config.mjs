import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://www.stem-online.hr',

  integrations: [
    sitemap(),
    partytown()
  ]
});