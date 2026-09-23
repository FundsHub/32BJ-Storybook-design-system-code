import type { Meta, StoryObj } from '@storybook/react';
import { ContentDetailPage } from './ContentDetailPage';

const meta = {
  title: 'Patterns/Content + Detail Page',
  component: ContentDetailPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'Illustrative composition for the Content + Detail family in Figma inventory 1685:159. Copy and document destinations are examples, not approved plan content. The matching framework-free WordPress snippet is content-detail-page.html.' } }
  }
} satisfies Meta<typeof ContentDetailPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Desktop: Story = { args: { mobile: false } };
export const Mobile: Story = { args: { mobile: true }, parameters: { viewport: { defaultViewport: 'mobile1' } } };
