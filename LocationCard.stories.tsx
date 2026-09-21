import type { Meta, StoryObj } from '@storybook/react';
import { LocationCard } from './index';

const manhattan = {
  name: 'Manhattan Training Center',
  address: '25 West 18th Street, New York, NY 10011',
  phone: '(212) 388-3701',
  hours: 'Monday through Friday, 8:00 AM to 6:00 PM',
  services: ['Courses', 'Registration help', 'Computer lab']
};

const newJersey = {
  name: 'New Jersey Training Center',
  address: '205 Robin Road, Paramus, NJ 07652',
  phone: '(201) 867-2283',
  hours: 'Monday through Friday, 9:00 AM to 5:00 PM',
  services: ['Courses', 'Career services']
};

const meta: Meta<typeof LocationCard> = {
  title: 'Patterns/Locations Directory',
  component: LocationCard,
  tags: ['autodocs'],
  args: manhattan,
  parameters: {
    viewport: {
      defaultViewport: 'desktop1200'
    }
  }
};

export default meta;

type Story = StoryObj<typeof LocationCard>;

export const TrainingCenter: Story = {};

export const Directory: Story = {
  render: () => (
    <div className="ds-directory-grid">
      <LocationCard {...manhattan} />
      <LocationCard {...newJersey} />
    </div>
  )
};

export const MobileDirectory: Story = {
  render: () => (
    <div className="ds-directory-grid ds-directory-grid--mobile">
      <LocationCard {...manhattan} mobile />
      <LocationCard {...newJersey} mobile />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile390'
    }
  }
};
