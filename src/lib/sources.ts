// Official stolen-phone pages by country, read at build time from src/data/sources.csv.
// The CSV is the research database: one row per organisation, with or without a page.
// The site shows only pages that were checked (status "verified") from the categories below.
import raw from '../data/sources.csv?raw';

/** Which kinds of organisation to show, in this order within a country: public bodies first, then companies. */
const categories: Record<string, string> = {
  Government: 'Government',
  Regulator: 'Regulator',
  Police: 'Police',
  'Cyber agency': 'Cyber agency',
  'Consumer org': 'Consumer group',
  'Security nonprofit': 'Nonprofit',
  Telco: 'Phone operator',
  Manufacturer: 'Phone maker',
  'Tech platform': 'Tech platform',
  'Finance industry': 'Banking',
  'Industry body': 'Industry body',
};

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

// "fr/en", "en;ca", "EN", "Arabic" → language names, English left out (the site is in English).
const names = new Intl.DisplayNames('en', { type: 'language' });
const languages = (value: string) =>
  value
    .split(/[/;,]/)
    .map((code) => code.trim())
    .filter(Boolean)
    .map((code) => (code.length > 3 ? code : (names.of(code.toLowerCase()) ?? code)))
    .filter((name) => name !== 'English');

const rows = parse(raw).filter((row) => row.status === 'verified' && row.url && row.category in categories);
const order = Object.keys(categories);

const groups = new Map<string, (Source & { rank: number })[]>();
for (const row of rows) {
  // Rows under the Global region name a region, not a country ("Global", "Europe", "North America").
  const country = row.region === 'Global' ? 'Worldwide' : row.country;
  const detail = [categories[row.category], ...languages(row.language), /\.pdf$/i.test(row.url) ? 'PDF' : '']
    .filter(Boolean)
    .join(' · ');
  if (!groups.has(country)) groups.set(country, []);
  groups.get(country)!.push({ label: row.org, detail, href: row.url, rank: order.indexOf(row.category) });
}

export const countries = [...groups]
  .map(([country, links]) => ({
    country,
    links: links
      .sort((a, b) => a.rank - b.rank || a.label.localeCompare(b.label))
      .map(({ rank, ...link }) => link),
  }))
  .sort((a, b) => (a.country === 'Worldwide' ? -1 : b.country === 'Worldwide' ? 1 : a.country.localeCompare(b.country)));
