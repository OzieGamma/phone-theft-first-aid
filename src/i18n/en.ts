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
    rights: 'Your rights',
    prevention: 'Do this tonight',
    about: 'About us',
    privacy: 'Privacy',
  },
  footer: 'Free. No ads. No tracking. Made by people whose phones were stolen.',
  start: 'Start the checklist',
  back: 'Back',
  done: 'Done',
  skipStep: 'Skip for now',
  status: { done: 'Done', skipped: 'Skipped', todo: 'Not done' },
  stepOf: (n: number | string, total: number) => `Step ${n} of ${total}`,
  beforeYouStart: 'Before you start',
  progress: (done: number | string, total: number) => `${done} of ${total} done`,
  goBack: 'Go back to the skipped steps.',
  startOver: 'Start over',
};

export const home = {
  nextTitle: 'After the first hour',
  next: [
    {
      href: '/rights/',
      picto: 'insurance',
      title: 'Your rights',
      text: 'Police report, insurance, IMEI block, getting your money back.',
    },
    {
      href: '/prevention/',
      picto: 'backup',
      title: 'Do this tonight',
      text: 'So the next thief gets less.',
    },
  ] satisfies { href: string; picto: PictoName; title: string; text: string }[],
};
