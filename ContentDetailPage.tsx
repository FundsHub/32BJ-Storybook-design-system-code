import { useId } from 'react';
import { TableOfContents } from './TableOfContents';
import { DocumentLink } from './DocumentLink';
import { ResourceLink } from './ResourceLink';
import { MemberServices } from './MemberServices';
import './page-patterns.css';

/** Illustrative structure; replace copy and destinations with approved plan content. */
export function ContentDetailPage({ mobile = false }: { mobile?: boolean }) {
  const prefix = `detail-${useId().replace(/:/g, '')}`;
  const sections = ['eligibility', 'coverage', 'next-steps', 'documents', 'help'] as const;
  const labels = ['Eligibility', 'What is covered', 'How to use your benefits', 'Documents and forms', 'Get help'];
  const id = (section: typeof sections[number]) => `${prefix}-${section}`;
  return (
    <div className="ds-page-patterns ds-content-detail" data-size={mobile ? 'mobile' : 'desktop'} data-fund="health">
      <div className="ds-page-patterns__surface">
        <header className="ds-page-patterns__intro" id={`${prefix}-top`}>
          <p className="ds-page-patterns__eyebrow">Content + detail example</p>
          <h1>Your health plan</h1>
          <p className="ds-page-patterns__lede">Find the information you need, review related documents, and contact Member Services for help.</p>
        </header>
        <p className="ds-page-patterns__note">Structure example. Replace this guidance with approved plan information and working links before publishing.</p>
        <div className="ds-page-patterns__detail">
          <aside className="ds-page-patterns__navigation"><TableOfContents items={sections.map((section, index) => ({ id: id(section), label: labels[index] }))} /></aside>
          <main className="ds-page-patterns__article" aria-label="Health plan information example">
            <section className="ds-page-patterns__section" id={id('eligibility')} tabIndex={-1} aria-labelledby={`${id('eligibility')}-heading`}>
              <h2 id={`${id('eligibility')}-heading`}>Eligibility</h2>
              <p>Explain who can use this benefit and how a member can confirm their eligibility. Add the approved requirements and exceptions for this plan.</p>
            </section>
            <section className="ds-page-patterns__section" id={id('coverage')} tabIndex={-1} aria-labelledby={`${id('coverage')}-heading`}>
              <h2 id={`${id('coverage')}-heading`}>What is covered</h2>
              <p>Group covered services under clear headings. Place limits and exceptions beside the relevant information, with a link to the full plan document.</p>
            </section>
            <section className="ds-page-patterns__section" id={id('next-steps')} tabIndex={-1} aria-labelledby={`${id('next-steps')}-heading`}>
              <h2 id={`${id('next-steps')}-heading`}>How to use your benefits</h2>
              <p>Describe the steps a member needs to take, including where to check plan details and whom to contact with questions.</p>
            </section>
            <section className="ds-page-patterns__section" id={id('documents')} tabIndex={-1} aria-labelledby={`${id('documents')}-heading`}>
              <h2 id={`${id('documents')}-heading`}>Documents and forms</h2>
              <p>Add current files and destinations here. Identify the format and language of each document.</p>
              <div className="ds-content-detail__resources">
                <DocumentLink title="Plan form example" href="#replace-with-approved-form" format="PDF" language="English" />
                <ResourceLink title="Plan information example" description="Read the current plan details" href="#replace-with-approved-resource" />
              </div>
            </section>
            <section className="ds-page-patterns__section" id={id('help')} tabIndex={-1} aria-labelledby={`${id('help')}-heading`}>
              <h2 id={`${id('help')}-heading`}>Get help</h2>
              <p>Confirm the contact details and available services for this page before publishing.</p>
              <MemberServices />
            </section>
            <a className="ds-page-patterns__back" href={`#${prefix}-top`}>Back to top</a>
          </main>
        </div>
      </div>
    </div>
  );
}
