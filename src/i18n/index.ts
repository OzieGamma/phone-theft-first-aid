// The site's languages. English is served at the root, the others under /<lang>/.
import en, { type Strings } from './en';
import fr from './fr';
import nl from './nl';

export const locales = ['en', 'fr', 'nl'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

const strings: Record<Lang, Strings> = { en, fr, nl };

export const t = (lang: Lang): Strings => strings[lang];

/** getStaticPaths for a page built once per language: [...lang] is empty for English. */
export const langPaths = () =>
  locales.map((lang) => ({ params: { lang: lang === defaultLang ? undefined : lang }, props: { lang } }));

export type { Strings };
