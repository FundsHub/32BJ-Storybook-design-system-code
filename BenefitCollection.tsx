import './benefit-collection.css';

export type BenefitCardKind = 'benefit' | 'partner';

export type BenefitItem = {
  title: string;
  description: string;
  eyebrow?: string;
  actionLabel?: string;
  href?: string;
  kind?: BenefitCardKind;
  external?: boolean;
};

export type BenefitCardProps = BenefitItem & {
  mobile?: boolean;
  headingLevel?: 'h2' | 'h3';
};

export type BenefitCollectionProps = {
  title?: string;
  intro?: string;
  eyebrow?: string;
  items: BenefitItem[];
  mobile?: boolean;
};

export function BenefitCard({
  title,
  description,
  eyebrow = 'Health Fund',
  actionLabel = 'Learn more',
  href = '#benefit',
  kind = 'benefit',
  external = false,
  mobile,
  headingLevel = 'h2'
}: BenefitCardProps) {
  const Heading = headingLevel;
  const modeClass =
    mobile === true
      ? ' ds-benefit-card--mobile'
      : mobile === false
        ? ' ds-benefit-card--desktop'
        : '';

  return (
    <article
      className={`ds-benefit-card ds-benefit-card--${kind}${modeClass}`}
      data-fund="health"
      data-kind={kind}
    >
      <div className="ds-benefit-card__body">
        <p className="ds-benefit-card__eyebrow">{eyebrow}</p>
        <Heading>{title}</Heading>
        <p className="ds-benefit-card__description">{description}</p>
      </div>

      <a
        className="ds-benefit-card__action"
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        <span>{actionLabel}</span>
        {external && <span aria-hidden="true">↗</span>}
      </a>
    </article>
  );
}

export function BenefitCollection({
  title = 'Other benefits',
  intro = 'Explore additional Health Fund benefits, programs, and member resources.',
  eyebrow = 'Health Fund',
  items,
  mobile
}: BenefitCollectionProps) {
  const modeClass =
    mobile === true
      ? ' ds-benefit-collection--mobile'
      : mobile === false
        ? ' ds-benefit-collection--desktop'
        : '';

  return (
    <section
      className={`ds-benefit-collection${modeClass}`}
      data-fund="health"
      aria-labelledby="benefit-collection-title"
    >
      <header className="ds-benefit-collection__intro">
        <p className="ds-benefit-collection__eyebrow">{eyebrow}</p>
        <h1 id="benefit-collection-title">{title}</h1>
        <p>{intro}</p>
      </header>

      <div className="ds-benefit-collection__grid">
        {items.map((item) => (
          <BenefitCard key={`${item.kind ?? 'benefit'}-${item.title}`} {...item} mobile={mobile} />
        ))}
      </div>
    </section>
  );
}
