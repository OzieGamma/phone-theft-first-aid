Phone Theft First Aid is what to do in the first minutes after your phone is stolen. Somebody it happened to built it, angry at how hard it was to find this out in time. It's for anyone, at their worst moment, on whatever phone or computer they can borrow, in any language.

## Who we are

- **By victims, for victims.** We aren't a security company or an agency. We had our phones stolen, lost money and accounts, and wrote down what we wish we'd known.
- **Angry at the right people.** Thieves. Phone makers that make stolen phones easy to resell. Operators that make you queue to block a SIM. Never the person it happened to.
- **Plain and useful.** It's a notice taped to a lamppost, not an app store listing. Blunt type, hard edges, two inks, big numbers.

## Priority layers

Content is ranked in this order. A lower layer never pushes a higher one off the first screen.

| # | Layer | Job | Voice | Look |
|---|---|---|---|---|
| 1 | **Checklist** | Lock, locate, block SIM, email password, freeze cards, report, erase. | Calm, commanding | `tape` primary, `ChecklistStep`, `step` type |
| 2 | **Rights & recovery** | Police report, insurance, IMEI block, consumer rights, getting accounts back. | Firm: what you're owed, insist on it | `RightsCallout` |
| 3 | **Prevention** | "Do this tonight so the next thief gets less." | Practical, a bit warmer | `surface-raised` cards, white strips on `tape` |
| 4 | **Advocacy** | Stories, data, pressure on operators and phone makers. | Angry, first person plural | `black` ground, condensed caps, `Stamp`, `stamp` red |
| 5 | **Service signal** | Opt-in interest in paid help, anonymous step data. | Quiet, transparent | `ConsentPrompt` only, after the checklist |

## Using this system

- **Colour.** Two themes, `light` (Day) and `dark` (Night). Pages sit on `paper` and cards on `surface-raised`. All checklist text is `ink`: 11:1 or better (WCAG AAA) on every surface and tint in both themes. `ink-muted` is for secondary lines only.
- **Tape.** `tape` is hazard-tape yellow (#FFD400), the same in both themes, always with `on-tape` black text (13.2:1). It marks the one thing to do now: the primary button, the active step, the Start card, stickers. Never use it as text on light grounds.
- **Stamp.** `stamp` red is the anger. Use it for rubber-stamp marks, advocacy headlines and strike-throughs on posters and social. Keep it out of the checklist and out of state colours, and never put it on `tape`.
- **States are never colour alone.** Done = `done` teal + check + "DONE" + the title struck through. Now = `tape` + 3px `edge` border + "NOW". Next = outline + "NEXT". Warning = `warn` + triangle + hazard strip. `done` is a blue-leaning teal, off the red–green axis.
- **Print inks.** `black` and `white` never change with theme. Posters and stickers use two inks, `tape` and `black`, and must still work photocopied in black only.
- **Type.** One superfamily, Noto Sans, with Noto Arabic, Hebrew, Devanagari, SC, JP and KR in the stack.
  - **Notice voice:** `poster`, `display` and `title`, set in Noto Sans at 75% width (`font-stretch: 75%`, family key `condensed`), weight 900, uppercase in scripts that have case. Scripts without case use normal width at the same weight.
  - **Checklist:** `step` (22/30, 800) and `step-detail` (18/29, with 1.6 leading for dyslexia-friendly reading).
  - **Typed voice:** `label` and `code` in Noto Sans Mono, like a typewriter or label maker. Codes such as `*#06#` stay LTR inside RTL text.
  - Nothing goes below `caption` (14px).
- **Shape.** Everything is `radius-0`: cut paper, not app chrome. `radius-xs` is for inputs and chips; `radius-round` only for step badges (a stamped circle) and toggle thumbs.
- **Borders and shadows.** Taped-on objects (buttons, the active step, the Start card, sheets) get a `border-hard` (3px) `edge` border and `shadow-hard`, a solid offset with no blur. No soft shadows anywhere.
- **Tilt.** `tilt-tape` and `tilt-stamp` exist only for tape labels and stamps on posters and social. Never tilt checklist text, controls or anything a person has to read under stress.
- **Spacing and size.** 4px base, `space-1` to `space-8`. Every tap target is at least `tap-min` (48px); primary buttons and step rows are `tap-primary` (64px).
- **Focus.** A solid 3px `focus` outline with a 2px offset: black by day, `tape` by night. It holds 11.9:1 or better on every surface. Never remove it.
- **Motion.** Almost none: a button press drops its shadow, and toggles slide for 150ms. Nothing pulses, counts down or shakes. Under `prefers-reduced-motion`, everything is static.
- **RTL.** Components use logical properties, so setting `dir` mirrors the layout. Only the `arrow` pictogram mirrors.
- **Weight.** Pages must work on 2G and old phones: system font first (`display=swap`), inline SVG pictograms, no hero images, no video on checklist pages. Keep a checklist screen under 100 KB before fonts.

## The name

**Phone Theft First Aid** is the name, always in full. It says exactly what it is, because nobody has time to decode a clever name when their phone has just been stolen.

- In the logo it is set in English on two lines: PHONE THEFT / FIRST AID.
- In other languages, translate it as plain text beside the logo (for example "إسعافات أولية لسرقة الهاتف").
- Never shorten it to an acronym.
- Web address: `phonetheftfirstaid.org` (placeholder until registered).

## Iconography

`Picto` renders 16 filled, single-ink pictograms on a 24px grid. They are drawn like stencils so they survive 16px, a photocopier and a cracked screen. The same shapes are SVG files in `assets/Pictograms`.

- **Actions (12):** `lock`, `locate`, `wipe`, `sim-block`, `password`, `card`, `police-report`, `insurance`, `imei`, `backup`, `borrowed-device`, `language`.
- **UI glyphs (4):** `check`, `arrow`, `alert`, `info`.
- **Sizes:** `picto-lg` (40px) leads a step; `picto-sm` (24px) sits inline.
- **No culture-bound shapes:** no hands, faces, gestures, flags or protected emblems (no red cross).
- Always pair a pictogram with a word. No emoji, ever.

## Do

- Lead every screen with one verb-first action.
- Say who we are: people it happened to.
- Number the steps, one action per line.
- Give honest times ("about 2 minutes").
- Keep the free guide first and the optional service last, visibly apart.
- Test every screen at 320px, in sunlight, in Night theme and in Arabic.

## Don't

- Blame the person ("you should have…"), scare them ("criminals are draining your account right now"), or joke in the checklist.
- Write marketing: no taglines, no "empower", no "seamless", no "peace of mind".
- Put ads, donation asks, newsletter pop-ups or the service offer above or inside the checklist.
- Pre-tick consent, hide "No thanks", or make the guide depend on any opt-in.
- Use flags for languages, red/green alone for state, or countdown timers.
- Tilt, stamp or roughen anything a person must read to get through the checklist. Keep the attitude rough and the usability clean.
- Use photos of thieves, hooded figures, smashed screens or crying people.
