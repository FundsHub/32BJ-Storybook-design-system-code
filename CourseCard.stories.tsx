import type { Meta, StoryObj } from '@storybook/react';
import { CourseCard } from './index';

const meta: Meta<typeof CourseCard> = { title: 'Patterns/Course Listings', component: CourseCard, tags: ['autodocs'], args: { title: 'English as a Second Language', category: 'Language skills', format: 'In person', date: 'October 6 to December 15', time: 'Tuesdays and Thursdays, 6:00 PM', location: 'Manhattan Training Center', status: 'open' } };
export default meta;
type Story = StoryObj<typeof CourseCard>;
export const Open: Story = {};
export const Waitlist: Story = { args: { status: 'waitlist', title: 'Commercial Building Skills' } };
export const Closed: Story = { args: { status: 'closed', title: 'OSHA 30-Hour Training' } };
export const CatalogRow: Story = { render: () => <div className="ds-course-grid"><CourseCard title="English as a Second Language" category="Language skills" format="In person" date="October 6 to December 15" time="Tuesdays and Thursdays, 6:00 PM" location="Manhattan Training Center" /><CourseCard title="Commercial Building Skills" category="Career training" format="Hybrid" date="November 2 to December 18" time="Mondays and Wednesdays, 6:30 PM" status="waitlist" /></div> };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile390' } } };
