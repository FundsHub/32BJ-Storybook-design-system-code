import type { Meta, StoryObj } from '@storybook/react';
import { HeroCarousel, type HeroSlide } from './index';
import { productionAssets } from './productionAssets';

const slides: HeroSlide[] = [
  {
    id: 'no-bills',
    imageUrl: productionAssets.heroBanner,
    alt: "Don't pay more than you should",
    mobileTitle: "DON'T PAY MORE THAN YOU SHOULD",
    mobileBody:
      'When you go to Northwell Health, NYU Langone, and Westchester Medical Center for care covered by your health plan, you only have to pay your copay. But these hospitals may bill you for more money than you owe.',
    mobileLinkLabel: "Don't pay more than you should. Here's how."
  },
  {
    id: 'no-bills-2',
    imageUrl: productionAssets.heroBanner,
    alt: "Don't pay more than you should",
    mobileTitle: "DON'T PAY MORE THAN YOU SHOULD",
    mobileBody:
      'When you go to Northwell Health, NYU Langone, and Westchester Medical Center for care covered by your health plan, you only have to pay your copay. But these hospitals may bill you for more money than you owe.',
    mobileLinkLabel: "Don't pay more than you should. Here's how."
  },
  {
    id: 'no-bills-3',
    imageUrl: productionAssets.heroBanner,
    alt: "Don't pay more than you should",
    mobileTitle: "DON'T PAY MORE THAN YOU SHOULD",
    mobileBody:
      'When you go to Northwell Health, NYU Langone, and Westchester Medical Center for care covered by your health plan, you only have to pay your copay. But these hospitals may bill you for more money than you owe.',
    mobileLinkLabel: "Don't pay more than you should. Here's how."
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

export const Desktop: Story = {
  render: (args) => (
    <div style={{ width: '1104px', maxWidth: '100%' }}>
      <HeroCarousel {...args} mobile={false} />
    </div>
  )
};

export const Mobile: Story = {
  args: {
    mobile: true
  },
  render: (args) => (
    <div style={{ width: '390px', maxWidth: '100%' }}>
      <HeroCarousel {...args} />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile390'
    }
  }
};
