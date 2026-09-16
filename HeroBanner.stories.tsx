import type { Meta, StoryObj } from '@storybook/react';
import { HeroBanner } from './index';

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/Hero + Banner',
  component: HeroBanner,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof HeroBanner>;

export const DesktopReduced: Story = {};
export const MobileLiveText: Story = { args: { mobile: true }, parameters: { viewport: { defaultViewport: 'mobile390' } } };
export const LongCopy: Story = {
  args: {
    title: 'Important benefit information should stay readable at every screen size',
    body: 'Keep essential copy outside the image so the message can resize, translate, wrap naturally, and remain accessible without depending on an image crop.'
  }
};
