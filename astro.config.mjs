// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cílová produkční doména. Po přepnutí DNS z Wixu sem patří https://www.artsome.cz
// (canonical URL, sitemap i og:url se generují z této hodnoty).
const SITE = 'https://www.artsome.cz';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  // Přesměrování starých cest z faceliftu (artsome.vercel.app/*.html).
  // Starý /index.html řeší cleanUrls ve vercel.json.
  redirects: {
    '/reference.html': '/reference/',
    '/kontakt.html': '/kontakt/',
  },
  build: {
    // /sluzby/malovani/index.html → čisté URL bez přípony
    format: 'directory',
  },
});
