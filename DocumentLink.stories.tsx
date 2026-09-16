import type { Meta, StoryObj } from '@storybook/react';
import { DocumentLink } from './index';

const meta: Meta<typeof DocumentLink> = {
  title: 'Components/Document Link',
  component: DocumentLink,
  tags: ['autodocs'],
  args: {
    title: 'Authorization to Release Health Information',
    href: '#document',
    format: 'PDF',
    language: 'English'
  }
};
export default meta;
type Story = StoryObj<typeof DocumentLink>;

export const HealthForm: Story = { args: { pattern: 'health-form' } };
export const ClaimForm: Story = { args: { pattern: 'claim-form' } };
export const BeneficiaryForm: Story = { args: { pattern: 'beneficiary-form' } };
