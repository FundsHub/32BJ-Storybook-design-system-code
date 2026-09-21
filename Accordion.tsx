import { useId, useState } from 'react';
import type { Fund } from './types';
import './components.css';
import './accordion.css';

export function Accordion({
  fund = 'health',
  question,
  answer,
  defaultOpen = false
}: {
  fund?: Fund;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const triggerId = useId();

  return (
    <div
      className="ds-accordion"
      data-fund={fund}
      data-figma-node="1529:5872"
      data-open={open}
    >
      <button
        id={triggerId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="ds-accordion__question">{question}</span>

        <span className="ds-accordion__chevron" aria-hidden="true">
          <svg viewBox="0 0 20 20" focusable="false">
            <path
              d="M5.5 7.5 10 12l4.5-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {open && (
        <div
          id={panelId}
          className="ds-accordion__answer"
          role="region"
          aria-labelledby={triggerId}
        >
          {answer}
        </div>
      )}
    </div>
  );
}
