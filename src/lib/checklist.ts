// Types and helpers for src/data/checklist.<lang>.json (schema: checklist.schema.json).
// Plain TS with no Astro imports, so a PDF script can reuse it.

import en from '../data/checklist.en.json';
import type { PictoName } from '../components/Picto.astro';

export type When = Record<string, string>;
export type Line = string | { text: string; when?: When };

export interface Link {
  label: string;
  /** Shown instead of the address, e.g. for tel: links. */
  detail?: string;
  href: string;
  when?: When;
}

/** A card read before the steps, confirmed with one button. Not numbered. */
export interface Check {
  id: string;
  type: 'check';
  picto: PictoName;
  title: string;
  lines: Line[];
  links?: Link[];
  continue: string;
}

export interface Choice {
  id: string;
  type: 'choice';
  picto: PictoName;
  question: string;
  options: { id: string; label: string }[];
}

export interface Step {
  id: string;
  type: 'step';
  picto: PictoName;
  title: string;
  time: string;
  lines: Line[];
  links?: Link[];
}

export interface Checklist {
  lang: string;
  dir: 'ltr' | 'rtl';
  title: string;
  allDone: string;
  items: (Check | Choice | Step)[];
}

const checklists: Record<string, Checklist> = { en: en as Checklist };

export function getChecklist(lang = 'en'): Checklist {
  return checklists[lang] ?? checklists.en;
}

export function steps(list: Checklist): Step[] {
  return list.items.filter((item): item is Step => item.type === 'step');
}

export function lineText(line: Line): string {
  return typeof line === 'string' ? line : line.text;
}

/** Label for a variant when all variants are shown, e.g. "iPhone" for { phone: "iphone" }. */
export function variantLabel(list: Checklist, when?: When): string | undefined {
  if (!when) return undefined;
  const [key, value] = Object.entries(when)[0];
  const choice = list.items.find((item): item is Choice => item.type === 'choice' && item.id === key);
  return choice?.options.find((option) => option.id === value)?.label;
}
