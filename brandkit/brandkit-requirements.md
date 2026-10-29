# Brandkit Requirements — "Phone Theft First Aid" (working title)

## 1. What it is
An emergency-response brand for people whose phone was just stolen. It spans several layers, in this priority order:

1. **Mitigation checklist / guide (core)** — the first minutes: lock, locate, wipe, block SIM, secure accounts (email, banking, 2FA), report. Must work from *any* borrowed device.
2. **Your rights & recovery** — police reports, insurance claims, telco/IMEI blocking, consumer rights, getting accounts back.
3. **Prevention & setup for later** — "do this now so the next theft hurts less" (backups, Find My, SIM PIN, recovery codes).
4. **NGO / advocacy** — awareness campaigns, data on theft, policy pressure on manufacturers/telcos.
5. **Service signal (optional, future)** — capture demand for a paid/assisted service (e.g. "want someone to help you?" opt-in) and privacy-respecting, anonymous telemetry (which steps people need, where theft happens). Must be explicitly opt-in and GDPR-compatible; the brand must never feel like it's exploiting a victim's panic.

## 2. Audience
- **Stressed victims, any age** — panicking, adrenaline, possibly on a stranger's phone or a hotel computer, low attention span.
- **Tourists / travelers** — unfamiliar city, possibly no local language, no phone for maps/translation.
- **Young urban adults (18–35)** — tech-savvy, share content on social, likely advocates/amplifiers.

Design for the worst moment: shaking hands, small borrowed screen, bright sunlight or a dark street, no login, no app installed.

## 3. Tone
**Urgent & action-first.** Bold, fast, alarm-grade clarity — like an emergency sign or a fire-exit instruction.
- Verbs first, numbered steps, one action per line.
- Urgency without panic: confident, commanding, never fear-mongering or blaming the victim.
- Secondary layers (rights, prevention, advocacy) can relax slightly but keep the same backbone.

## 4. Name — DECIDED
**"Phone Theft First Aid"** is the final name. It's descriptive: no time for hints or clever names when your phone was just stolen. No alternative names.

## 4b. Brand character — DECIDED
It should read as if **someone whose phone got stolen got pissed off and built it**. Grassroots, made by a victim for victims, not a corporate or agency brand.
- Raw, direct, a bit angry at the situation (never at the victim). "This happened to me. Here's what I wish I'd known."
- Utilitarian over polished: plain, blunt, no marketing gloss, no clever taglines.
- Still trustworthy and clear: rough in attitude, never sloppy in usability or accessibility.

## 5. Language & global use
- **Many languages, global, icon-first.** The core checklist must be understandable largely through icons, numbers and color, with text as support.
- Typography must support Latin, Cyrillic, Greek, Arabic (RTL), Devanagari, CJK at minimum — choose a font family with broad script coverage (e.g. Noto-family or equivalent) or specify per-script fallbacks.
- Layouts must mirror for RTL.
- Avoid culture-specific metaphors, gestures, or color meanings that don't travel (e.g. don't rely on red/green alone).

## 6. Must-haves in the kit (deliver as a Design System artifact)
1. **Brand README** — purpose, positioning, priority layers, audience, do/don't.
2. **Name options + logo** — wordmark and symbol/icon mark; works at favicon size, monochrome, on dark and light, and as a sticker/poster.
3. **Color tokens** — light and dark themes; an "emergency" accent; semantic colors (done / next / warning / info). WCAG AA minimum, AAA for core checklist text. Never color-only meaning.
4. **Typography** — type scale, weights, global script coverage, big readable sizes for the checklist.
5. **Spacing, radius, elevation tokens.**
6. **Iconography** — a pictogram set for the core actions: lock, locate, wipe, SIM block, password change, bank/card, police report, insurance, IMEI, backup, borrowed device, language switch. Bold, filled, legible at small sizes.
7. **Voice & tone guide** — microcopy rules, example lines per layer (checklist, rights, prevention, advocacy, service opt-in), words to avoid.
8. **Components with live previews** — checklist step (todo / active / done), progress indicator, big primary action button, "start here" emergency entry card, language picker, info/rights callout, warning banner, consent/opt-in prompt for telemetry and service interest.
9. **Sample applications** — mobile checklist screen, a street/transit poster or sticker (QR to the guide), a social post for advocacy.

## 7. Constraints & principles
- Usable in under 10 seconds from landing: one obvious first action.
- Thumb-friendly targets (≥48px), high contrast, works in sunlight and at night.
- Lightweight: should render fast on a weak connection / old device.
- Trust: no dark patterns, no ads feel, clear privacy stance. Telemetry and service capture are opt-in and visibly separate from the free guide.
- Accessible: screen-reader friendly, reduced motion, dyslexia-friendly spacing.

## 8. Out of scope (for now)
- Building the actual app or website.
- Final legal content for rights/recovery per country.
