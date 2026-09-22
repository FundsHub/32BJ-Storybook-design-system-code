# 32BJ WordPress design-system package

This package contains production-ready HTML, CSS, vanilla JavaScript, and image assets. It does not ship React, Vue, Bootstrap, or another front-end framework.

## Fastest WordPress setup

1. Upload `32bj-design-system-wordpress.zip` in **Plugins > Add New > Upload Plugin**.
2. Activate **32BJ Design System**.
3. Open the `snippets` folder and copy the component markup you need into a theme template, custom HTML block, or Elementor HTML widget.
4. Replace sample text, links, IDs, and destinations with WordPress content.

Use `snippets/fund-landing-page.html` when you need the complete Health Fund landing-page structure rather than an individual component.

Use `snippets/homepage.html` for the approved main 32BJ Benefit Funds homepage. It is a separate pattern from the Health Fund landing page.

The plugin loads one CSS file and one small JavaScript file. The JavaScript adds only the behaviors that HTML cannot provide on its own, including accordion toggles, mobile navigation, language panels, carousel controls, video-state controls, and textarea counters.

## Elementor use

Use the HTML snippets as structure references. Rebuild editable content with normal Elementor containers and widgets, then apply the matching `ds-` class names. Use an HTML widget only when a native Elementor widget cannot produce the required semantic markup.

Wrap each component or group in `.ds-scope`. This keeps the production styles isolated from the WordPress theme.

## Theme integration without the plugin

Enqueue these two files from the theme:

- `assets/32bj-design-system.css`
- `assets/32bj-design-system.js`

Before the JavaScript file runs, define the image location:

```html
<script>
window.BJ32DesignSystem = {
  assetBase: '/wp-content/themes/your-theme/32bj-design-system/assets/'
};
</script>
```

## Editing rules

- Keep the `ds-` class names. They are the contract between Storybook and WordPress.
- Keep `data-fund` on themed components.
- Keep `aria-controls`, `aria-expanded`, and the matching unique IDs on interactive components.
- Use a unique ID each time an accordion, mobile menu, search panel, or language panel appears on a page.
- Replace sample `#` links before release.
- Test keyboard use, 200% zoom, narrow screens, long copy, Spanish copy, and reduced motion after CMS integration.

## Contents

- `assets/32bj-design-system.css` is the complete production style bundle.
- `assets/32bj-design-system.js` is the framework-free interaction layer.
- `assets/32bj-*` contains approved production images and icons.
- `snippets/*.html` contains one portable example per component or pattern.
- `manifest.json` records the package version and included snippets.
