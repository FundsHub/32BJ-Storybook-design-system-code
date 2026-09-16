import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './index';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { children: 'Badge', pattern: 'cleaning' }
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Cleaning: Story = {};
export const Security: Story = { args: { pattern: 'security' } };
