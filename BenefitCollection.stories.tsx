import type { Meta, StoryObj } from '@storybook/react';
import { BenefitCard, BenefitCollection, type BenefitItem } from './BenefitCollection';

const benefits: BenefitItem[] = [
  {
    title: 'Behavioral Health',
    description: 'Find mental health, substance use, and member support resources.',
    actionLabel: 'Explore behavioral health'
  },
  {
    title: 'Reproductive Health',
    description: 'Find reproductive health information, support, and member resources.',
    actionLabel: 'Explore reproductive health'
  },
  {
    title: 'Other Benefits',
    description: 'Explore additional Health Fund benefits and programs available to members.',
    actionLabel: 'View other benefits'
  }
];

const partnerBenefits: BenefitItem[] = [
  {
    title: '5 Star Centers',
    description: 'Find highlighted care options and supporting information for members.',
    eyebrow: 'Featured program',
    kind: 'partner',
    actionLabel: 'View 5 Star Centers'
  },
  {
    title: 'Lantern Surgery Care',
    description: 'Learn about the surgery-care program and how to find more information.',
    eyebrow: 'Partner program',
    kind: 'partner',
    actionLabel: 'Learn about Lantern'
  },
  {
    title: 'Member Portal',
    description: 'Use the member portal to access personalized benefit information and services.',
    eyebrow: 'Member resource',
    kind: 'partner',
    actionLabel: 'Open member portal'
  }
];

const meta: Meta<typeof BenefitCollection> = {
  title: 'Patterns/Benefit Collection',
  component: BenefitCollection,
  tags: ['autodocs'],
  args: {
    items: benefits,
    mobile: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop1200'
    }
  }
};

export default meta;

type Story = StoryObj<typeof BenefitCollection>;

export const DesktopCollection: Story = {
  args: {
    title: 'Other benefits',
    intro: 'Explore additional Health Fund benefits, programs, and member resources.',
    items: benefits,
    mobile: false
  }
};

export const PartnerCards: Story = {
  args: {
    title: 'Featured programs and resources',
    intro: 'Use partner cards when a collection combines 32BJ benefits with supporting programs or member tools.',
    items: partnerBenefits,
    mobile: false
  }
};

export const MixedCollection: Story = {
  args: {
    title: 'Benefits and member resources',
    intro: 'A mixed collection keeps related benefit and partner destinations in one scan-friendly group.',
    items: [...benefits.slice(0, 2), ...partnerBenefits.slice(0, 2)],
    mobile: false
  }
};

export const SingleBenefitCard: Story = {
  render: () => (
    <div style={{ width: '354px', maxWidth: '100%' }}>
      <BenefitCard {...benefits[0]} mobile={false} />
    </div>
  )
};

export const MobileCollection: Story = {
  args: {
    title: 'Other benefits',
    intro: 'Explore additional Health Fund benefits, programs, and member resources.',
    items: benefits,
    mobile: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile390'
    }
  }
};
