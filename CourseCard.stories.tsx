import type { Meta, StoryObj } from '@storybook/react';
import { CourseCard } from './index';

const englishCourse = {
  title: 'English as a Second Language',
  category: 'Language skills',
  format: 'In person' as const,
  date: 'October 6 to December 15',
  time: 'Tuesdays and Thursdays, 6:00 PM',
  location: 'Manhattan Training Center',
  status: 'open' as const
};

const buildingCourse = {
  title: 'Commercial Building Skills',
  category: 'Career training',
  format: 'Hybrid' as const,
  date: 'November 2 to December 18',
  time: 'Mondays and Wednesdays, 6:30 PM',
  location: 'Manhattan Training Center',
  status: 'waitlist' as const
};

const oshaCourse = {
  title: 'OSHA 30-Hour Training',
  category: 'Safety',
  format: 'Online' as const,
  date: 'January 12 to January 28',
  time: 'Tuesdays and Thursdays, 6:00 PM',
  status: 'closed' as const
};

const meta: Meta<typeof CourseCard> = {
  title: 'Patterns/Course Catalog',
  component: CourseCard,
  tags: ['autodocs'],
  args: englishCourse,
  parameters: {
    viewport: {
      defaultViewport: 'desktop1200'
    }
  }
};

export default meta;

type Story = StoryObj<typeof CourseCard>;

export const Open: Story = {};

export const Waitlist: Story = {
  args: buildingCourse
};

export const Closed: Story = {
  args: oshaCourse
};

export const DesktopCatalog: Story = {
  render: () => (
    <section className="ds-course-catalog" aria-labelledby="course-catalog-title">
      <header className="ds-course-catalog__intro">
        <p className="ds-course-catalog__eyebrow">Training Fund</p>
        <h1 id="course-catalog-title">Upcoming courses</h1>
        <p>Browse upcoming training opportunities and check registration availability.</p>
      </header>

      <div className="ds-course-catalog__grid">
        <CourseCard {...englishCourse} />
        <CourseCard {...buildingCourse} />
        <CourseCard {...oshaCourse} />
      </div>
    </section>
  )
};

export const MobileCatalog: Story = {
  render: () => (
    <section
      className="ds-course-catalog ds-course-catalog--mobile"
      aria-labelledby="mobile-course-catalog-title"
    >
      <header className="ds-course-catalog__intro">
        <p className="ds-course-catalog__eyebrow">Training Fund</p>
        <h1 id="mobile-course-catalog-title">Upcoming courses</h1>
        <p>Browse upcoming training opportunities and check registration availability.</p>
      </header>

      <div className="ds-course-catalog__grid">
        <CourseCard {...englishCourse} mobile />
        <CourseCard {...buildingCourse} mobile />
        <CourseCard {...oshaCourse} mobile />
      </div>
    </section>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile390'
    }
  }
};
