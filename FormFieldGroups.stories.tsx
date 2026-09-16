import type { Meta, StoryObj } from '@storybook/react';
import { Button, Checkbox, FormFieldGroup, Input, RadioButton, Textarea } from './index';

const meta: Meta = { title: 'Patterns/Ask a Question', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const AskAQuestion: Story = {
  render: () => (
    <form className="sb-section" style={{ maxWidth: 756 }}>
      <Input id="first-name" label="First name" />
      <Input id="last-name" label="Last name" />
      <Input id="email" label="Email" type="email" />
      <FormFieldGroup legend="How should we contact you?" id="reply-method">
        <RadioButton name="reply" label="Email" />
        <RadioButton name="reply" label="Phone" />
      </FormFieldGroup>
      <Textarea id="question" label="Your Question *" />
      <Checkbox label="I agree to the Terms of Use and Privacy Policy." />
      <div data-fund="legal"><Button fund="legal" type="submit">Submit Question</Button></div>
    </form>
  )
};
