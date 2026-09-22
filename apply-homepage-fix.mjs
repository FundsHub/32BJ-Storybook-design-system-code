import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const bundleRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(process.argv[2] || process.cwd());

const required = ['package.json', 'wordpress/source/catalog.html'];
for (const relative of required) {
  const target = path.join(repoRoot, relative);
  if (!fs.existsSync(target)) {
    throw new Error(`Expected ${relative} in ${repoRoot}. Run this against the 32BJ Storybook repository root.`);
  }
}

for (const file of ['Homepage.tsx', 'Homepage.stories.tsx', 'homepage.css']) {
  fs.copyFileSync(path.join(bundleRoot, file), path.join(repoRoot, file));
  console.log(`Updated ${file}`);
}

const snippetPath = path.join(bundleRoot, 'wordpress/source/homepage-snippet.html');
const snippet = fs.readFileSync(snippetPath, 'utf8').trim();
const catalogPath = path.join(repoRoot, 'wordpress/source/catalog.html');
let catalog = fs.readFileSync(catalogPath, 'utf8');
const marker = /<!-- 32BJ-SNIPPET homepage START -->[\s\S]*?<!-- 32BJ-SNIPPET homepage END -->/;
if (!marker.test(catalog)) throw new Error('Homepage snippet markers were not found in wordpress/source/catalog.html.');
catalog = catalog.replace(marker, snippet);
fs.writeFileSync(catalogPath, catalog);
console.log('Updated wordpress/source/catalog.html homepage snippet');

const pagePatternsPath = path.join(repoRoot, 'PagePatterns.stories.tsx');
if (fs.existsSync(pagePatternsPath)) {
  let pagePatterns = fs.readFileSync(pagePatternsPath, 'utf8');
  pagePatterns = pagePatterns
    .replace("description: 'Global homepage composition with Header, reduced Hero, cards, editorial content, and Footer.'", "description: 'Approved 32BJ Benefit Funds homepage composition from the current Figma source of truth.'")
    .replace("node: '1685:165'", "node: '1373:8715'");
  fs.writeFileSync(pagePatternsPath, pagePatterns);
  console.log('Updated PagePatterns homepage reference');
}

const welcomePath = path.join(repoRoot, 'Welcome.mdx');
if (fs.existsSync(welcomePath)) {
  let welcome = fs.readFileSync(welcomePath, 'utf8');
  welcome = welcome.replace(
    'Global homepage composition with Header, reduced Hero, cards, editorial content, and Footer.',
    'Approved 32BJ Benefit Funds homepage with the Figma-matched header, hero, cards, alerts, editorial content, and footer.'
  );
  fs.writeFileSync(welcomePath, welcome);
  console.log('Updated Welcome homepage description');
}

console.log('\nHomepage source now targets Figma node 1373:8715.');
console.log('Next: npm run typecheck && npm run build:release');
