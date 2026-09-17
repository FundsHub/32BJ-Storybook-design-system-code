import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './index';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Retirement: Story = {
  args: {
    fund: 'retirement',
    question: 'When can I retire?',
    answer:
      'Retirement eligibility depends on your age, years of service, and pension plan. Review your pension information or contact Member Services for help.'
  }
};

export const Health: Story = {
  args: {
    fund: 'health',
    question: 'How do I find a doctor?',
    answer:
      'Use the Find a Doctor tool to search for participating doctors and facilities in your health plan network.'
  }
};

export const Training: Story = {
  args: {
    fund: 'training',
    question: 'How do I apply for training benefits?',
    answer:
      'Explore available classes and programs, then follow the enrollment instructions for the training program you want to attend.'
  }
};

export const LegalGlossary: Story = {
  args: {
    fund: 'legal',
    question: 'What is an appeal?',
    answer:
      'An appeal is a request to review a decision about a benefit or claim. The steps and deadlines depend on the type of benefit involved.',
    defaultOpen: true
  }
};
