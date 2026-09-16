import type { Meta, StoryObj } from '@storybook/react';
import { MemberServices } from './index';

const meta: Meta<typeof MemberServices> = {
  title: 'Components/Member Services',
  component: MemberServices,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof MemberServices>;

export const Desktop: Story = {};
export const Mobile: Story = {
  args: { mobile: true },
  parameters: { viewport: { defaultViewport: 'mobile390' } }
};
export const LegalTheme: Story = { args: { fund: 'legal' } };
