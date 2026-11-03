// @ts-check
import { defineConfig } from 'astro/config';

// Static output only: `npm run build` writes plain files to dist/ for any static host.
// The site lives at the root of its domain. Set SITE and BASE_PATH only to serve it elsewhere, such as under a sub-path.
export default defineConfig({
  site: process.env.SITE ?? 'https://phone-theft-first-aid.org',
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // One fewer request on 2G: every page carries its own CSS.
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  // Dev and preview only: lets a cloudflared quick tunnel reach the local server for phone testing.
  server: {
    allowedHosts: ['.trycloudflare.com'],
  },
});
