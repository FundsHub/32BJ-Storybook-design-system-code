# 32BJ Storybook deployment

Storybook is deployed from the `main` branch with GitHub Actions.

## What happens on every push to main

1. GitHub checks out the repository.
2. Node.js 20 is installed.
3. Dependencies are installed with `npm install --no-audit --no-fund`.
4. `npm run typecheck` must pass.
5. `npm run build:release` builds Storybook and the framework-free WordPress package.
6. The generated `storybook-static` folder is published to GitHub Pages, including the WordPress preview and download at `/wordpress/`.

If typecheck or the Storybook build fails, the publish step does not run.

## One-time GitHub Pages setting

In GitHub, open:

Settings > Pages > Build and deployment

Set **Source** to **GitHub Actions**.

After the workflow completes successfully, the Storybook URL should be:

https://fundshub.github.io/32BJ-Storybook-design-system-code/

The exact live URL is also shown in the successful `Publish Storybook` workflow job.

## Manual rebuild

Open the repository's **Actions** tab, select **Storybook CI and Pages**, then choose **Run workflow**.
