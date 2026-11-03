// English strings: the UI and every page. Checklist content is in src/data/checklist.en.json.
// fr.ts and nl.ts have the same shape (type Strings). To add a language, copy this file and the
// checklist JSON, translate both, and register it in src/i18n/index.ts and astro.config.mjs.
// Follow brandkit/voice.md: verb first, one action per line, no exclamation marks, no idioms,
// no full stop at the end of a line.

import type { PictoName } from '../components/Picto.astro';
import type { TodoItem } from '../components/TodoList.astro';

const en = {
  lang: 'en',
  dir: 'ltr' as 'ltr' | 'rtl',
  /** For numbers and dates. */
  locale: 'en-GB',
  /** The language's own name, in the language switch. */
  languageName: 'English',
  name: 'Phone Theft First Aid',
  description: 'What to do in the first minutes after your phone is stolen.',
  skip: 'Skip to content',
  languages: 'Languages',
  nav: {
    home: 'Checklist',
    recovery: 'Recovery',
    prevention: 'Prevention',
    card: 'Card',
    sources: 'Data sources',
    advocacy: 'Advocacy',
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

  home: {
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
    ] as { href: string; picto: PictoName; title: string; text: string }[],
  },

  /** Shown when the official AI-compiled source lists appear (Recovery, Data sources). */
  aiWarning: {
    title: 'This list was compiled with AI. No person has checked it yet',
    text: 'Links can be wrong or out of date. Check each page before you rely on it',
    report: 'Report a mistake',
  },

  recovery: {
    title: 'Recovery',
    description: 'What to do in the days after a phone theft: new SIM, money back, phone bill, insurance, accounts, new phone.',
    lead: 'What to do in the days after the theft',
    listTitle: 'Do this in the next days',
    // In the order most people need them over the days after a theft. Drawn from the official sources.
    items: [
      {
        picto: 'sim',
        title: 'Get your number back on a new SIM',
        lines: [
          'Ask your operator for a new SIM or eSIM with the same number',
          'Bring ID. Most operators give it only to the account holder',
          'Do it this week. After 30 days some operators give your number to someone else',
          'Abroad? Ask for an eSIM',
          'Restart the phone. Test a call, a text and mobile data',
          'Ask for proof in writing that the SIM and the phone are blocked. Keep the reference number',
        ],
      },
      {
        picto: 'bank',
        title: 'Ask your bank for your money back',
        lines: [
          'Report every payment you did not make, as soon as you can',
          'In many countries the law says your bank has to pay you back. A PIN seen or a phone left unlocked is not always your fault',
          'Ask for the answer in writing',
          'Check for loans or credit opened in your name',
          'Bank says no? Complain to the financial ombudsman. It is free',
          'Get legal advice from a consumer group or a legal aid office. Many give it for free',
        ],
      },
      {
        picto: 'card',
        title: 'Check every app that can pay',
        lines: [
          'Look at payment apps, online shops and your phone bill',
          'Report what you did not buy. Some refund it',
          'Paid by card? Your bank can also try to reverse the payment',
        ],
      },
      {
        picto: 'receipt',
        title: 'Check your phone bill',
        lines: [
          'A block does not end your contract. Keep paying the plan and the phone',
          'Look for calls, data and payments the thief made',
          'Dispute every charge made after you reported the theft',
          'Operator will not fix it? Complain to the telecom regulator or ombudsman',
          'Read your contract before you cancel or upgrade. There can be fees',
        ],
      },
      {
        picto: 'insurance',
        title: 'Claim on your insurance',
        lines: [
          'Claim before the deadline in your policy. Some give only 30 days',
          'Home, travel, bank card and phone contract insurance can each cover theft',
          'Send the police reference, the receipt and the proof that the phone is blocked',
          'Claim before you remove the phone from your account',
          'Phone comes back after you claim? Tell your insurer',
        ],
      },
      {
        picto: 'password',
        title: 'Recover your accounts the official way',
        lines: [
          'Use the recovery page of the service itself',
          'Never pay anyone who offers to recover an account for you',
          'Change sign-in methods one at a time. Changing them all at once can lock an account for 30 days',
        ],
      },
      {
        picto: 'eye',
        title: 'Watch your accounts',
        lines: [
          'Check your email and bank for new sign-ins every week',
          'Remove devices and apps you do not know',
          'Check email forwarding, and your recovery email and phone number',
          'Change every password you also use on other sites',
        ],
      },
      {
        picto: 'phishing',
        title: 'Continue watching for scams',
        lines: [
          'A message says your phone was found? It is a scam',
          'Thieves send fake messages and links to get your passcode or account password',
          'With it they can unlock the phone and sell it',
          'Never give your passcode to anyone',
        ],
      },
      {
        picto: 'wipe',
        title: 'Erase the phone when you are sure it is gone',
        lines: [
          'Open the page you used to lock it. Choose Erase',
          'An erased Android phone no longer shows where it is. An iPhone still does',
          'Do not remove the phone from your account. Then it stays locked for the thief',
        ],
      },
      {
        picto: 'backup',
        title: 'Set up your new phone',
        lines: [
          'Restore your data from your backup',
          'Sign in again to your banking and mobile money apps',
          'Set up your digital ID again',
          'Sign in to your messaging apps. End the session on the old phone',
          'New number? Update it at your bank, email and government accounts',
        ],
      },
      {
        picto: 'check',
        title: 'Got your phone back?',
        lines: [
          'Tell the police and your insurer',
          'Ask your operator to lift the block. Only you can, with ID or the block reference',
          'Erase it before you use it again. A thief may have installed something',
        ],
      },
    ] as TodoItem[],
    officialTitle: 'Official advice in your country',
    officialLead: 'Rules are different in every country. Some guides are only in the local language',
    country: 'Your country',
    choose: 'Choose',
    all: 'All countries and sources',
  },

  prevention: {
    title: 'Prevention',
    description: 'So the next thief gets less. What to set up on your phone and accounts before a theft.',
    lead: 'So the next thief gets less',
    chartTitle: (year: string) => `Phone thefts and robberies in London in ${year}`,
    every: (minutes: number) => `About one every ${minutes} minutes`,
    measure: 'Phone thefts and phone robberies recorded by the Metropolitan Police, per year',
    updated: 'Updated',
    source: 'Source',
    warningKicker: 'The most important thing',
    warningText: 'They are after your bank accounts, not only your phone',
    warningStat: 'of identity fraud victims had money taken from their bank account',
    warningSource: 'GBG survey, 2022',
    warningSourceNote: 'Not all identity fraud comes from phone theft, but I could not find more precise numbers',
    listTitle: 'Do this before it happens',
    items: [
      {
        picto: 'imei',
        title: 'Write down your IMEI',
        lines: ['Type *#06# in the phone app. The number appears', 'Write it on paper. Keep it at home'],
      },
      {
        picto: 'phone',
        title: 'Write down emergency phone numbers',
        lines: [
          "Your operator's lost-phone line, and the number to call it from abroad",
          "Your bank's lost-card line. It is on the back of your card",
          'Someone you trust. Without your phone you may not remember any number',
          'The email of your Apple or Google account. You need it to lock the phone',
          'Keep one copy at home and one in your bag or suitcase, away from your phone',
        ],
        link: { label: 'Make a recovery card', href: '/card/' },
      },
      {
        picto: 'sim-block',
        title: 'Set a SIM PIN',
        lines: ['Then a thief cannot move your SIM to another phone to get your login codes'],
      },
      {
        picto: 'card',
        title: 'Do not keep your bank card on the back of your phone',
        lines: ['A thief who takes the phone gets the card too', 'Keep your cards in a pocket or wallet, away from the phone'],
      },
      {
        picto: 'bank',
        title: 'Do not put all your banking on your phone',
        lines: [
          'Keep at least one bank account and card off the phone',
          'If the phone is stolen, you can still pay and take out money',
        ],
      },
      {
        picto: 'wallet',
        title: 'Keep a spare ID, cash and card somewhere safe',
        lines: ['Travelling? Leave them in your hotel room', 'Then a theft does not leave you stuck with nothing'],
      },
      {
        picto: 'locate',
        title: 'Turn on Find My',
        lines: ['iPhone: Find My iPhone. Android: Find My Device', 'Check that you know the password for that account'],
      },
      {
        picto: 'lock',
        title: 'Turn on theft protection',
        lines: [
          'iPhone: Stolen Device Protection. Android: Theft protection',
          'It asks for your face or fingerprint before big changes',
        ],
      },
      {
        picto: 'printer',
        title: 'Print your backup codes',
        lines: [
          'Make them in the security settings of your email account. Do this for email first',
          'Keep the paper at home, not in your wallet or phone case',
        ],
      },
      {
        picto: 'password',
        title: 'Add a second way to sign in',
        lines: [
          'Add a recovery email address',
          'Add a second phone number that is not in this phone, such as a family member',
          'A security key or a passkey on a laptop also works',
          'iPhone: add a Recovery Contact, someone you trust',
        ],
      },
      {
        picto: 'authenticator',
        title: 'Do not keep your login codes only on the phone',
        lines: ['Turn on backup in your code app', 'Or set it up on a second device too'],
      },
      {
        picto: 'check',
        title: 'Test it',
        lines: ['Sign in to your email on a computer without your phone', 'If it does not work, fix it now, not after a theft'],
      },
      {
        picto: 'repeat',
        title: 'Phone already stolen once?',
        lines: ['Once you are back in your accounts, make new backup codes', 'The old ones may have been stolen with the phone'],
      },
      {
        picto: 'backup',
        title: 'Back up your phone',
        lines: ['Photos and contacts are what people miss most'],
      },
    ] as TodoItem[],
  },

  card: {
    title: 'Recovery card',
    description: 'Print a card with your IMEI and emergency phone numbers, to keep away from your phone.',
    lead: 'Your IMEI and the numbers to call, on paper. Keep it away from your phone',
    imei: 'IMEI',
    imeiHint: 'Type *#06# in the phone app. The number appears',
    imei2: 'Second IMEI, if the phone shows two',
    numbers: 'Emergency phone numbers',
    numbersHint: 'For your operator and your bank, use their lost-phone and lost-card lines. Add the number to call from abroad too',
    nameLabel: 'Name',
    numberLabel: 'Number',
    preview: 'Your card',
    previewHint: 'It prints twice: one for your bag or wallet, one for home',
    print: 'Print the card',
  },

  sources: {
    title: 'Data sources',
    description: 'Official stolen-phone guides by country: government, police, regulators, consumer groups, operators and phone makers.',
    lead: 'Official advice in each country. Rules are different in every country. Some guides are only in the local language',
    worldwide: 'Worldwide',
    pdf: 'PDF',
    categories: {
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
    } as Record<string, string>,
  },

  advocacy: {
    title: 'Advocacy',
    description: 'Keep the checklist on paper for people whose phone was just stolen.',
    policeTitle: 'Police should help victims block their accounts',
    police: [
      'When my phone was stolen, the police officer told me to block my bank account by email',
      'The job of the police is not only to catch criminals and tell victims "we can\'t do anything". They should help people block access to their accounts and call their bank',
    ],
    printTitle: 'The checklist on paper',
    print: [
      '⚠️ Someone whose phone was just stolen cannot look up what to do. They have no phone, and often no internet',
      'Police, hotels, shops: print this checklist. Keep it ready and hand it to them',
      '⚠️ Take the theft seriously. It is not just a phone. Their bank and accounts are at risk',
    ],
    download: 'Download the checklist (PDF)',
    writeTitle: 'Write to us',
    writeTo: 'Press, operators, phone makers, anyone who wants stolen phones to be worth nothing: write to',
    /** The no-JS text of the address, spelled out. */
    address: 'advocacy at phone-theft-first-aid dot org',
  },

  about: {
    title: 'About',
    description: 'Made by someone whose phone was stolen.',
    story: [
      "My phone was stolen. I didn't have another device, I was locked out of my accounts by security features such as double authentication. By the time I managed to get back in, thieves had done monstruous damage. This website is an attempt to list wht I should have done in advance to limit damage, right after the incident, and to recover as much as possible",
      'I am not a security company or an agency. The information on this website is not meant to be exhaustive',
    ],
    madeBy: 'Vibe-coded by',
    mistake: 'Found a mistake or a better step?',
    contribute: 'Contribute',
    press: 'Press, operators, phone makers: see',
  },

  privacy: {
    title: 'Privacy',
    description: 'What this site keeps about you, and where.',
    lines: [
      'This site is plain files. There is no server of mine that stores anything you do here',
      'Your checklist progress stays in this browser tab. It is deleted when you close the tab, so nothing is left on a borrowed phone or computer',
      'The fonts are served from this site. I load nothing from other companies',
      'The company that hosts these files may keep standard access logs, like any website',
    ],
  },

  notFound: {
    title: 'Page not found',
    lead: 'Phone stolen? Go to the checklist',
    go: 'Go to the checklist',
  },
};

export type Strings = typeof en;
export default en;
