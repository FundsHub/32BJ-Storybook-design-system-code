import type { Meta, StoryObj } from '@storybook/react';
import { HeroCarousel, type HeroSlide } from './index';

const slides: HeroSlide[] = [
  { id: 'portal', eyebrow: 'Member tools', title: 'Your benefits, in one place', summary: 'Use the Member Portal to review coverage, find forms, and manage your benefit information.', actionLabel: 'Visit the Member Portal', tone: 'blue' },
  { id: 'finder', eyebrow: 'Find your plan', title: 'Start with where you work', summary: 'Answer a few questions to find the benefit plans available at your worksite.', actionLabel: 'Use the Benefit Plan Finder', tone: 'navy' },
  { id: 'training', eyebrow: 'Training Fund', title: 'Build skills for what comes next', summary: 'Explore courses, certifications, and career programs available to eligible members.', actionLabel: 'Browse courses', tone: 'teal' }
];

const meta: Meta<typeof HeroCarousel> = { title: 'Patterns/Hero Carousel', component: HeroCarousel, tags: ['autodocs'], args: { slides } };
export default meta;
type Story = StoryObj<typeof HeroCarousel>;
export const Controlled: Story = {};
export const AutoAdvanceWithPause: Story = { args: { autoPlay: true, interval: 6000 } };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile390' } } };
