import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Learn more', fund: 'health', state: 'default' }
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Health: Story = {};
export const Training: Story = { args: { fund: 'training' } };
export const Retirement: Story = { args: { fund: 'retirement' } };
export const Legal: Story = { args: { fund: 'legal' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Hover: Story = { args: { state: 'hover' } };
export const Focus: Story = { args: { state: 'focus' } };
export const Disabled: Story = { args: { state: 'disabled' } };
export const FundStateMatrix: Story = {
  render: () => (
    <div className="sb-section">
      {(['health', 'retirement', 'training', 'legal'] as const).map((fund) => (
        <div className="sb-row" key={fund}>
          {(['default', 'hover', 'focus', 'disabled'] as const).map((state) => (
            <Button key={state} fund={fund} state={state}>{state}</Button>
          ))}
        </div>
      ))}
    </div>
  )
};
