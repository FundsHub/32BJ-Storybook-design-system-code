import './course-card.css';

export type CourseStatus = 'open' | 'waitlist' | 'closed';

export type CourseCardProps = {
  title: string;
  category: string;
  format: 'In person' | 'Online' | 'Hybrid';
  date: string;
  time: string;
  location?: string;
  status?: CourseStatus;
  href?: string;
  mobile?: boolean;
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
  href = '#course',
  mobile = false
}: CourseCardProps) {
  const actionLabel = status === 'waitlist' ? 'Join the waitlist' : 'View course';

  return (
    <article
      className={`ds-course-card${mobile ? ' ds-course-card--mobile' : ''}`}
      data-fund="training"
      data-status={status}
    >
      <div className="ds-course-card__topline">
        <span className="ds-course-card__category">{category}</span>
        <span className={`ds-course-card__status ds-course-card__status--${status}`}>
          {statusLabels[status]}
        </span>
      </div>

      <h2>{title}</h2>

      <dl className="ds-course-card__details">
        <div>
          <dt>Format</dt>
          <dd>{format}</dd>
        </div>
        <div>
          <dt>Date</dt>
          <dd>{date}</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>{time}</dd>
        </div>
        {location && (
          <div>
            <dt>Location</dt>
            <dd>{location}</dd>
          </div>
        )}
      </dl>

      {status === 'closed' ? (
        <button className="ds-course-card__action" type="button" disabled>
          Registration closed
        </button>
      ) : (
        <a className="ds-course-card__action" href={href}>
          {actionLabel}
        </a>
      )}
    </article>
  );
}
