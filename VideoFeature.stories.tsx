import type { Meta, StoryObj } from '@storybook/react';
import { VideoFeature } from './index';
import { productionAssets } from './productionAssets';

const meta: Meta<typeof VideoFeature> = {
  title: 'Patterns/Video + Media',
  component: VideoFeature,
  tags: ['autodocs'],
  args: {
    title: 'Learn more about the Training Fund',
    summary: 'Discover programs, resources, and support designed to help members build skills, advance their careers, and plan their next opportunity.',
    posterSrc: productionAssets.trainingVideoPoster,
    fund: 'training'
  }
};
export default meta;
type Story = StoryObj<typeof VideoFeature>;
export const Default: Story = {};
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile390' } } };
