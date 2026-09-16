import type { Meta, StoryObj } from '@storybook/react';
import { HomepageCard } from './index';

const meta: Meta<typeof HomepageCard> = {
  title: 'Components/Cards',
  component: HomepageCard,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof HomepageCard>;

export const MemberPortal: Story = {};
export const WhoWeAre: Story = { args: { type: 'who' } };
export const EqualHeightRow: Story = {
  render: () => (
    <div className="ds-card-row">
      <HomepageCard />
      <HomepageCard type="who" />
    </div>
  )
};
