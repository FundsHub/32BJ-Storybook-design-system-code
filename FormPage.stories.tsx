import type { Meta, StoryObj } from '@storybook/react';
import { FormPage } from './FormPage';

const meta = {
  title: 'Patterns/Form Page',
  component: FormPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'Illustrative composition from Figma page-family inventory 1685:162, using the existing form controls. Submit an empty form to see validation, or fill it to see the example confirmation. Nothing is sent or saved. The WordPress snippet uses plain HTML and JavaScript, and must be connected to an approved server handler by Xavier.' } }
  }
} satisfies Meta<typeof FormPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Desktop: Story = { args: { mobile: false } };
export const Mobile: Story = { args: { mobile: true }, parameters: { viewport: { defaultViewport: 'mobile1' } } };
