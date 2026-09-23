import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync
} from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, '..');
const outputRoot = join(repositoryRoot, 'wordpress-dist');
const assetOutput = join(outputRoot, 'assets');
const snippetOutput = join(outputRoot, 'snippets');

const packageJson = JSON.parse(readFileSync(join(repositoryRoot, 'package.json'), 'utf8'));
const version = packageJson.version;

const cssSources = [
  'wordpress/source/production-base.css',
  'tokens.css',
  'components.css',
  'accordion.css',
  'phase20.css',
  'hero-carousel.css',
  'benefit-finder.css',
  'page-patterns.css',
  'location-card.css',
  'course-card.css',
  'benefit-collection.css',
  'resource-forms-index.css',
  'retirement-journey-plan-index.css',
  'fund-landing-page.css',
  'homepage.css'
];

const imageAssets = [
  '32bj-benefit-funds-logo.svg',
  '32bj-search-icon.png',
  '32bj-hero-banner.png',
  '32bj-hero-visual.png',
  '32bj-member-portal.png',
  '32bj-who-we-are.png',
  '32bj-health-fund-welcome-team.png',
  '32bj-healthcare-costs.png',
  '32bj-facebook.png',
  '32bj-bluesky.png',
  '32bj-instagram.svg',
  '32bj-footer-qr.png',
  '32bj-home-speaker.png',
  '32bj-home-benefit-health.png',
  '32bj-home-benefit-retirement.png',
  '32bj-home-benefit-legal.png',
  '32bj-home-benefit-training.png',
  '32bj-home-alert-icon.png',
  '32bj-benefit-matters.png',
  '32bj-home-staff.png',
  '32bj-home-seminar.png',
  '32bj-home-careers.png'
];

rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(assetOutput, { recursive: true });
mkdirSync(snippetOutput, { recursive: true });

const cssBundle = cssSources
  .map((source) => {
    const content = readFileSync(join(repositoryRoot, source), 'utf8').trim();
    return `/* Source: ${source} */\n${content}`;
  })
  .join('\n\n');

writeFileSync(
  join(assetOutput, '32bj-design-system.css'),
  `/* 32BJ Design System ${version}. WordPress production bundle. */\n${cssBundle}\n`
);

copyFileSync(
  join(repositoryRoot, 'wordpress/source/32bj-design-system.js'),
  join(assetOutput, '32bj-design-system.js')
);

imageAssets.forEach((asset) => {
  copyFileSync(join(repositoryRoot, asset), join(assetOutput, asset));
});

const catalogSource = readFileSync(
  join(repositoryRoot, 'wordpress/source/catalog.html'),
  'utf8'
);

const ids = Array.from(catalogSource.matchAll(/\sid="([^"]+)"/g), (result) => result[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
if (duplicateIds.length) {
  throw new Error(`Duplicate catalog IDs: ${duplicateIds.join(', ')}`);
}

const controlledIds = Array.from(
  catalogSource.matchAll(/aria-controls="([^"]+)"/g),
  (result) => result[1]
);
const missingControls = controlledIds.filter((id) => !ids.includes(id));
if (missingControls.length) {
  throw new Error(`Missing aria-controls targets: ${missingControls.join(', ')}`);
}

const referencedAssets = Array.from(
  catalogSource.matchAll(/data-ds-asset="([^"]+)"/g),
  (result) => result[1]
);
const missingAssets = referencedAssets.filter((asset) => !imageAssets.includes(asset));
if (missingAssets.length) {
  throw new Error(`Missing package assets: ${missingAssets.join(', ')}`);
}

copyFileSync(
  join(repositoryRoot, 'wordpress/source/catalog.css'),
  join(outputRoot, 'catalog.css')
);
writeFileSync(join(outputRoot, 'index.html'), catalogSource);

function dedent(value) {
  const lines = value.replace(/^\n+|\n+$/g, '').split('\n');
  const indents = lines
    .filter((line) => line.trim())
    .map((line) => line.match(/^\s*/)?.[0].length ?? 0);
  const minimum = indents.length ? Math.min(...indents) : 0;
  return `${lines.map((line) => line.slice(minimum)).join('\n')}\n`;
}

const snippetPattern = /<!-- 32BJ-SNIPPET ([a-z0-9-]+) START -->\s*([\s\S]*?)\s*<!-- 32BJ-SNIPPET \1 END -->/g;
const snippets = [];
let match;

while ((match = snippetPattern.exec(catalogSource)) !== null) {
  const [, name, markup] = match;
  if (snippets.includes(name)) throw new Error(`Duplicate snippet name: ${name}`);
  if (/class="[^"]*\bcatalog-[\w-]+/.test(markup)) {
    throw new Error(`Snippet ${name} depends on catalog-only CSS.`);
  }
  snippets.push(name);
  writeFileSync(join(snippetOutput, `${name}.html`), dedent(markup));
}

