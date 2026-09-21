import type { Meta, StoryObj } from '@storybook/react';
import {
  RetirementJourneyCard,
  RetirementJourneyPlanIndex,
  RetirementPlanCard,
  defaultRetirementJourneyItems,
  defaultRetirementPlans
} from './RetirementJourneyPlanIndex';

const meta: Meta<typeof RetirementJourneyPlanIndex> = {
  title: 'Patterns/Retirement Journey + Plan Index',
  component: RetirementJourneyPlanIndex,
  tags: ['autodocs'],
  args: {
    mobile: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop1200'
    }
  }
};

export default meta;
type Story = StoryObj<typeof RetirementJourneyPlanIndex>;

export const DesktopIndex: Story = {
  args: {
    mobile: false
  }
};

export const JourneyChoices: Story = {
  render: () => (
    <div className="ds-retirement-index ds-retirement-index--desktop" data-fund="retirement">
      <div className="ds-retirement-index__journeys">
        {defaultRetirementJourneyItems.map((item) => (
          <RetirementJourneyCard key={item.title} {...item} mobile={false} />
        ))}
      </div>
    </div>
  )
};

export const PensionPlanIndex: Story = {
  render: () => (
    <div className="ds-retirement-index ds-retirement-index--desktop" data-fund="retirement">
      <div className="ds-retirement-index__plans">
        {defaultRetirementPlans.map((plan) => (
          <RetirementPlanCard key={plan.name} {...plan} mobile={false} />
        ))}
      </div>
    </div>
  )
};

export const WithoutSupportModule: Story = {
  args: {
    showSupport: false,
    mobile: false
  }
};

export const MobileIndex: Story = {
  args: {
    mobile: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile390'
    }
  }
};
