import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './index';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    label: 'Your Question *',
    placeholder: 'Tell us how we can help you.',
    maxLength: 2000
  }
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const Filled: Story = { args: { state: 'filled', defaultValue: 'I need help understanding my benefit options.' } };
export const Focus: Story = { args: { state: 'focus' } };
export const Error: Story = { args: { state: 'error', error: 'Enter your question before continuing.' } };
export const Disabled: Story = { args: { state: 'disabled' } };
export const Mobile: Story = { args: { mobile: true }, parameters: { viewport: { defaultViewport: 'mobile390' } } };
