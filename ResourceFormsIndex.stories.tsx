import type { Meta, StoryObj } from '@storybook/react';
import { ResourceFormsIndex, type ResourceFormItem, type ResourceIndexItem } from './ResourceFormsIndex';

const forms: ResourceFormItem[] = [
  {
    title: 'Authorization to Release Health Information',
    href: '#release-health-information',
    pattern: 'health-form',
    format: 'PDF',
    language: 'English'
  },
  {
    title: 'Medical Claim Form',
    href: '#medical-claim-form',
    pattern: 'claim-form',
    format: 'PDF',
    language: 'English'
  },
  {
    title: 'Beneficiary Designation Form',
    href: '#beneficiary-form',
    pattern: 'beneficiary-form',
    format: 'PDF',
    language: 'English'
  }
];

const resources: ResourceIndexItem[] = [
  {
    title: 'How to submit a claim',
    description: 'Review claim instructions and required supporting information.',
    type: 'internal'
  },
  {
    title: 'Forms and downloads',
    description: 'Browse the complete library of member forms and documents.',
    type: 'download'
  },
  {
    title: 'Member support',
    description: 'Visit the member support destination for additional help.',
    type: 'external'
  }
];

const meta: Meta<typeof ResourceFormsIndex> = {
  title: 'Patterns/Resource + Forms Index',
  component: ResourceFormsIndex,
  tags: ['autodocs'],
  args: {
    forms,
    resources,
    noticeTitle: 'Before you submit a form',
    noticeBody: 'Check that the form is complete and include any required supporting documents.',
    mobile: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop1200'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ResourceFormsIndex>;

export const DesktopIndex: Story = {};

export const FormsOnly: Story = {
  args: {
    title: 'Forms',
    intro: 'Download commonly used Health Fund forms.',
    forms,
    resources: [],
    noticeTitle: undefined,
    noticeBody: undefined,
    mobile: false
  }
};

export const ClaimsAndWarnings: Story = {
  args: {
    title: 'Claims and forms',
    intro: 'Use the correct claim form and review the submission requirements before sending materials.',
    forms: forms.slice(0, 2),
    resources: resources.slice(0, 2),
    noticeTitle: 'Claim submission reminder',
    noticeBody: 'Incomplete claims may take longer to process. Include all requested documentation.',
    mobile: false
  }
};

export const MobileIndex: Story = {
  args: {
    forms,
    resources,
    noticeTitle: 'Before you submit a form',
    noticeBody: 'Check that the form is complete and include any required supporting documents.',
    mobile: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile390'
    }
  }
};
