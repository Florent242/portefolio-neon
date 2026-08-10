---
name: Florent BOUDZOUMOU — Neon Circuit
description: Portfolio as the neon sign of its own author — one continuous glass tube in a dark room.
colors:
  cobalt: "#2f5cff"
  cobalt-soft: "rgba(47, 92, 255, 0.14)"
  electrode: "#ff4438"
  argon: "#ff5c8a"
  neongas: "#ff4d4d"
  helium: "#ffd166"
  xenon: "#7dd3fc"
  krypton: "#c7d6ff"
  radon: "#6ee7b7"
  room-dark: "#08070d"
  room-dark-soft: "#0d0c17"
  panel-dark: "#12101f"
  ink-dark: "#edeaf6"
  inkdim-dark: "#a29ab8"
  room-light: "#f1ede4"
  room-light-soft: "#e9e4d8"
  panel-light: "#fbf9f2"
  ink-light: "#1d1a2b"
  inkdim-light: "#5f5872"
typography:
  display:
    fontFamily: "Clash Display, Instrument Sans, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Big Shoulders Stencil Text, Instrument Sans, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 400
    letterSpacing: "0.16em"
    textTransform: "uppercase"
rounded:
  sm: "4px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#0a0812"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "#0a0812"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cobalt}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    typography: "{typography.label}"
  card-panel:
    backgroundColor: "{colors.panel-dark}"
    rounded: "2px"
    padding: "16px 20px"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.sm}"
    padding: "12px"
  chip-gas:
    backgroundColor: "transparent"
    textColor: "{colors.inkdim-dark}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
---

# Design System: Florent BOUDZOUMOU — Neon Circuit

<!-- This is a Scan-mode system: tokens and rules are extracted from the built artifact (src/index.css and components). The qualitative world was established with the user before implementation (concept roll 825ee563 → challenger-neon). -->

## Overview

**Creative North Star: "The Neon Circuit — the portfolio as the neon sign of its own author."**

The portfolio is the sign that names the architect who built it: one continuous glass tube, hand-bent into the FB monogram, hanging in a dark room. The page is the circuit that keeps it lit — navigation is the transformer bar feeding the tube, sections are separated by the circuit bus, and every project is a gas in the discharge spectrum.

The room has two confirmed states: the **sign room at night** (default, `#08070d` near-black with a cobalt discharge and warm electrode reds) and the **workshop at day** (pale plaster `#f1ede4`, softer ink, same layout and gas logic). Everything is one continuous visual: no gradients, no glass blur, no shadows beyond a light source's actual glow. Signage is stencil silkscreen; display type is Clash Display; body copy is Instrument Sans.

**Key Characteristics:**
- The FB monogram is always one continuous tube path — never two letters, never split.
- Every color is a real gas discharge; gas color is the project taxonomy.
- Panels are flat, 1px-bordered, with a glow that only appears on hover or from a lit source.
- Labels are silkscreen stencil, uppercase, letter-spaced; body measure stays 65–75ch.
- One authored motion: the gas breath and the power-on warm-up. Everything else is state response.

## Colors

The palette is the gas spectrum: cobalt for the hero discharge and identity, the electrode red for sealed tube ends and bus terminals, and five more gases mapping one-to-one onto project categories.

