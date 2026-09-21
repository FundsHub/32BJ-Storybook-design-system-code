import type { Meta, StoryObj } from '@storybook/react';
import { LocationCard } from './index';

const meta: Meta<typeof LocationCard> = { title: 'Patterns/Locations Directory', component: LocationCard, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof LocationCard>;
export const TrainingCenter: Story = { args: { name: 'Manhattan Training Center', address: '25 West 18th Street, New York, NY 10011', phone: '(212) 388-3701', hours: 'Monday through Friday, 8:00 AM to 6:00 PM', services: ['Courses', 'Registration help', 'Computer lab'] } };
export const Directory: Story = { render: () => <div className="ds-directory-grid"><LocationCard name="Manhattan Training Center" address="25 West 18th Street, New York, NY 10011" phone="(212) 388-3701" hours="Monday through Friday, 8:00 AM to 6:00 PM" services={['Courses', 'Registration help']} /><LocationCard name="New Jersey Training Center" address="205 Robin Road, Paramus, NJ 07652" phone="(201) 867-2283" hours="Monday through Friday, 9:00 AM to 5:00 PM" services={['Courses', 'Career services']} /></div> };
export const MobileDirectory: Story = { ...Directory, parameters: { viewport: { defaultViewport: 'mobile390' } } };
