## Design system
All UI follows the Phone Theft First Aid design system in `brandkit/`.
- Read `brandkit/README.md` and `brandkit/voice.md` before building any screen or writing copy.
- No dangling full stop: nothing on screen ends with a full stop, not titles, buttons, lines nor paragraphs ("Lock your phone", not "Lock your phone."). Full stops between sentences stay ("All 6 done. Breathe"). Applies to the JSON, `en.ts` and pages.
- Use tokens from `brandkit/tokens.css` (or `tokens.json`); never hard-code colours, sizes or fonts.
- Reuse components from `src/components/` (`Picto`, `Logo`, `Checklist`, `Notice`, `RightsCallout`).
- Logos and pictograms are in `brandkit/assets/`; `Picto` inlines the pictogram SVGs at build time.
- Brief / requirements: `brandkit/brandkit-requirements.md`.

## Site
- Static Astro site, no server. Keep it that way: anything dynamic runs in the browser.
- Night theme only: `<html data-theme="dark">` in `Base.astro`. Don't add a theme switch.
- Checklist content lives in `src/data/checklist.<lang>.json` (validate against `checklist.schema.json`); UI strings in `src/i18n/en.ts`. No copy in components.
- Store nothing beyond `sessionStorage` (borrowed devices), and make no third-party requests.
- Don't write reassurance about data on screens ("We never store your data", "Nothing leaves your browser", "We never see what you type"). It's useless and creepy. Just don't store it. The Privacy page is the only place that says what is kept.
- Check `npm run build` passes and the home page stays under 100 KB before fonts.
