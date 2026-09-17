import type { Meta, StoryObj } from '@storybook/react';
import { HeroBanner } from './index';

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/Hero + Banner',
  component: HeroBanner,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof HeroBanner>;

export const DesktopFigmaMatch: Story = {
  args: { mode: 'figma' },
  parameters: { viewport: { defaultViewport: 'desktop1200' } }
};

export const DesktopReduced: Story = {
  args: { mode: 'figma' },
  parameters: { viewport: { defaultViewport: 'desktop1200' } }
};

export const DesktopLiveText: Story = {
  args: { mode: 'liveText' },
  parameters: { viewport: { defaultViewport: 'desktop1200' } }
};

export const MobileLiveText: Story = {
  args: {
    mobile: true,
    mode: 'liveText'
  },
  parameters: {
    viewport: { defaultViewport: 'mobile390' }
  }
};

export const LongCopy: Story = {
  args: {
    mode: 'liveText',
    title: 'Important benefit information should stay readable at every screen size',
    body: 'Keep essential copy outside the image so the message can resize, translate, wrap naturally, and remain accessible without depending on an image crop.'
  },
  parameters: {
    viewport: { defaultViewport: 'desktop1200' }
  }
};
