import type { Fund } from './types';
import { Callout } from './Callout';
import { DocumentLink, type DocumentPattern } from './DocumentLink';
import { ResourceLink } from './ResourceLink';
import './resource-forms-index.css';

export type ResourceFormItem = {
  title: string;
  href: string;
  pattern?: DocumentPattern;
  format?: string;
  language?: string;
  fileSize?: string;
};

export type ResourceIndexItem = {
  title: string;
  description?: string;
  type?: 'internal' | 'external' | 'download';
};

export type ResourceFormsIndexProps = {
  title?: string;
  intro?: string;
  eyebrow?: string;
  fund?: Fund;
  forms: ResourceFormItem[];
  resources?: ResourceIndexItem[];
  noticeTitle?: string;
  noticeBody?: string;
  mobile?: boolean;
};

export function ResourceFormsIndex({
  title = 'Forms and resources',
  intro = 'Find forms, claims information, documents, and other member resources.',
  eyebrow = 'Health Fund',
  fund = 'health',
  forms,
  resources = [],
  noticeTitle,
  noticeBody,
  mobile
}: ResourceFormsIndexProps) {
  const modeClass =
    mobile === true
      ? ' ds-resource-index--mobile'
      : mobile === false
        ? ' ds-resource-index--desktop'
        : '';

  return (
    <section
      className={`ds-resource-index${modeClass}`}
      data-fund={fund}
      aria-labelledby="resource-index-title"
    >
      <header className="ds-resource-index__intro">
        <p className="ds-resource-index__eyebrow">{eyebrow}</p>
        <h1 id="resource-index-title">{title}</h1>
        <p>{intro}</p>
      </header>

      {(noticeTitle || noticeBody) && (
        <Callout type="important" title={noticeTitle ?? 'Important information'}>
          {noticeBody ?? 'Review the instructions before submitting a form or claim.'}
        </Callout>
      )}

      <section className="ds-resource-index__section" aria-labelledby="forms-heading">
        <div className="ds-resource-index__section-heading">
          <h2 id="forms-heading">Forms and claims</h2>
          <p>Download the form you need and review any instructions before submitting it.</p>
        </div>

        <div className="ds-resource-index__forms">
          {forms.map((form) => (
            <DocumentLink
              key={`${form.pattern ?? 'health-form'}-${form.title}`}
              {...form}
            />
          ))}
        </div>
      </section>

      {resources.length > 0 && (
        <section className="ds-resource-index__section" aria-labelledby="resources-heading">
          <div className="ds-resource-index__section-heading">
            <h2 id="resources-heading">Related resources</h2>
            <p>Use these links for supporting information, instructions, and external services.</p>
          </div>

          <div className="ds-resource-index__resources">
            {resources.map((resource) => (
              <ResourceLink
                key={`${resource.type ?? 'internal'}-${resource.title}`}
                title={resource.title}
                description={resource.description}
                type={resource.type}
              />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
