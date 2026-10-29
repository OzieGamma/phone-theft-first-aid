// @ts-check
import { defineConfig } from 'astro/config';

// Static output only: `npm run build` writes plain files to dist/ for any static host.
export default defineConfig({
  site: 'https://phone-theft-first-aid.org',
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
});
