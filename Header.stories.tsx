import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './index';

const meta: Meta<typeof Header> = {
  title: 'Components/Header + Navigation',
  component: Header,
  tags: ['autodocs'],
  args: { fund: 'health' }
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Health: Story = {};
export const Training: Story = { args: { fund: 'training' } };
export const Retirement: Story = { args: { fund: 'retirement' } };
export const Legal: Story = { args: { fund: 'legal' } };
export const MobileClosed: Story = { args: { mobile: true }, parameters: { viewport: { defaultViewport: 'mobile390' } } };
export const MobileMenuOpen: Story = { args: { mobile: true, open: true }, parameters: { viewport: { defaultViewport: 'mobile390' } } };
export const MobileSearchOpen: Story = { args: { mobile: true, searchOpen: true }, parameters: { viewport: { defaultViewport: 'mobile390' } } };
