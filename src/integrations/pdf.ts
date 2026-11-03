// Prints /print/checklist/ to /phone-theft-first-aid-checklist.pdf with headless Chromium, and each
// other language too (/print/fr/checklist/ to …-fr.pdf). Build: pages are served straight from dist/ to the
// browser (no server); the PDFs are written to dist/ and the print pages removed.
// Dev: the dev server prints the PDF fresh on each request.
// Either way, every request outside the site is refused.
// Uses a Chrome already on the machine (GitHub's runners have one), so nothing is downloaded.
// No Chrome? Set CHROME_PATH to any Chromium-based browser, or run once: npx playwright-core install chromium
import type { AstroIntegration } from 'astro';
import { readFile, rm, writeFile } from 'node:fs/promises';
import { extname } from 'node:path';
import { chromium, type Browser, type Route } from 'playwright-core';
import { locales } from '../i18n/index.ts';
import { pdfFile } from '../lib/site.ts';

/** The print page for a language, under the base path. */
const page = (lang: string) => (lang === 'en' ? 'print/checklist/' : `print/${lang}/checklist/`);
const origin = 'http://pdf.local';
const types: Record<string, string> = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

/** CHROME_PATH if set, else installed Chrome, else Edge, else a Chromium from `playwright-core install`. */
async function launch(): Promise<Browser> {
  if (process.env.CHROME_PATH) return chromium.launch({ executablePath: process.env.CHROME_PATH });
  for (const channel of ['chrome', 'msedge', undefined]) {
    try {
      return await chromium.launch({ channel });
    } catch {}
  }
  throw new Error('No Chrome found to print the checklist PDF. Install Chrome, set CHROME_PATH, or run: npx playwright-core install chromium');
}

/** Opens `address` and prints it. `serve` answers the site's own requests; requests elsewhere are refused. */
async function print(address: string, serve?: (route: Route, url: URL) => Promise<void>): Promise<Buffer> {
  const browser = await launch();
  try {
    const tab = await browser.newPage();
    const site = new URL(address).origin;
    await tab.route('**/*', (route) => {
      const url = new URL(route.request().url());
      if (url.origin !== site) return route.abort();
      return serve ? serve(route, url) : route.continue();
    });
    await tab.goto(address, { waitUntil: 'networkidle' });
    await tab.evaluate(() => document.fonts.ready);
    return await tab.pdf({ preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });
  } finally {
    await browser.close();
  }
}

export default function pdf(): AstroIntegration {
  let base = '/';
  return {
    name: 'checklist-pdf',
    hooks: {
      'astro:config:done': ({ config }) => {
        base = config.base.replace(/\/?$/, '/');
      },
      'astro:server:setup': ({ server, logger }) => {
        server.middlewares.use(async (req, res, next) => {
          const lang = locales.find((other) => req.url?.split('?')[0] === base + pdfFile(other));
          if (!lang) return next();
          try {
            const body = await print(`http://${req.headers.host}${base}${page(lang)}`);
            res.setHeader('Content-Type', 'application/pdf');
            res.end(body);
          } catch (error) {
            logger.error(`could not print ${pdfFile(lang)}: ${error}`);
            next(error);
          }
        });
      },
      'astro:build:done': async ({ dir, logger }) => {
        for (const lang of locales) {
          const body = await print(origin + base + page(lang), async (route, url) => {
            if (!url.pathname.startsWith(base)) return route.abort();
            let path = decodeURIComponent(url.pathname.slice(base.length));
            if (path === '' || path.endsWith('/')) path += 'index.html';
            try {
              const file = await readFile(new URL(path, dir));
              await route.fulfill({ body: file, contentType: types[extname(path)] ?? 'application/octet-stream' });
            } catch {
              await route.fulfill({ status: 404 });
            }
          });
          await writeFile(new URL(pdfFile(lang), dir), body);
          logger.info(`wrote ${pdfFile(lang)}`);
        }
        await rm(new URL('print/', dir), { recursive: true });
      },
    },
  };
}
