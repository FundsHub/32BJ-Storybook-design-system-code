import type { Meta, StoryObj } from '@storybook/react';
import { HeroCarousel, type HeroSlide } from './index';
import { productionAssets } from './productionAssets';

const slides: HeroSlide[] = [
  {
    id: 'no-bills',
    imageUrl: productionAssets.heroBanner,
    alt: 'Don’t pay more than you should'
  },
  {
    id: 'no-bills-2',
    imageUrl: productionAssets.heroBanner,
    alt: 'Don’t pay more than you should'
  },
  {
    id: 'no-bills-3',
    imageUrl: productionAssets.heroBanner,
    alt: 'Don’t pay more than you should'
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

export const Desktop: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile390'
    }
  }
};
