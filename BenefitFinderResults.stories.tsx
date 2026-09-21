import { useState, type FormEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BenefitFinderResults, Button, FormFieldGroup, Input, RadioButton, Select } from './index';
import './benefit-finder.css';

const meta: Meta<typeof BenefitFinderResults> = {
  title: 'Patterns/Benefit Finder',
  component: BenefitFinderResults,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'desktop1200'
    }
  }
};

export default meta;
type Story = StoryObj<typeof BenefitFinderResults>;

function BenefitFinderJourney({ mobile = false }: { mobile?: boolean }) {
  const [step, setStep] = useState<'questions' | 'results'>('questions');

  function continueToResults(event: FormEvent) {
    event.preventDefault();
    setStep('results');
  }

  if (step === 'results') {
    return (
      <BenefitFinderResults
        mobile={mobile}
        onBack={() => setStep('questions')}
        onStartOver={() => setStep('questions')}
      />
    );
  }

  return (
    <form
      className={`ds-finder-journey${mobile ? ' ds-finder-journey--mobile' : ' ds-finder-journey--desktop'}`}
      onSubmit={continueToResults}
      aria-labelledby={mobile ? 'finder-title-mobile' : 'finder-title-desktop'}
    >
      <div className="ds-finder-journey__header">
        <p className="ds-benefit-results__eyebrow">Benefit Plan Finder</p>
        <h1 id={mobile ? 'finder-title-mobile' : 'finder-title-desktop'}>
          Find the benefits available to you
        </h1>
        <p>Answer these questions about your current work assignment.</p>
      </div>

      <div className="ds-finder-journey__fields">
        <Select id={mobile ? 'work-location-mobile' : 'work-location-desktop'} label="Where do you work?" defaultValue="">
          <option value="" disabled>Select a location</option>
          <option value="manhattan">Manhattan</option>
          <option value="brooklyn">Brooklyn</option>
          <option value="queens">Queens</option>
        </Select>

        <Input
          id={mobile ? 'employer-mobile' : 'employer-desktop'}
          label="Who is your employer?"
          mobile={mobile}
        />

        <FormFieldGroup
          legend="What type of work do you do?"
          id={mobile ? 'work-type-mobile' : 'work-type-desktop'}
          className="ds-finder-journey__work-type"
        >
          <RadioButton name={mobile ? 'work-type-mobile' : 'work-type-desktop'} value="commercial" label="Commercial office" />
          <RadioButton name={mobile ? 'work-type-mobile' : 'work-type-desktop'} value="residential" label="Residential building" />
          <RadioButton name={mobile ? 'work-type-mobile' : 'work-type-desktop'} value="security" label="Security" />
        </FormFieldGroup>
      </div>

      <Button type="submit">View my results</Button>
    </form>
  );
}

export const CompleteJourney: Story = {
  render: () => <BenefitFinderJourney mobile={false} />,
  parameters: {
    viewport: {
      defaultViewport: 'desktop1200'
    }
  }
};

export const Results: Story = {
  args: {
    mobile: false
  }
};

export const Loading: Story = {
  args: {
    state: 'loading',
    mobile: false
  }
};

export const Empty: Story = {
  args: {
    state: 'empty',
    mobile: false
  }
};

export const Error: Story = {
  args: {
    state: 'error',
    mobile: false
  }
};

export const MobileJourney: Story = {
  render: () => <BenefitFinderJourney mobile />,
  parameters: {
    viewport: {
      defaultViewport: 'mobile390'
    }
  }
};

export const MobileResults: Story = {
  args: {
    mobile: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile390'
    }
  }
};
