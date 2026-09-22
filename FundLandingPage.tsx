import { AlertBar } from './AlertBar';
import { BenefitCard, type BenefitItem } from './BenefitCollection';
import { Footer } from './Footer';
import { Header } from './Header';
import { HeroBanner } from './HeroBanner';
import { MemberServices } from './MemberServices';
import './fund-landing-page.css';

const quickActions = [
  {
    title: 'Find a doctor',
    description: 'Search the provider directory for care covered by your plan.',
    href: '#find-a-doctor'
  },
  {
    title: 'Review your health plan',
    description: 'Find plan information, coverage details, and documents.',
    href: '#health-plans'
  },
  {
    title: 'Find a form',
    description: 'Get the forms and instructions you need.',
    href: '#forms'
  },
  {
    title: 'Use the member portal',
    description: 'Access personalized benefit information and services.',
    href: '#member-portal'
  }
] as const;

const programs: BenefitItem[] = [
  {
    title: '5 Star Centers',
    description: 'Find highlighted care options and supporting information for members.',
    eyebrow: 'Featured program',
    actionLabel: 'Find a center',
    href: '#five-star-centers',
    kind: 'partner'
  },
  {
    title: 'Behavioral Health',
    description: 'Find mental health, substance use, and member support resources.',
    actionLabel: 'Explore behavioral health',
    href: '#behavioral-health'
  },
  {
    title: 'Reproductive Health',
    description: 'Find reproductive health information, support, and member resources.',
    actionLabel: 'Explore reproductive health',
    href: '#reproductive-health'
  }
];

type Props = {
  mobile?: boolean;
};

export function FundLandingPage({ mobile = false }: Props) {
  return (
    <div
      className={`ds-fund-landing${mobile ? ' ds-fund-landing--mobile' : ''}`}
      data-fund="health"
      data-figma-node="1685:156"
    >
      <AlertBar />
      <Header fund="health" mobile={mobile} />

      <main className="ds-fund-landing__main" id="main-content">
        <header className="ds-fund-landing__intro">
          <p className="ds-fund-landing__eyebrow">Health Fund</p>
          <h1>Your Health Fund benefits</h1>
          <p>
            Find your health plan, care options, forms, and the support you need to use your benefits.
          </p>
        </header>

        <nav className="ds-fund-landing__quick-actions" aria-label="Popular Health Fund actions">
          {quickActions.map((action) => (
            <a href={action.href} key={action.title}>
              <span>
                <strong>{action.title}</strong>
                <small>{action.description}</small>
              </span>
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </nav>

        <HeroBanner
          mobile={mobile}
          mode="liveText"
          eyebrow="Important Health Fund information"
        />

        <section className="ds-fund-landing__programs" aria-labelledby="fund-programs-title">
          <header>
            <p className="ds-fund-landing__eyebrow">Programs and resources</p>
            <h2 id="fund-programs-title">Explore more of your benefits</h2>
            <p>Use these starting points to find care, services, and member support.</p>
          </header>
          <div className="ds-fund-landing__program-grid">
            {programs.map((program) => (
              <BenefitCard
                {...program}
                headingLevel="h3"
                mobile={mobile}
                key={program.title}
              />
            ))}
          </div>
        </section>

        <div className="ds-fund-landing__support">
          <MemberServices fund="health" mobile={mobile} />
        </div>
      </main>

      <Footer fund="health" mobile={mobile} />
    </div>
  );
}
