import { useId } from 'react';
import { MemberServices } from './MemberServices';
import './retirement-journey-plan-index.css';

export type RetirementJourneyItem = {
  title: string;
  description: string;
  actionLabel?: string;
  href?: string;
};

export type RetirementPlanItem = {
  name: string;
  description?: string;
  href?: string;
};

export type RetirementJourneyPlanIndexProps = {
  title?: string;
  intro?: string;
  eyebrow?: string;
  journeyItems?: RetirementJourneyItem[];
  plans?: RetirementPlanItem[];
  showSupport?: boolean;
  mobile?: boolean;
};

export const defaultRetirementJourneyItems: RetirementJourneyItem[] = [
  {
    title: 'Planning for retirement',
    description: 'Start with the information and resources that help you understand your retirement benefits.',
    actionLabel: 'Explore planning resources',
    href: '#planning'
  },
  {
    title: 'Ready to retire',
    description: 'Find the plan information, documents, and next steps you may need as retirement approaches.',
    actionLabel: 'Review retirement steps',
    href: '#ready'
  },
  {
    title: 'Already retired',
    description: 'Find pension information, forms, and support resources for retired members.',
    actionLabel: 'View retiree resources',
    href: '#retired'
  }
];

export const defaultRetirementPlans: RetirementPlanItem[] = [
  { name: 'Program A' },
  { name: 'Program B' },
  { name: 'Program C' },
  { name: 'Program D' },
  { name: 'Connecticut Pension' },
  { name: 'Massachusetts Pension' },
  { name: 'Broadway League' },
  { name: 'North Pension' },
  { name: 'School Workers Pension' }
];

export function RetirementJourneyCard({
  title,
  description,
  actionLabel = 'Learn more',
  href = '#retirement',
  mobile
}: RetirementJourneyItem & { mobile?: boolean }) {
  const modeClass =
    mobile === true
      ? ' ds-retirement-journey-card--mobile'
      : mobile === false
        ? ' ds-retirement-journey-card--desktop'
        : '';

  return (
    <article className={`ds-retirement-journey-card${modeClass}`} data-fund="retirement">
      <div className="ds-retirement-journey-card__copy">
        <p className="ds-retirement-journey-card__eyebrow">Your retirement journey</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <a className="ds-retirement-journey-card__action" href={href}>
        {actionLabel}
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export function RetirementPlanCard({
  name,
  description = 'Review pension information, plan documents, forms, and related retirement resources.',
  href = '#plan',
  mobile
}: RetirementPlanItem & { mobile?: boolean }) {
  const modeClass =
    mobile === true
      ? ' ds-retirement-plan-card--mobile'
      : mobile === false
        ? ' ds-retirement-plan-card--desktop'
        : '';

  return (
    <a
      className={`ds-retirement-plan-card${modeClass}`}
      data-fund="retirement"
      href={href}
    >
      <span>
        <strong>{name}</strong>
        <small>{description}</small>
      </span>
      <span className="ds-retirement-plan-card__arrow" aria-hidden="true">→</span>
    </a>
  );
}

export function RetirementJourneyPlanIndex({
  title = 'Retirement benefits',
  intro = 'Choose where you are in your retirement journey, then find the pension plan and resources that apply to you.',
  eyebrow = 'Retirement Fund',
  journeyItems = defaultRetirementJourneyItems,
  plans = defaultRetirementPlans,
  showSupport = true,
  mobile
}: RetirementJourneyPlanIndexProps) {
  const instanceId = useId().replace(/:/g, '');
  const journeyHeadingId = `retirement-journey-${instanceId}`;
  const plansHeadingId = `retirement-plans-${instanceId}`;

  const modeClass =
    mobile === true
      ? ' ds-retirement-index--mobile'
      : mobile === false
        ? ' ds-retirement-index--desktop'
        : '';

  return (
    <section
      className={`ds-retirement-index${modeClass}`}
      data-fund="retirement"
      aria-labelledby={`retirement-index-title-${instanceId}`}
    >
      <header className="ds-retirement-index__intro">
        <p className="ds-retirement-index__eyebrow">{eyebrow}</p>
        <h1 id={`retirement-index-title-${instanceId}`}>{title}</h1>
        <p>{intro}</p>
      </header>

      <section className="ds-retirement-index__section" aria-labelledby={journeyHeadingId}>
        <div className="ds-retirement-index__section-heading">
          <h2 id={journeyHeadingId}>Where are you in your retirement journey?</h2>
          <p>Start with the path that best matches what you need to do next.</p>
        </div>

        <div className="ds-retirement-index__journeys">
          {journeyItems.map((item) => (
            <RetirementJourneyCard key={item.title} {...item} mobile={mobile} />
          ))}
        </div>
      </section>

      <section className="ds-retirement-index__section" aria-labelledby={plansHeadingId}>
        <div className="ds-retirement-index__section-heading">
          <h2 id={plansHeadingId}>Find your pension plan</h2>
          <p>Select a plan to review its information, documents, and related resources.</p>
        </div>

        <div className="ds-retirement-index__plans">
          {plans.map((plan) => (
            <RetirementPlanCard key={plan.name} {...plan} mobile={mobile} />
          ))}
        </div>
      </section>

      {showSupport && (
        <div className="ds-retirement-index__support">
          <MemberServices
            fund="retirement"
            mobile={mobile === true}
            title="Need help with your retirement benefits?"
          />
        </div>
      )}
    </section>
  );
}
