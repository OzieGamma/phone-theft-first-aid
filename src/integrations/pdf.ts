// Prints /print/checklist/ to /phone-theft-first-aid-checklist.pdf with headless Chromium.
// Build: pages are served straight from dist/ to the browser (no server); the PDF is written to dist/
// and the print page removed. Dev: the dev server prints the PDF fresh on each request.
// Either way, every request outside the site is refused.
// Needs the browser once per machine: npx playwright install chromium
import type { AstroIntegration } from 'astro';
import { readFile, rm, writeFile } from 'node:fs/promises';
import { extname } from 'node:path';
import { chromium, type Route } from 'playwright';
import { pdfFile } from '../lib/site.ts';

const page = 'print/checklist/';
const origin = 'http://pdf.local';
const types: Record<string, string> = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

/** Opens `address` and prints it. `serve` answers the site's own requests; requests elsewhere are refused. */
async function print(address: string, serve?: (route: Route, url: URL) => Promise<void>): Promise<Buffer> {
  const browser = await chromium.launch();
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
          if (req.url?.split('?')[0] !== base + pdfFile) return next();
          try {
            const body = await print(`http://${req.headers.host}${base}${page}`);
            res.setHeader('Content-Type', 'application/pdf');
            res.end(body);
          } catch (error) {
            logger.error(`could not print ${pdfFile}: ${error}`);
            next(error);
          }
        });
      },
      'astro:build:done': async ({ dir, logger }) => {
        const body = await print(origin + base + page, async (route, url) => {
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
        await writeFile(new URL(pdfFile, dir), body);
        logger.info(`wrote ${pdfFile}`);
        await rm(new URL(page.split('/')[0] + '/', dir), { recursive: true });
      },
    },
  };
}
