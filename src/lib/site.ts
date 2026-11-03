/** The site's author and where its source code lives. */
export const author = '@OzieGamma';
export const repo = 'https://github.com/OzieGamma/phone-theft-first-aid';
/** The printable checklist, written to the site root by src/integrations/pdf.ts. */
export const pdfFile = 'phone-theft-first-aid-checklist.pdf';

/** A path inside the site, under the base path it is served from ('/recovery/' → '/phone-theft-first-aid/recovery/'). */
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
