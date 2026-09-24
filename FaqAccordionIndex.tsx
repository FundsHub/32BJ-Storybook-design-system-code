import { useId } from 'react';
import { Accordion } from './Accordion';
import { TableOfContents } from './TableOfContents';
import './page-patterns.css';

const groups = [
  {
    key: 'getting-started',
    label: 'Getting started',
    questions: [
      {
        question: 'Which benefits apply to me?',
        answer: 'Example answer: explain how a member can identify the relevant plan, then provide the approved next step. Avoid implying that every member has the same coverage.'
      },
      {
        question: 'Where should I start?',
        answer: 'Example answer: begin with the most useful action and include only the information needed to complete it. Keep supporting detail on the related benefit page.'
      }
    ]
  },
  {
    key: 'documents-support',
    label: 'Documents and support',
    questions: [
      {
        question: 'Where can I find a form?',
        answer: 'Example answer: point to the related forms collection and explain how to choose the correct document. Add the approved destination before publication.'
      },
      {
        question: 'Who can help with my question?',
        answer: 'Example answer: identify the appropriate support team and its approved contact route. Keep contact details consistent with the Member Services component.'
      }
    ]
  }
] as const;

export function FaqAccordionIndex({ mobile = false }: { mobile?: boolean }) {
  const instanceId = useId().replace(/:/g, '');
  const topics = groups.map((group) => ({ id: `faq-${instanceId}-${group.key}`, label: group.label }));

  return (
    <div className="ds-page-patterns ds-faq-index" data-size={mobile ? 'mobile' : 'desktop'} data-fund="health">
      <div className="ds-page-patterns__surface">
        <header className="ds-page-patterns__intro">
          <p className="ds-page-patterns__eyebrow">FAQ + accordion example</p>
          <h1>Frequently asked questions</h1>
          <p className="ds-page-patterns__lede">Group related questions by topic and let members open the answers they need.</p>
        </header>
        <p className="ds-page-patterns__note">Composition example with illustrative answers. Replace these with approved content before publishing.</p>
        <div className="ds-page-patterns__detail">
          <aside className="ds-page-patterns__navigation">
            <TableOfContents title="Browse topics" items={topics} />
          </aside>
          <div className="ds-page-patterns__article">
            {groups.map((group, groupIndex) => (
              <section className="ds-page-patterns__section" id={topics[groupIndex].id} tabIndex={-1} aria-labelledby={`${topics[groupIndex].id}-heading`} key={group.key}>
                <h2 id={`${topics[groupIndex].id}-heading`}>{group.label}</h2>
                <div className="ds-page-patterns__accordions">
                  {group.questions.map((item, itemIndex) => (
                    <Accordion key={item.question} fund="health" question={item.question} answer={item.answer} defaultOpen={groupIndex === 0 && itemIndex === 0} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
