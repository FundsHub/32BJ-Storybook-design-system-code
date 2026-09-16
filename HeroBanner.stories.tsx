import type { Meta, StoryObj } from '@storybook/react';
import { HeroBanner } from './index';

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/Hero + Banner',
  component: HeroBanner,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof HeroBanner>;

/** Pixel-matched desktop treatment from the approved Figma homepage. */
export const DesktopFigmaMatch: Story = { args: { mode: 'figma' } };

/** Kept as an alias so existing Storybook links do not break. */
export const DesktopReduced: Story = { args: { mode: 'figma' } };

/** Live-text alternative for cases where the campaign message must remain selectable and translatable. */
export const DesktopLiveText: Story = { args: { mode: 'liveText' } };

export const MobileLiveText: Story = {
  args: { mobile: true, mode: 'liveText' },
  parameters: { viewport: { defaultViewport: 'mobile390' } }
};

export const LongCopy: Story = {
  args: {
    mode: 'liveText',
    title: 'Important benefit information should stay readable at every screen size',
    body: 'Keep essential copy outside the image so the message can resize, translate, wrap naturally, and remain accessible without depending on an image crop.'
  }
};
