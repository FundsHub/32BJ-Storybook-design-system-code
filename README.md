# 32BJ Public Site Design System — Storybook V1.1

Starter Storybook implementation derived from the approved 32BJ Figma V1.1 design system.

## Status

This repository was empty when the handoff began. This package is therefore a **new implementation baseline**, not a recovered copy of the prior Storybook source.

The code follows the production rules documented in Figma:

- Fund themes: Health, Training, Retirement/Pension, Legal
- Responsive review frame: 390px with 16px gutters
- 44px minimum mobile interaction target
- Rubik for body/control text
- Roboto Slab for headings/brand/navigation
- Global alert bar stays separate from page-level callouts
- Fund-aware Header, Footer, Button, Accordion, navigation, and responsive behavior

## Run locally

```bash
npm install
npm run storybook
```

## Production token boundary

Only the production 32BJ token layers represented in `src/styles/tokens.css` should flow into production code. Legacy/Audit Figma values are intentionally excluded.

## Figma source

File: `4CxWI3IClvdbfm8p2goxOY`

The component comments include important Figma node IDs where a component has a known master.

## Next implementation pass

This starter gives the team a coded Storybook baseline for all 22 documented component areas. Production integration should still verify:

1. exact icon and image assets
2. CMS and WordPress/Elementor integration boundaries
3. real link/action destinations
4. keyboard behavior and focus management
5. 200% zoom/reflow
6. complete Spanish/localization stress testing
7. Code Connect only after component APIs stabilize

## V1.1.1 implementation parity update

This patch tightens the code-side implementation against the approved Figma V1.1 system. It adds full Button state coverage, all Input and Textarea states plus mobile stories, source-backed Badge and Document Link variants, functional Member Services actions, and the five approved Form Field Group compositions.