if (snippets.length < 20) {
  throw new Error(`Expected at least 20 WordPress snippets, found ${snippets.length}.`);
}

const readme = readFileSync(join(repositoryRoot, 'wordpress/source/README.md'), 'utf8');
writeFileSync(join(outputRoot, 'README.md'), readme);

const pluginSource = readFileSync(
  join(repositoryRoot, 'wordpress/integration/32bj-design-system.php'),
  'utf8'
).replaceAll('1.0.0', version);
writeFileSync(join(outputRoot, '32bj-design-system.php'), pluginSource);

const manifest = {
  name: '32BJ WordPress Design System',
  version,
  framework: 'none',
  productionFiles: [
    'assets/32bj-design-system.css',
    'assets/32bj-design-system.js'
  ],
  snippets: snippets.map((name) => `snippets/${name}.html`),
  assets: imageAssets.map((asset) => `assets/${asset}`),
  sourceCss: cssSources
};

writeFileSync(
  join(outputRoot, 'manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`
);

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(absolute) : [absolute];
  });
}

function makeCrcTable() {
  return Array.from({ length: 256 }, (_, index) => {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) {
      value = (value & 1) ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1);
    }
    return value >>> 0;
  });
}

const crcTable = makeCrcTable();

function crc32(buffer) {
  let value = 0xffffffff;
  for (const byte of buffer) {
    value = crcTable[(value ^ byte) & 0xff] ^ (value >>> 8);
  }
  return (value ^ 0xffffffff) >>> 0;
}

function dosDateTime(date) {
  const year = Math.max(date.getFullYear(), 1980);
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const day = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { time, day };
}

function createStoredZip(entries) {
  const localParts = [];
  const centralParts = [];
  let localOffset = 0;

  entries.forEach(({ name, data, modifiedAt }) => {
    const filename = Buffer.from(name.replaceAll('\\', '/'), 'utf8');
    const content = Buffer.isBuffer(data) ? data : Buffer.from(data);
    const checksum = crc32(content);
    const { time, day } = dosDateTime(modifiedAt || new Date());

    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0);
    localHeader.writeUInt16LE(20, 4);
    localHeader.writeUInt16LE(0x0800, 6);
    localHeader.writeUInt16LE(0, 8);
    localHeader.writeUInt16LE(time, 10);
    localHeader.writeUInt16LE(day, 12);
    localHeader.writeUInt32LE(checksum, 14);
    localHeader.writeUInt32LE(content.length, 18);
    localHeader.writeUInt32LE(content.length, 22);
    localHeader.writeUInt16LE(filename.length, 26);
    localHeader.writeUInt16LE(0, 28);
    localParts.push(localHeader, filename, content);

    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0);
    centralHeader.writeUInt16LE(20, 4);
    centralHeader.writeUInt16LE(20, 6);
    centralHeader.writeUInt16LE(0x0800, 8);
    centralHeader.writeUInt16LE(0, 10);
    centralHeader.writeUInt16LE(time, 12);
    centralHeader.writeUInt16LE(day, 14);
    centralHeader.writeUInt32LE(checksum, 16);
    centralHeader.writeUInt32LE(content.length, 20);
    centralHeader.writeUInt32LE(content.length, 24);
    centralHeader.writeUInt16LE(filename.length, 28);
    centralHeader.writeUInt16LE(0, 30);
    centralHeader.writeUInt16LE(0, 32);
    centralHeader.writeUInt16LE(0, 34);
    centralHeader.writeUInt16LE(0, 36);
    centralHeader.writeUInt32LE(0, 38);
    centralHeader.writeUInt32LE(localOffset, 42);
    centralParts.push(centralHeader, filename);

    localOffset += localHeader.length + filename.length + content.length;
  });

  const centralDirectory = Buffer.concat(centralParts);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(localOffset, 16);
  end.writeUInt16LE(0, 20);

  return Buffer.concat([...localParts, centralDirectory, end]);
}

const pluginFiles = [
  join(outputRoot, '32bj-design-system.php'),
  join(outputRoot, 'README.md'),
  join(outputRoot, 'manifest.json'),
  ...listFiles(assetOutput),
  ...listFiles(snippetOutput)
];

const zipEntries = pluginFiles.map((absolutePath) => ({
  name: `32bj-design-system/${relative(outputRoot, absolutePath)}`,
  data: readFileSync(absolutePath),
  modifiedAt: statSync(absolutePath).mtime
}));

writeFileSync(
  join(outputRoot, '32bj-design-system-wordpress.zip'),
  createStoredZip(zipEntries)
);

console.log(`Built WordPress package ${version} with ${snippets.length} snippets.`);