### Primary
- **Cobalt Discharge** (#2f5cff): the identity gas. Hero monogram, nav active state, primary CTAs, focus rings, link hovers, back-to-top. Soft variant (rgba 47,92,255 / .14) fills hover states.

### Secondary
- **Electrode Red** (#ff4438): the sealed end of every tube and the left terminal of the circuit bus. Used sparingly — warmth against the cobalt.

### Tertiary (gas taxonomy — each maps to a real project family)
- **Argon** (#ff5c8a): AKOWE, Syndory, Instaconn, Flutter apps
- **Neon Gas** (#ff4d4d): Miss ESGIS, Eat & Drink, Hospital, Démineur
- **Helium** (#ffd166): Hackathon ESGIS, InvestImmo, FaceDeBouc, Angular Recipes
- **Xenon** (#7dd3fc): E-services Congo, HRIS, TechVerse, Agentic, small builds
- **Krypton** (#c7d6ff): BizPOS, Gestion Scolaire, Sukyo, Echec
- **Radon** (#6ee7b7): BoudzStocks, API-Rest-Auth, Facturation, Spotify

### Neutral
- **Night Room** (#08070d): page background, dark default. **Day Room** (#f1ede4): light theme background.
- **Room Soft** (#0d0c17 / #e9e4d8): nav scrim, floating controls.
- **Panel** (#12101f / #fbf9f2): card surfaces; **Raised** (#1a1730 / #ffffff) reserved.
- **Ink** (#edeaf6 / #1d1a2b): primary text. **Ink Dim** (#a29ab8 / #5f5872): secondary text, captions, metadata.
- **Line** (rgba 255,255,255,.09 / rgba 28,24,48,.12): all 1px borders and dividers.

### Named Rules
**The Gas Rule.** Every colored accent must be a real gas in the spectrum — no invented hues. If a project doesn't earn a gas, it gets no color.
**The Room Rule.** Dark is the room at night (default); light is the workshop at day. The two states share every token except neutrals — never fork the palette per theme.
**The 1px Rule.** No border or divider is ever thicker than 1px.

## Typography

**Display Font:** Clash Display (Fontshare) with Instrument Sans fallback
**Body Font:** Instrument Sans (system-ui fallback)
**Label Font:** Big Shoulders Stencil Text — silkscreen signage, always uppercase with 0.16em tracking

**Character:** A hard signage grotesque for the name and section titles, a quiet humanist sans for reading, and stencil lettering for everything that would be printed on a panel in a workshop.

### Hierarchy
- **Display** (600, clamp(3rem, 8vw, 4.5rem), 1.1, -0.03em): the name in the hero and every section title; never below `text-4xl` (2.25rem).
- **Title** (600, 1.25–1.5rem, 1.2): project card names and sub-section headings (`.display` class on smaller sizes).
- **Body** (400, 1rem, 1.7): paragraphs, measure capped at 65–75ch; project descriptions at 0.875rem.
- **Label** (400, 0.65–0.7rem, 0.16em, uppercase): nav links, buttons, chips, captions, FIG_* figure labels, metadata lines.

### Named Rules
**The Silkscreen Rule.** Anything that reads as signage — buttons, nav, chips, captions — is stencil, uppercase. Anything meant to be read — paragraphs, descriptions — is Instrument Sans.

## Layout

Single-column scroll page, one section per figure (FIG_001 hero → FIG_005 contact), separated by the **circuit bus**: a 1px horizontal line with an electrode-red terminal dot at the left and a cobalt dot at the right.

- Container: `max-w-6xl` (72rem) with `px-4 sm:px-6` gutters; sections breathe at `py-24` (96px).
- Hero: centered column, `min-h-svh`, sign first (max-w-md), then name, role line, copy (max-w-xl), CTAs, meta line, scroll hint pinned at bottom.
- About: two-column on `md` (photo 5fr / story 7fr); facts grid 2-col on `sm`.
- Skills: card grid `sm:2 / lg:3` columns.
- Projects: flagships in a 2-col grid; gallery `sm:2 / lg:3`; filters stack above on mobile.
- GitHub: 2-col repo grid, live-fetched.
- Contact: two-column `md` (5fr / 7fr) — info column vs. form panel.
- Nav: fixed top, 64px tall, scrim on scroll, mobile menu collapses under `md`.
- Spacing rhythm is the Tailwind 4 default scale (4px base): gaps 4/8/12/16/24/32, section padding 96px, hero bottom offset 64px.

## Elevation & Depth

The system is **flat with light** — depth is conveyed by glow, never by offset shadows. Panels sit on the room floor; a lit element glows; an interactive element lights up on hover.

### Shadow Vocabulary
- **Tube Glow** (`drop-shadow(0 0 7px C) drop-shadow(0 0 22px C)` via `.tube-glow`): only for the neon tube strokes — the glass's own light.
- **Card Hover Glow** (`0 0 0 1px gas, 0 14px 40px -18px gas` on `.panel-hover:hover`): the gas of that card, appearing only on hover.
- **Button Hover Glow** (`0 0 24px -6px cobalt`): on `.btn-tube:hover`.
- **Terminal Glow** (`0 0 10px gas` on `.gas-led` and bus dots): tiny light sources, always lit.

### Named Rules
**The No-Fake-Light Rule.** A glow only appears where a light source exists in the room: the tube, the terminals, or a hovered interactive element. Never shadow a static card at rest.
**The Flat-At-Rest Rule.** Panels have no shadow at rest — only their 1px line and their own surface color.

## Shapes

Form language is **industrial signage**: near-square corners, pill only for gas chips and LED dots.

- Panels/cards: 2px corners, 1px `--neon-line` border, flat fill.
- Buttons/inputs/nav: 4px corners, 1px border.
- Gas chips and LEDs: pill (9999px) — the only fully rounded forms in the room.
- The FB monogram: one continuous stroke path, round caps, drawn in SVG; electrodes are small red circles at the two sealed ends.
- No decorative clipping, no blobs, no organic silhouettes.

## Components

### Buttons
- **Shape:** 4px corners, 1px border, stencil uppercase label (0.7rem, 0.14em tracking), padding 12px 24px, inline-flex with a 14–15px icon.
- **Primary (filled):** cobalt fill, near-black label (#0a0812). Hover: same fill, glow `0 0 34px -4px cobalt`, -1px lift.
- **Outline:** transparent, cobalt label. Hover: cobalt-soft fill, `0 0 24px -6px` glow, -1px lift.
- **Focus:** global `:focus-visible` 2px cobalt outline, 3px offset.

### Gas Chips
- Pill, 1px `--neon-line` border, ink-dim stencil label; hover and active states take the chip's gas (`--chip-gas`) as border and text color. Used for project category tags, filter results, and flagship markers.

### Cards / Panels
- 2px corners, 1px line border, panel fill, padding 16–20px (large flagship panels 24–32px).
- Each card carries its gas via the `--card-gas` custom property: hover turns the border that gas and adds the 14px glow.
- Flagship cards additionally hold a wide soft gas glow at rest (`0 0 60px -24px gas`).

### Inputs / Fields
- Transparent fill, 1px line border, 4px corners, 44px height, ink text, ink-dim placeholder at 60% opacity.
- Focus: border becomes cobalt. No icon decoration; labels are silkscreen caps above the field.

### Navigation
- Fixed bar, 64px, transparent until 12px of scroll (then room-soft scrim + bottom line).
- Left: 36px NeonSign mini monogram + "F.B." stencil mark. Right: section links (stencil, ink-dim, active = cobalt with 14px text-shadow glow) + theme toggle + hamburger under `md`.
- Mobile menu: room-soft panel below the bar, full-width stencil links.
- Active section tracked by scrollspy at 40% viewport height.

### FAQ Accordion (FIG_006)
- Panel with 1px line border, 2px corners; question in display type (1.125–1.25rem), answer in body (0.875rem, ink-dim).
- Native `<details>/<summary>`; the open state is signaled by a 28px bordered "+" that rotates 45° (plus → cross) with a cobalt glow; no custom JS, keyboard accessible by construction.

### NeonSign (signature component)
- The FB monogram as one continuous SVG path (`M 52 236 V 88 H 140 V 112 H 76 V 164 H 132 L 172 164 V 236 A 50 50 0 0 0 272 236 V 168 A 60 60 0 0 0 172 118`), stroke cobalt, round caps, double-layer glow.
- Electrodes: red (#ff4438) circles at the two sealed ends (52,236) and (172,118).
- Lifecycle: powers on with a warm-up shimmer (2.6s), then breathes (opacity 0.82↔1 on a 3.4s ease) with a rare flicker (7s cycle).
- Interactive mode: click cycles the gas through the spectrum (argon → neon → helium → xenon → krypton → radon → back to cobalt), each with its own glow; the state is announced via `aria-live`.

## Do's and Don'ts

### Do:
- **Do** keep the FB monogram a single continuous tube path; never render it as two letters or a broken stroke.
- **Do** assign every project card exactly one gas from the spectrum; the gas IS the category signal.
- **Do** keep paragraph measure between 65 and 75 characters; descriptions at 0.875–1rem.
- **Do** use the stencil silkscreen for anything label-like (buttons, nav, chips, captions) and Instrument Sans for reading copy.
- **Do** place glow only where a light source exists — tube, terminals, or a hovered control.
- **Do** respect `prefers-reduced-motion`: breath, flicker, reveal and scroll hints all fall back to static.

### Don't:
- **Don't** use borders thicker than 1px, decorative side stripes, or gradient text anywhere.
- **Don't** introduce rounded glass, backdrop blur beyond the nav scrim, or emoji.
- **Don't** fake materials — no CSS bevels, embossing, or metal/chalk effects; the only material in the room is the glass tube, rendered as real SVG strokes with real glow.
- **Don't** add an offset shadow to any surface at rest.
- **Don't** invent new accent colors outside the gas spectrum.
- **Don't** let the hero carry more than one authored motion; extra animation dilutes the power-on moment.
