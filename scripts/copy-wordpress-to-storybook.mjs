import { cpSync, existsSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(repositoryRoot, 'wordpress-dist');
const storybook = join(repositoryRoot, 'storybook-static');
const destination = join(storybook, 'wordpress');

if (!existsSync(source)) {
  throw new Error('wordpress-dist is missing. Run npm run build:wordpress first.');
}

if (!existsSync(storybook)) {
  throw new Error('storybook-static is missing. Run npm run build-storybook first.');
}

rmSync(destination, { recursive: true, force: true });
cpSync(source, destination, { recursive: true });
console.log('Copied the WordPress package into the Storybook release.');
