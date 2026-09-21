import type { Meta, StoryObj } from '@storybook/react';
import { VideoFeature } from './index';

const meta: Meta<typeof VideoFeature> = {
  title: 'Patterns/Video + Media',
  component: VideoFeature,
  tags: ['autodocs'],
  args: { title: 'How to use your 32BJ Health Fund benefits', summary: 'A short introduction to finding care, checking coverage, and getting help.', duration: '3:18', hasCaptions: true }
};
export default meta;
type Story = StoryObj<typeof VideoFeature>;
export const Default: Story = {};
export const WithoutCaptions: Story = { args: { hasCaptions: false, title: 'Benefits overview in another language' } };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile390' } } };
