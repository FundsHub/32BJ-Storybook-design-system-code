import type { Fund } from './types';
import { ResponsiveTable, type ResponsiveTableColumn } from './ResponsiveTable';
import './components.css';

export type BenefitWorkSite = {
  id: string;
  workLocation: string;
  employer: string;
  workType: string;
  href: string;
};

export type BenefitSummary = {
  id: string;
  fund: string;
  plan: string;
  href: string;
};

type Props = {
  state?: 'ready' | 'loading' | 'empty' | 'error';
  fund?: Fund;
  workSites?: BenefitWorkSite[];
  summary?: BenefitSummary[];
  onBack?: () => void;
  onStartOver?: () => void;
};

const defaultWorkSites: BenefitWorkSite[] = [
  { id: 'manhattan-office', workLocation: 'Manhattan', employer: 'Example Building Services', workType: 'Commercial office', href: '#manhattan-office' },
  { id: 'brooklyn-residential', workLocation: 'Brooklyn', employer: 'Example Residential Partners', workType: 'Residential building', href: '#brooklyn-residential' }
];

const defaultSummary: BenefitSummary[] = [
  { id: 'health', fund: 'Health Fund', plan: 'Building Service 32BJ Health Fund', href: '#health-plan' },
  { id: 'legal', fund: 'Legal Services Fund', plan: '32BJ Legal Services Fund', href: '#legal-plan' },
  { id: 'srsp', fund: 'Supplemental Retirement Savings Plan', plan: '32BJ SRSP', href: '#srsp-plan' }
];

const workSiteColumns: Array<ResponsiveTableColumn<BenefitWorkSite>> = [
  { key: 'location', header: 'Work location', render: (row) => row.workLocation },
  { key: 'employer', header: 'Employer', render: (row) => row.employer },
  { key: 'type', header: 'Type of work', render: (row) => row.workType },
  { key: 'action', header: 'Action', render: (row) => <a className="ds-table-action" href={row.href}>Select</a> }
];

const summaryColumns: Array<ResponsiveTableColumn<BenefitSummary>> = [
  { key: 'fund', header: 'Fund', render: (row) => row.fund },
  { key: 'plan', header: 'Plan', render: (row) => row.plan },
  { key: 'action', header: 'More information', render: (row) => <a className="ds-table-action" href={row.href}>View plan</a> }
];

export function BenefitFinderResults({
  state = 'ready',
  fund = 'health',
  workSites = defaultWorkSites,
  summary = defaultSummary,
  onBack,
  onStartOver
}: Props) {
  return (
    <section className="ds-benefit-results" data-fund={fund} aria-labelledby="benefit-results-title" aria-busy={state === 'loading'}>
      <div className="ds-benefit-results__heading">
        <p className="ds-benefit-results__eyebrow">Benefit Plan Finder</p>
        <h2 id="benefit-results-title">Your results</h2>
        <p>Review the matching work site, then open each plan for eligibility and coverage details.</p>
      </div>

      {state === 'loading' && (
        <div className="ds-result-state" role="status">
          <span className="ds-spinner" aria-hidden="true" />
          <strong>Finding your benefits…</strong>
        </div>
      )}

      {state === 'empty' && (
        <div className="ds-result-state" role="status">
          <strong>No matching plans found</strong>
          <p>Check your answers or contact Member Services for help.</p>
        </div>
      )}

      {state === 'error' && (
        <div className="ds-result-state ds-result-state--error" role="alert">
          <strong>We could not load your results</strong>
          <p>Try again. If the problem continues, contact Member Services.</p>
        </div>
      )}

      {state === 'ready' && (
        <>
          <div className="ds-benefit-results__section">
            <h3>Matching work sites</h3>
            <ResponsiveTable caption="Matching work sites" columns={workSiteColumns} rows={workSites} />
          </div>
          <div className="ds-benefit-results__section">
            <h3>Benefit summary</h3>
            <ResponsiveTable caption="Benefit summary" columns={summaryColumns} rows={summary} />
          </div>
        </>
      )}

      <div className="ds-benefit-results__actions">
        <button className="ds-text-action" type="button" onClick={onBack}>← Back</button>
        <button className="ds-button" data-fund={fund} type="button" onClick={onStartOver}>Start over</button>
      </div>
    </section>
  );
}
