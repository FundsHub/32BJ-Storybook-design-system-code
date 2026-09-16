import type { Meta, StoryObj } from '@storybook/react';
import { AlertBar } from './index';

const meta: Meta<typeof AlertBar> = {
  title: 'Components/Alert Bar',
  component: AlertBar,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof AlertBar>;

export const SAR: Story = {};
export const WrappedMessage: Story = {
  args: {
    message: 'The Summary Annual Report (SAR) has been updated to reflect corrected information for members and dependents. Please review the revised report for the latest details.'
  },
  parameters: { viewport: { defaultViewport: 'mobile390' } }
};
