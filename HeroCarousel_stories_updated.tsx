import type { Meta, StoryObj } from '@storybook/react';
import { HeroCarousel, type HeroSlide } from './index';
import { productionAssets } from './productionAssets';

const slides: HeroSlide[] = [
  {
    id: 'banner-1',
    imageUrl: productionAssets.heroBanner,
    alt: '32BJ Benefit Funds featured banner'
  },
  {
    id: 'banner-2',
    imageUrl: productionAssets.heroBanner,
    alt: '32BJ Benefit Funds featured banner'
  },
  {
    id: 'banner-3',
    imageUrl: productionAssets.heroBanner,
    alt: '32BJ Benefit Funds featured banner'
  }
];

const meta: Meta<typeof HeroCarousel> = {
  title: 'Patterns/Hero Carousel',
  component: HeroCarousel,
  tags: ['autodocs'],
  args: { slides },
  parameters: {
    viewport: {
      defaultViewport: 'desktop1200'
    }
  }
};

export default meta;

type Story = StoryObj<typeof HeroCarousel>;

export const Controlled: Story = {};

export const AutoAdvanceWithPause: Story = {
  args: {
    autoPlay: true,
    interval: 6000
  }
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile390'
    }
  }
};
