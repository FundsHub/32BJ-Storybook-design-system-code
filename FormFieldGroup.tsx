import type { ReactNode } from 'react';
import './components.css';

type Props = {
  legend: string;
  children: ReactNode;
  help?: string;
  id?: string;
  className?: string;
};

export function FormFieldGroup({ legend, children, help, id = 'field-group', className = '' }: Props) {
  const helpId = help ? `${id}-help` : undefined;
  return (
    <fieldset className={`ds-field-group ${className}`.trim()} aria-describedby={helpId}>
      <legend>{legend}</legend>
      {help && <p id={helpId} className="ds-field-group__help">{help}</p>}
      <div className="ds-field-group__content">{children}</div>
    </fieldset>
  );
}
