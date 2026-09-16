import { useState } from 'react';
import type { ChangeEvent, TextareaHTMLAttributes } from 'react';
import type { FieldState } from './types';
import './components.css';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  helper?: string;
  error?: string;
  state?: FieldState;
  mobile?: boolean;
};

export function Textarea({
  label = 'Your Question *',
  helper,
  error,
  state = 'default',
  id = 'textarea-field',
  maxLength = 2000,
  value,
  defaultValue,
  mobile = false,
  onChange,
  ...props
}: Props) {
  const initial = typeof defaultValue === 'string' ? defaultValue : '';
  const [internalValue, setInternalValue] = useState(initial);
  const currentValue = typeof value === 'string' ? value : internalValue;
  const hintId = error || helper ? `${id}-hint` : undefined;
  const counterId = `${id}-counter`;

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (value === undefined) setInternalValue(event.target.value);
    onChange?.(event);
  }

  return (
    <label className={`ds-field ds-field--textarea ds-field--${state} ${mobile ? 'ds-field--mobile' : ''}`} htmlFor={id}>
      <span className="ds-field__label">{label}</span>
      <textarea
        id={id}
        className="ds-textarea"
        disabled={state === 'disabled'}
        aria-invalid={error ? true : undefined}
        aria-describedby={[hintId, counterId].filter(Boolean).join(' ') || undefined}
        maxLength={maxLength}
        value={value !== undefined ? value : internalValue}
        onChange={handleChange}
        {...props}
      />
      <span className="ds-textarea__meta">
        <span id={hintId} className={error ? 'ds-field__hint ds-field__hint--error' : 'ds-field__hint'}>{error || helper || ''}</span>
        <span id={counterId} aria-live="polite">{currentValue.length} / {maxLength}</span>
      </span>
    </label>
  );
}
