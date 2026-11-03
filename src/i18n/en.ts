// English UI strings. Checklist content is in src/data/checklist.en.json.
// To add a language, copy both files, translate them, and register the locale in
// astro.config.mjs. Follow brandkit/voice.md: verb first, one action
// per line, no exclamation marks, no idioms.

import type { PictoName } from '../components/Picto.astro';

export const ui = {
  lang: 'en',
  dir: 'ltr',
  name: 'Phone Theft First Aid',
  skip: 'Skip to content',
  nav: {
    home: 'Checklist',
    recovery: 'Recovery',
    prevention: 'Prevention',
    card: 'Card',
    sources: 'Data sources',
    about: 'About',
    contribute: 'Contribute',
    privacy: 'Privacy',
  },
  footer: 'Vibe-coded by',
  start: 'Start the checklist',
  back: 'Back',
  done: 'Done',
  skipStep: 'Skip for now',
  status: { done: 'Done', skipped: 'Skipped', todo: 'Not done' },
  markDone: 'Mark as done',
  stepOf: (n: number | string, total: number) => `Step ${n} of ${total}`,
  beforeYouStart: 'Before you start',
  progress: (done: number | string, total: number) => `${done} of ${total} done`,
  goBack: 'Go back to the skipped steps',
  startOver: 'Start over',
  next: (title: string) => `Next: ${title}`,
};

export const home = {
  nextTitle: 'After the first hour',
  next: [
    {
      href: '/recovery/',
      picto: 'insurance',
      title: 'Recovery',
      text: 'New SIM, money back, phone bill, insurance',
    },
    {
      href: '/prevention/',
      picto: 'backup',
      title: 'Prevention',
      text: 'So the next thief gets less',
    },
  ] satisfies { href: string; picto: PictoName; title: string; text: string }[],
};
