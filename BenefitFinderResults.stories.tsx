import { useState, type FormEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BenefitFinderResults, Button, FormFieldGroup, Input, RadioButton, Select } from './index';

const meta: Meta<typeof BenefitFinderResults> = {
  title: 'Patterns/Benefit Finder',
  component: BenefitFinderResults,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof BenefitFinderResults>;

function BenefitFinderJourney() {
  const [step, setStep] = useState<'questions' | 'results'>('questions');

  function continueToResults(event: FormEvent) {
    event.preventDefault();
    setStep('results');
  }

  if (step === 'results') {
    return <BenefitFinderResults onBack={() => setStep('questions')} onStartOver={() => setStep('questions')} />;
  }

  return (
    <form className="ds-finder-questions" onSubmit={continueToResults} aria-labelledby="finder-title">
      <p className="ds-benefit-results__eyebrow">Benefit Plan Finder</p>
      <h1 id="finder-title">Find the benefits available to you</h1>
      <p>Answer these questions about your current work assignment.</p>
      <Select id="work-location" label="Where do you work?" defaultValue="">
        <option value="" disabled>Select a location</option>
        <option value="manhattan">Manhattan</option>
        <option value="brooklyn">Brooklyn</option>
        <option value="queens">Queens</option>
      </Select>
      <Input id="employer" label="Who is your employer?" />
      <FormFieldGroup legend="What type of work do you do?" id="work-type">
        <RadioButton name="work-type" label="Commercial office" />
        <RadioButton name="work-type" label="Residential building" />
        <RadioButton name="work-type" label="Security" />
      </FormFieldGroup>
      <Button type="submit">View my results</Button>
    </form>
  );
}

export const CompleteJourney: Story = { render: () => <BenefitFinderJourney /> };
export const Results: Story = {};
export const Loading: Story = { args: { state: 'loading' } };
export const Empty: Story = { args: { state: 'empty' } };
export const Error: Story = { args: { state: 'error' } };
export const MobileResults: Story = { parameters: { viewport: { defaultViewport: 'mobile390' } } };
