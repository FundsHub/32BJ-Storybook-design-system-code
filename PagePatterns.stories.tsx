import { useId, type ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FaqAccordionIndex } from './FaqAccordionIndex';
import { TableOfContents } from './TableOfContents';
import './page-patterns.css';

/**
 * Scope: Page Patterns only. Existing story exports are preserved.
 * Inventory source: Figma 1685:155 in 4CxWI3IClvdbfm8p2goxOY.
 * Detail and FAQ screens are composition examples, not new approved page designs.
 * Mobile examples have explicit local layout rules for inline Storybook Docs.
 */
const meta: Meta = {
  title: 'Patterns/Page Patterns',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    viewport: { defaultViewport: 'desktop1200' },
    docs: {
      description: {
        component:
          'The 12 page families from the Figma overview, plus content-detail and FAQ composition examples. Examples reuse the existing Table of Contents and Accordion components. Guidance copy is illustrative, not final member-facing content. Mobile examples use a 390px frame with 16px side spacing, including on this Docs page.'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

const patterns = [
  {
    name: 'Fund Landing Page',
    description: 'Fund landing structure with intro, service navigation, supporting content, and global chrome.',
    node: '1685:156'
  },
  {
    name: 'Content + Detail Page',
    description: 'Plan, service, and informational detail pages with related navigation and resources.',
    node: '1685:159'
  },
  {
    name: 'Form Page',
    description: 'Complete form flow using live field groups, validation, consent, and submit patterns.',
    node: '1685:162'
  },
  {
    name: 'Homepage',
    description: 'Global homepage composition with Header, reduced Hero, cards, editorial content, and Footer.',
    node: '1685:165'
  },
  {
    name: 'Benefit Collection',
    description: 'Large benefit and partner-card collections such as Health Other Benefits.',
    node: '1709:117'
  },
  {
    name: 'Resource + Forms Index',
    description: 'Grouped forms, documents, claims, warnings, and downloadable resources.',
    node: '1709:120'
  },
  {
    name: 'Course Catalog',
    description: 'Long Training course lists with clear hierarchy and scan-friendly grouping.',
    node: '1709:123'
  },
  {
    name: 'Locations Directory',
    description: 'Regional and state-based training locations, contacts, and office information.',
    node: '1709:126'
  },
  {
    name: 'Retirement Journey + Plan Index',
    description: 'Retirement journey choices, pension plan index, and benefits support module.',
    node: '1709:129'
  },
  {
    name: 'FAQ + Accordion Index',
    description: 'Long FAQ collections using the live 32BJ Accordion component.',
    node: '1709:132'
  },
  {
    name: 'Service Hub Landing',
    description: 'Legal service landing with service cards, optional news rail, and media features.',
    node: '1709:135'
  },
  {
    name: 'Glossary Index',
    description: 'Popular terms plus alphabetical/category glossary accordions for Legal content.',
    node: '1709:138'
  }
] as const;

function ExampleFrame({
  mobile = false,
  children
}: {
  mobile?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="ds-page-patterns" data-size={mobile ? 'mobile' : 'desktop'} data-fund="health">
      <div className="ds-page-patterns__surface">{children}</div>
    </div>
  );
}

function ExampleHeader({
  eyebrow,
  title,
  intro,
  id
}: {
  eyebrow: string;
  title: string;
  intro: string;
  id?: string;
}) {
  return (
    <header className="ds-page-patterns__intro" id={id}>
      <p className="ds-page-patterns__eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="ds-page-patterns__lede">{intro}</p>
    </header>
  );
}

function PatternInventory({ mobile = false }: { mobile?: boolean }) {
  return (
    <ExampleFrame mobile={mobile}>
      <ExampleHeader
        eyebrow="Page patterns"
        title="Page pattern inventory"
        intro="Use these 12 page families to choose a structure, then build with the existing components."
      />
      <div className="ds-page-patterns__inventory" data-figma-node="1685:155">
        {patterns.map((pattern) => (
          <article className="ds-page-patterns__inventory-card" key={pattern.node} data-figma-node={pattern.node}>
            <h2>{pattern.name}</h2>
            <p>{pattern.description}</p>
          </article>
        ))}
      </div>
      <p className="ds-page-patterns__note">
        This is the pattern inventory, not a claim that every complete page has been built and approved.
      </p>
    </ExampleFrame>
  );
}

const detailSections = [
  {
    key: 'eligibility',
    label: 'Eligibility',
    paragraphs: [
      'Explain who can use this benefit and what members need to check before taking the next step.',
      'Keep employment requirements, contribution rules, and exceptions together. Replace this guidance with approved plan-specific content.'
    ]
  },
  {
    key: 'coverage',
    label: 'What is covered',
    paragraphs: [
      'Group related services under clear headings so members can find the information they need.',
      'Place any limits or exceptions beside the relevant information. Link to the full plan document rather than repeating it here.'
    ]
  },
  {
    key: 'documents',
    label: 'Documents and forms',
    paragraphs: [
      'List the documents related to this topic using the existing Document Link or Resource Link component.',
      'Use descriptive names and identify the format and language. Add approved file destinations before publishing.'
    ]
  },
  {
    key: 'help',
    label: 'Get help',
    paragraphs: [
      'Close with a clear route to the team that can help with this benefit.',
      'Use the existing Member Services component when its contact details and available actions apply to the page.'
    ]
  }
] as const;

function LongFormExample({ mobile = false }: { mobile?: boolean }) {
  // Unique targets keep the Desktop and Mobile examples independent in Docs.
  const instanceId = useId().replace(/:/g, '');
  const prefix = `page-detail-${instanceId}`;
  const items = detailSections.map((section) => ({
    id: `${prefix}-${section.key}`,
    label: section.label
  }));

  return (
    <ExampleFrame mobile={mobile}>
      <ExampleHeader
        id={`${prefix}-top`}
        eyebrow="Content + detail example"
        title="Your health plan"
        intro="A long-form page with clear sections, related resources, and a route to support."
      />
      <p className="ds-page-patterns__note">
        Structure example. The guidance below is not member-facing benefit information.
      </p>
      <div className="ds-page-patterns__detail">
        <aside className="ds-page-patterns__navigation">
          <TableOfContents items={items} />
        </aside>
        <article className="ds-page-patterns__article" aria-label="Content and detail example">
          {detailSections.map((section, index) => (
            <section
              className="ds-page-patterns__section"
              id={items[index].id}
              key={section.key}
              tabIndex={-1}
              aria-labelledby={`${items[index].id}-heading`}
            >
              <h2 id={`${items[index].id}-heading`}>{section.label}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <a className="ds-page-patterns__back" href={`#${prefix}-top`}>Back to top</a>
        </article>
      </div>
    </ExampleFrame>
  );
}

export const ApprovedInventory: Story = {
  render: () => <PatternInventory />
};

export const MobileInventory: Story = {
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile390' } },
  render: () => <PatternInventory mobile />
};

export const LongFormDetail: Story = {
  render: () => <LongFormExample />
};

export const MobileLongFormDetail: Story = {
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile390' } },
  render: () => <LongFormExample mobile />
};

export const FaqIndex: Story = {
  render: () => <FaqAccordionIndex />
};

export const MobileFaqIndex: Story = {
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile390' } },
  render: () => <FaqAccordionIndex mobile />
};
