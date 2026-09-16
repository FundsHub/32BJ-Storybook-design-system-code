import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Work site or location address',
    placeholder: 'Enter an address',
    helper: 'Use the address where you work.'
  }
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Filled: Story = { args: { state: 'filled', defaultValue: '25 West 18th Street' } };
export const Focus: Story = { args: { state: 'focus' } };
export const Error: Story = { args: { state: 'error', error: 'Enter a work site to continue.' } };
export const Disabled: Story = { args: { state: 'disabled' } };
export const Mobile: Story = {
  args: { mobile: true },
  parameters: { viewport: { defaultViewport: 'mobile390' } }
};
