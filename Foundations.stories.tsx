import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = { title: 'Foundations/Production Tokens', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const themes = [
  ['Global', '#0676D8', 'White'],
  ['Health', '#0077C8', 'White'],
  ['Training', '#398532', 'White'],
  ['Retirement', '#C94B1F', 'White'],
  ['Legal', '#FFBF0F', '#222222']
];

const statusColors = [
  ['Success', '#198754'],
  ['Warning', '#FFCD00'],
  ['Error', '#E14545'],
  ['Info', '#57D2FF'],
  ['Focus', '#FFCD00'],
  ['Announcement', '#FF605B']
];

const typeScale = [
  ['xs', 12], ['sm', 14], ['base', 16], ['lg', 18],
  ['xl', 20], ['2xl', 24], ['3xl', 30], ['4xl', 36]
] as const;

const spaces = [1, 0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 64, 80];
const radii = [['none', 0], ['sm', 2], ['base', 4], ['md', 6], ['lg', 8], ['xl', 12], ['2xl', 16], ['full', 30], ['card', 32]] as const;
const motion = [['fast', 180], ['base', 300], ['slow', 420], ['emphasis', 780]] as const;

export const Color: Story = {
  render: () => (
    <div className="sb-foundation">
      <header className="sb-foundation__intro">
        <p className="sb-eyebrow">Production foundation</p>
        <h1>Color and theme modes</h1>
        <p>Semantic roles switch by fund. Components should use the role, not a fund-specific hex value.</p>
      </header>
      <section>
        <h2>Theme accents</h2>
        <div className="sb-token-grid">
          {themes.map(([name, color, onColor]) => (
            <div className="sb-color-token" key={name} style={{ background: color, color: onColor }}>
              <strong>{name}</strong><code>{color}</code>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Status roles</h2>
        <div className="sb-token-grid">
          {statusColors.map(([name, color]) => (
            <div className="sb-status-token" key={name}><span style={{ background: color }} /><strong>{name}</strong><code>{color}</code></div>
          ))}
        </div>
      </section>
      <p className="sb-token-note">Figma source: 39 primitive color variables plus 39 semantic color roles across Global, Health, Retirement, Training, and Legal modes.</p>
    </div>
  )
};

export const Typography: Story = {
  render: () => (
    <div className="sb-foundation">
      <header className="sb-foundation__intro"><p className="sb-eyebrow">Production foundation</p><h1>Typography</h1><p>Roboto Slab supports headings. Rubik supports body copy, controls, and data.</p></header>
      <section className="sb-type-families">
        <div><span>Heading</span><strong style={{ fontFamily: 'var(--32bj-font-heading)' }}>Roboto Slab</strong></div>
        <div><span>Body</span><strong style={{ fontFamily: 'var(--32bj-font-body)' }}>Rubik</strong></div>
        <div><span>Code</span><strong style={{ fontFamily: 'var(--32bj-font-mono)' }}>Fira Code</strong></div>
      </section>
      <section><h2>Type scale</h2><div className="sb-type-scale">{typeScale.map(([name, size]) => <div key={name}><code>{name} · {size}px</code><span style={{ fontSize: size }}>Member benefits made clearer</span></div>)}</div></section>
      <section><h2>Weights</h2><p>Light 300 · Regular 400 · Medium 500 · Semibold 600 · Bold 700 · Extrabold 800</p></section>
    </div>
  )
};

export const SpacingAndShape: Story = {
  render: () => (
    <div className="sb-foundation">
      <header className="sb-foundation__intro"><p className="sb-eyebrow">Production foundation</p><h1>Spacing and shape</h1><p>Use the shared scale for page rhythm, component spacing, and consistent corner treatment.</p></header>
      <section><h2>Spacing scale</h2><div className="sb-space-scale">{spaces.map((space) => <div key={space}><code>{space === 1 ? 'px' : space} · {space}px</code><span style={{ width: Math.max(space * 3, 2) }} /></div>)}</div></section>
      <section><h2>Radius scale</h2><div className="sb-radius-grid">{radii.map(([name, radius]) => <div key={name}><span style={{ borderRadius: radius }} /><code>{name} · {radius}px</code></div>)}</div></section>
      <p className="sb-token-note">Cards use the dedicated 32px card radius. Standard controls use the 30px full radius where a pill shape is required.</p>
    </div>
  )
};

export const SizingMotionAndResponsive: Story = {
  render: () => (
    <div className="sb-foundation">
      <header className="sb-foundation__intro"><p className="sb-eyebrow">Production foundation</p><h1>Sizing, motion, and responsive rules</h1><p>The 390px review frame is a test target. Layouts remain fluid between mobile and the 1200px page container.</p></header>
      <section><h2>Sizing</h2><div className="sb-rule-grid"><article><strong>Icons</strong><p>16 / 24 / 32px</p></article><article><strong>Controls</strong><p>40 / 44 / 48px</p></article><article><strong>Containers</strong><p>1104px content / 1200px page</p></article><article><strong>Mobile gutter</strong><p>16px at the 390px review frame</p></article></div></section>
      <section><h2>Motion</h2><div className="sb-motion-grid">{motion.map(([name, duration]) => <div key={name}><span style={{ animationDuration: `${duration}ms` }} /><strong>{name}</strong><code>{duration}ms</code></div>)}</div><p>Standard easing: <code>cubic-bezier(0.2, 0, 0, 1)</code>. Travel distances: 12px and 16px.</p></section>
      <section><h2>Responsive behavior</h2><div className="sb-rule-grid"><article><strong>390px review</strong><p>Validate 16px gutters and 44px minimum targets.</p></article><article><strong>640px pattern shift</strong><p>Data tables become labeled cards and actions stack.</p></article><article><strong>1104px content</strong><p>Long-form and component content stops growing.</p></article><article><strong>1200px page</strong><p>Header, footer, and page chrome reach their maximum width.</p></article></div></section>
    </div>
  )
};
