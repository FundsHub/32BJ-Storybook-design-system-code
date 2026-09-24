import type { Meta, StoryObj } from '@storybook/react';
import { FaqAccordionIndex } from './FaqAccordionIndex';

const meta = {
  title: 'Patterns/FAQ + Accordion Index',
  component: FaqAccordionIndex,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'SRSP FAQ page reference from Figma 740:6316. The Figma frame includes 2025 contribution figures, so the open answer uses sample copy until current plan content is approved. The matching WordPress snippet is faq-accordion-index.html.' } }
  }
} satisfies Meta<typeof FaqAccordionIndex>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Desktop: Story = { args: { mobile: false } };
export const Mobile: Story = { args: { mobile: true }, parameters: { viewport: { defaultViewport: 'mobile390' } } };
