/** The site's author and where its source code lives. */
export const author = '@OzieGamma';
export const repo = 'https://github.com/OzieGamma/phone-theft-first-aid';

/** A path inside the site, under the base path it is served from ('/recovery/' → '/phone-theft-first-aid/recovery/'). */
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
