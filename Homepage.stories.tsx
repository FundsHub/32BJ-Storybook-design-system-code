import type { Meta, StoryObj } from '@storybook/react';
import { Homepage } from './Homepage';

const meta: Meta<typeof Homepage> = {
  title: 'Patterns/Homepage',
  component: Homepage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop1200' },
    docs: {
      description: {
        component: 'The approved 32BJ Benefit Funds homepage from Figma node 1373:8715. This is a separate page pattern from the Health Fund landing page and includes a matching framework-free WordPress handoff.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Homepage>;

export const Desktop: Story = { args: { mobile: false } };

export const Mobile: Story = {
  args: { mobile: true },
  parameters: { viewport: { defaultViewport: 'mobile390' } }
};
