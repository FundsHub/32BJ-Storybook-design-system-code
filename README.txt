32BJ HOMEPAGE FIGMA PARITY FIX
Source of truth: Figma 4CxWI3IClvdbfm8p2goxOY, node 1373:8715

Included:
- Homepage.tsx
- homepage.css
- Homepage.stories.tsx
- wordpress/source/homepage-snippet.html
- apply-homepage-fix.mjs

What changed:
- Removed the incorrect alert/message content from the red utility bar.
- Matched the 145px Figma header and correct Health navigation order.
- Reused the existing Hero Carousel and Homepage Card components.
- Rebuilt the Benefits card to the compact 201x262 Figma layout.
- Moved the LTD update into the correct compact blue 1104x99 announcement.
- Rebuilt Need Help, Benefit Matters, and News & Member Alerts to Figma positions/content.
- Rebuilt Staff Helping Members and the split Seminars layout.
- Removed the fake video panel and matched the Watch, Social, and Careers section.
- Replaced the oversized shared footer treatment with the 152px homepage footer from Figma.
- Updated Storybook documentation to Figma node 1373:8715.
- Added matching framework-free WordPress markup.

To apply from the repository root:
node /path/to/32bj-homepage-fix/apply-homepage-fix.mjs .

Then validate:
npm run typecheck
npm run build:release
