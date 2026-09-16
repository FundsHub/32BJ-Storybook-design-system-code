import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './index';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Search>;

export const Desktop: Story = {};
export const MobileExpanded: Story = { args: { mobile: true, id: 'mobile-search-story' }, parameters: { viewport: { defaultViewport: 'mobile390' } } };
