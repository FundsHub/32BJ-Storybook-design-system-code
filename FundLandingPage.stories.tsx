import type { Meta, StoryObj } from '@storybook/react';
import { FundLandingPage } from './FundLandingPage';

const meta: Meta<typeof FundLandingPage> = {
  title: 'Patterns/Fund Landing Page',
  component: FundLandingPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop1200' },
    docs: {
      description: {
        component:
          'The complete Health Fund landing-page pattern. It assembles the approved alert, header, live-text hero, benefit cards, Member Services, and footer. The WordPress handoff includes the same structure as framework-free HTML.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof FundLandingPage>;

export const Desktop: Story = {
  args: { mobile: false }
};

export const Mobile: Story = {
  args: { mobile: true },
  parameters: {
    viewport: { defaultViewport: 'mobile390' }
  }
};
