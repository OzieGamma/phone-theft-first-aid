// Official stolen-phone pages by country, read at build time from src/data/sources.csv.
// The CSV is the research database: one row per organisation, with or without a page.
// The site shows only pages that were checked (status "verified") from the categories below.
import raw from '../data/sources.csv?raw';

import { t, type Lang } from '../i18n';

/** Which kinds of organisation to show, in this order within a country: public bodies first, then companies. Labels are in src/i18n. */
const order = [
  'Government',
  'Regulator',
  'Police',
  'Cyber agency',
  'Consumer org',
  'Security nonprofit',
  'Telco',
  'Manufacturer',
  'Tech platform',
  'Finance industry',
  'Industry body',
];

export interface Source {
  label: string;
  detail: string;
  href: string;
}

/** RFC 4180 CSV: quoted fields may hold commas, newlines and doubled quotes. */
function parse(text: string): Record<string, string>[] {
  const rows: string[][] = [[]];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') field += text[i++];
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') rows.at(-1)!.push(field), (field = '');
    else if (c === '\n') rows.at(-1)!.push(field.replace(/\r$/, '')), (field = ''), rows.push([]);
    else field += c;
  }
  if (field) rows.at(-1)!.push(field);
  const [head, ...body] = rows.filter((row) => row.length > 1);
  return body.map((row) => Object.fromEntries(head.map((key, i) => [key.replace(/^﻿/, ''), row[i] ?? ''])));
}

const rows = parse(raw).filter((row) => row.status === 'verified' && row.url && order.includes(row.category));

// The CSV names countries in English. Every two-letter region code that has an English name, by that name,
// so the name can be shown in the page's language. Names with no code stay in English, as Hong Kong does
// (its full name, "Hong Kong SAR China", is too long).
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const englishRegions = new Intl.DisplayNames('en', { type: 'region', fallback: 'none' });
const regionCodes = new Map<string, string>([
  // Names in the CSV that differ from the ones Intl uses.
  ['Bosnia and Herzegovina', 'BA'],
  ['Czech Republic', 'CZ'],
  ["Côte d'Ivoire", 'CI'],
  ['Myanmar', 'MM'],
  ['Trinidad and Tobago', 'TT'],
  ['Turkey', 'TR'],
]);
for (const a of letters)
  for (const b of letters) {
    const name = englishRegions.of(a + b);
    if (name && !regionCodes.has(name)) regionCodes.set(name, a + b);
  }

/** Official pages grouped by country, in the language of the page: Worldwide first, then countries A to Z. */
export function countries(lang: Lang) {
  const ui = t(lang).sources;
  const regions = new Intl.DisplayNames(lang, { type: 'region' });
  const languageNames = new Intl.DisplayNames(lang, { type: 'language' });
  const pageLanguage = languageNames.of(lang);
  // "fr/en", "en;ca", "EN", "Arabic" → language names, the page's own language left out.
  const languages = (value: string) =>
    value
      .split(/[/;,]/)
      .map((code) => code.trim())
      .filter(Boolean)
      .map((code) => (code.length > 3 ? code : (languageNames.of(code.toLowerCase()) ?? code)))
      .filter((name) => name !== pageLanguage);
  const countryName = (english: string) => {
    const code = regionCodes.get(english);
    return code ? (regions.of(code) ?? english) : english;
  };

  const groups = new Map<string, (Source & { rank: number })[]>();
  for (const row of rows) {
    // Rows under the Global region name a region, not a country ("Global", "Europe", "North America").
    const country = row.region === 'Global' ? ui.worldwide : countryName(row.country);
    const detail = [ui.categories[row.category], ...languages(row.language), /\.pdf$/i.test(row.url) ? ui.pdf : '']
      .filter(Boolean)
      .join(' · ');
    if (!groups.has(country)) groups.set(country, []);
    groups.get(country)!.push({ label: row.org, detail, href: row.url, rank: order.indexOf(row.category) });
  }

  return [...groups]
    .map(([country, links]) => ({
      country,
      links: links
        .sort((a, b) => a.rank - b.rank || a.label.localeCompare(b.label, lang))
        .map(({ rank, ...link }) => link),
    }))
    .sort((a, b) =>
      a.country === ui.worldwide ? -1 : b.country === ui.worldwide ? 1 : a.country.localeCompare(b.country, lang),
    );
}
