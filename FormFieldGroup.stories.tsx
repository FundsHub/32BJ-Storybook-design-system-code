import type { Meta, StoryObj } from '@storybook/react';
import { Button, Checkbox, FormFieldGroup, Input, RadioButton, Textarea } from './index';

const meta: Meta<typeof FormFieldGroup> = {
  title: 'Components/Form Field Groups',
  component: FormFieldGroup,
  tags: ['autodocs'],
  args: { legend: 'Preferred contact method' }
};
export default meta;
type Story = StoryObj<typeof FormFieldGroup>;

export const SingleField: Story = {
  render: () => <div className="ds-form-pattern ds-form-pattern--single"><Input id="full-name" label="Full Name *" placeholder="Enter your full name" /></div>
};

export const RadioPair: Story = {
  render: () => (
    <FormFieldGroup legend="Reply to you by *" className="ds-form-pattern ds-form-pattern--radio-pair">
      <RadioButton name="contact" label="Phone" defaultChecked />
      <RadioButton name="contact" label="Email" />
    </FormFieldGroup>
  )
};

export const Consent: Story = {
  render: () => (
    <div className="ds-form-pattern ds-form-pattern--consent">
      <Checkbox label="By checking this box and clicking Submit Question, you confirm that you have read and agree to the Terms of Use and Privacy Policy." />
    </div>
  )
};

export const LongQuestion: Story = {
  render: () => <div className="ds-form-pattern ds-form-pattern--long-question"><Textarea /></div>
};

export const Submission: Story = {
  render: () => (
    <div className="ds-form-pattern ds-form-pattern--submission" data-fund="legal">
      <Button fund="legal">Submit Question</Button>
      <aside className="ds-disclaimer">
        <span className="ds-disclaimer__badge" aria-hidden>!</span>
        <div><strong>Disclaimer</strong><p>Our response cannot be relied upon as legal advice. Submitting this form does not create an attorney-client relationship. If you receive legal papers or are arrested, contact the Legal Fund immediately using the phone number at the top of this page or visit our office.</p></div>
      </aside>
    </div>
  )
};
