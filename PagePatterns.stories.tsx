import type { Meta, StoryObj } from '@storybook/react';
import { TableOfContents } from './index';

const meta: Meta = { title: 'Patterns/Page Patterns', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const patterns = [
  ['Fund Landing Page', 'Fund identity, task entry points, featured content'],
  ['Content + Detail Page', 'Long-form information with in-page navigation'],
  ['Form Page', 'Questions, help text, validation, submission'],
  ['Homepage', 'Alerts, hero, featured tasks, news, member services'],
  ['Benefit Collection', 'Related benefits grouped by member need'],
  ['Resource + Forms Index', 'Filterable forms and document links'],
  ['Course Catalog', 'Searchable courses, dates, and registration actions'],
  ['Locations Directory', 'Location, hours, services, and directions'],
  ['Retirement Journey + Plan Index', 'Guided retirement stages and plan choices'],
  ['FAQ + Accordion Index', 'Scannable questions grouped by topic'],
  ['Service Hub Landing', 'Service categories and high-priority contact routes'],
  ['Glossary Index', 'Alphabetical definitions with anchored navigation']
];

const tocItems = [
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'coverage', label: 'What is covered' },
  { id: 'documents', label: 'Documents and forms' },
  { id: 'help', label: 'Get help' }
];

export const ApprovedInventory: Story = {
  render: () => (
    <div className="sb-foundation"><header className="sb-foundation__intro"><p className="sb-eyebrow">Approved compositions</p><h1>Page pattern inventory</h1><p>These 12 families are the required composition layer between individual components and finished pages.</p></header><div className="sb-pattern-grid">{patterns.map(([name, purpose], index) => <article key={name}><span>{String(index + 1).padStart(2, '0')}</span><h2>{name}</h2><p>{purpose}</p></article>)}</div></div>
  )
};

export const LongFormDetail: Story = {
  render: () => (
    <div className="ds-long-form-pattern" data-fund="health">
      <TableOfContents items={tocItems} />
      <article>
        <p className="sb-eyebrow">Health Fund</p>
        <h1>Your health plan</h1>
        <p className="ds-long-form-pattern__lede">Use this structure for policy, legal, benefit, and other pages that members need to scan and revisit.</p>
        {tocItems.map((item, index) => <section id={item.id} key={item.id}><h2>{item.label}</h2><p>{index === 0 ? 'Confirm the employment and contribution requirements that apply to the member before presenting plan details.' : 'Keep each section focused, lead with the member task, and link directly to related forms or support when needed.'}</p><p>Content should remain readable at 200% zoom and each heading should provide a stable deep link.</p></section>)}
      </article>
    </div>
  )
};
