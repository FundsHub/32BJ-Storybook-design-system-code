export type CourseStatus = 'open' | 'waitlist' | 'closed';

type Props = {
  title: string;
  category: string;
  format: 'In person' | 'Online' | 'Hybrid';
  date: string;
  time: string;
  location?: string;
  status?: CourseStatus;
  href?: string;
};

const statusLabels: Record<CourseStatus, string> = {
  open: 'Registration open',
  waitlist: 'Waitlist available',
  closed: 'Registration closed'
};

export function CourseCard({
  title,
  category,
  format,
  date,
  time,
  location,
  status = 'open',
  href = '#course'
}: Props) {
  return (
    <article className="ds-course" data-fund="training">
      <div className="ds-course__topline"><span>{category}</span><span className={`ds-course__status ds-course__status--${status}`}>{statusLabels[status]}</span></div>
      <h2>{title}</h2>
      <dl>
        <div><dt>Format</dt><dd>{format}</dd></div>
        <div><dt>Date</dt><dd>{date}</dd></div>
        <div><dt>Time</dt><dd>{time}</dd></div>
        {location && <div><dt>Location</dt><dd>{location}</dd></div>}
      </dl>
      {status === 'closed'
        ? <button type="button" disabled>Registration closed</button>
        : <a className="ds-course__action" href={href}>{status === 'waitlist' ? 'Join the waitlist' : 'View course'}</a>}
    </article>
  );
}
