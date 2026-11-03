/** The site's author and where its source code lives. */
export const author = '@OzieGamma';
export const repo = 'https://github.com/OzieGamma/phone-theft-first-aid';

/** The printable checklist in each language, written to the site root by src/integrations/pdf.ts. */
export const pdfFile = (lang: string) => `phone-theft-first-aid-checklist${lang === 'en' ? '' : `-${lang}`}.pdf`;

/**
 * A path inside the site, under the base path it is served from and the language prefix
 * ('/recovery/', 'fr' → '/fr/recovery/'). English has no prefix.
 */
export const url = (path: string, lang = 'en') =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + (lang === 'en' ? '' : `/${lang}`) + path;
