import type { Meta, StoryObj } from '@storybook/react';
import { HomepageCard } from './HomepageCard';

const meta: Meta<typeof HomepageCard> = {
  title: 'Components/Cards',
  component: HomepageCard,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof HomepageCard>;

export const MemberPortal: Story = {
  args: {
    type: 'member'
  },
  parameters: {
    viewport: { defaultViewport: 'desktop1200' }
  }
};

export const WhoWeAre: Story = {
  args: {
    type: 'who'
  },
  parameters: {
    viewport: { defaultViewport: 'desktop1200' }
  }
};

export const EqualHeightRow: Story = {
  render: () => (
    <div className="ds-card-row">
      <HomepageCard type="member" />
      <HomepageCard type="who" />
    </div>
  ),
  parameters: {
    viewport: { defaultViewport: 'desktop1200' }
  }
};

export const MobileMemberPortal: Story = {
  args: {
    type: 'member',
    mobile: true
  },
  parameters: {
    viewport: { defaultViewport: 'mobile390' }
  }
};

export const MobileWhoWeAre: Story = {
  args: {
    type: 'who',
    mobile: true
  },
  parameters: {
    viewport: { defaultViewport: 'mobile390' }
  }
};
