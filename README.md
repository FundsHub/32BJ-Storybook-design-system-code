# 32BJ Public Site Design System — Storybook V1.5

Starter Storybook implementation derived from the approved 32BJ Figma V1.1 design system.

## Status

This repository now contains the active implementation baseline for the 32BJ public-site design system. The public Storybook is deployed from this source and is the code-side reference for component and page-pattern behavior.

The code follows the production rules documented in Figma:

- Fund themes: Health, Training, Retirement/Pension, Legal
- Responsive review frame: 390px with 16px gutters
- 44px minimum mobile interaction target
- Rubik for body/control text
- Roboto Slab for headings/brand/navigation
- Global alert bar stays separate from page-level callouts
- Fund-aware Header, Footer, Button, Accordion, navigation, and responsive behavior

## WordPress production handoff

Storybook is the visual documentation and QA shell. The website handoff is generated separately and contains no front-end framework.

```bash
npm run build:wordpress
```

That command creates `wordpress-dist` with:

- one production CSS bundle
- one vanilla JavaScript interaction file
- individual HTML snippets for components and patterns
- approved production assets
- an installable WordPress plugin ZIP
- a local component preview

Use `npm run build:release` to build Storybook and place the complete WordPress handoff at `storybook-static/wordpress`.

## Run locally

```bash
npm install
npm run storybook
```

## Production token boundary

Only the production 32BJ token layers represented in `tokens.css` should flow into production code. Legacy and audit-only Figma values are intentionally excluded.

The production Figma source currently contains 145 variables across seven collections: primitives, semantic color, spacing, shape, sizing, typography, and motion. Storybook documents the shared scales and maintains CSS aliases for implementation.

## Figma source

File: `4CxWI3IClvdbfm8p2goxOY`

The component comments include important Figma node IDs where a component has a known master.

## Next implementation pass

Storybook covers all 22 documented component areas and now includes the approved 12-family page-pattern inventory, the first complete Fund Landing Page pattern, an interactive Benefit Plan Finder journey, responsive data tables, and long-form in-page navigation. The Fund Landing Page is also included as a complete framework-free WordPress snippet. Production integration should still verify:

1. exact icon and image assets
2. final CMS content mapping and WordPress/Elementor integration QA
3. real link/action destinations
4. keyboard behavior and focus management
5. 200% zoom/reflow
6. complete Spanish/localization stress testing
7. accessibility and interaction checks in CI
8. Code Connect only after component APIs stabilize

## V1.1.1 implementation parity update

This patch tightens the code-side implementation against the approved Figma V1.1 system. It adds full Button state coverage, all Input and Textarea states plus mobile stories, source-backed Badge and Document Link variants, functional Member Services actions, and the five approved Form Field Group compositions.
