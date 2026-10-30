# Phone Theft First Aid

What to do in the first minutes after your phone is stolen. Source for phone-theft-first-aid.org.

A static site built with [Astro](https://astro.build). `npm run build` writes plain HTML to `dist/`. There is no server or backend, so any static host works. Pages ship almost no JavaScript, and what they do ship is inlined.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static files in dist/
npm run preview   # serve dist/ locally
```

## Layout

| Path | What |
|---|---|
| `brandkit/` | The design system: tokens, voice, logos, pictograms. Single source of truth, imported directly. |
| `src/data/checklist.en.json` | The checklist: questions and steps, in order. Schema in `checklist.schema.json`. Shared with the future PDF. |
| `src/lib/checklist.ts` | Types and helpers for the checklist JSON (no Astro, reusable from a PDF script). |
| `src/i18n/en.ts` | UI strings. Translate by copying this file and the checklist JSON. |
| `src/components/` | `Checklist`, `Picto`, `Logo`, `Notice`, `RightsCallout`, `AfterLinks` |
| `src/layouts/Base.astro` | Page shell, footer nav |
| `src/pages/` | `/` start button, `/checklist/`, `/recovery/`, `/prevention/`, `/about/`, `/privacy/`, 404 |
| `src/styles/fonts.css` | Self-hosted Noto Sans (with width axis) and Noto Sans Mono, generated from `@fontsource-variable` |

## Principles

- The home page has one action: a start button linking to `/checklist/`.
- `/checklist/` asks one item at a time (mobile first; answer buttons stick to the bottom). Each item has its own `#hash`, so the browser back button works. Without JavaScript it shows every step on one page with each variant labelled, which is also how the PDF should render it.
- Item types: `check` (a card confirmed with one button, e.g. "Are you safe?"), `choice` (a question) and `step` (a numbered action).
- A `choice` item ("Which phone was stolen?", "Lock your email") tailors later lines and links via `when`, e.g. `{ "phone": ["iphone", "android"] }`. A choice can carry `links` too. A choice placed among the steps is shown as part of the step after it. An option marked `showAll` shows every variant with its label, as the no-JS page and a printed copy do.
- Night theme only (`data-theme="dark"` on `<html>`).
- Checklist progress goes in `sessionStorage` only, so nothing stays behind on a borrowed device.
- No third-party requests: no analytics, no font CDN.
- Budget: a checklist page stays under 100 KB before fonts. Today the home page is about 38 KB (8 KB gzipped).
- Read `brandkit/README.md` and `brandkit/voice.md` before changing any screen or copy.
