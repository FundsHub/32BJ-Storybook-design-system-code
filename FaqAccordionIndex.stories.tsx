import type { Meta, StoryObj } from '@storybook/react';
import { FaqAccordionIndex } from './FaqAccordionIndex';

const meta = {
  title: 'Patterns/FAQ + Accordion Index',
  component: FaqAccordionIndex,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'One illustrative composition for the FAQ + Accordion Index family in Figma inventory 1709:132. Figma defines the family, not a finished FAQ page. Replace sample answers with approved content. The framework-free WordPress example is faq-accordion-index.html.' } }
  }
} satisfies Meta<typeof FaqAccordionIndex>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Desktop: Story = { args: { mobile: false } };
export const Mobile: Story = { args: { mobile: true }, parameters: { viewport: { defaultViewport: 'mobile390' } } };
