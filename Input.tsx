import type { InputHTMLAttributes } from 'react';
import type { FieldState } from './types';
import './components.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helper?: string;
  error?: string;
  state?: FieldState;
  mobile?: boolean;
};

export function Input({
  label = 'Label',
  helper,
  error,
  state = 'default',
  id = 'field',
  mobile = false,
  ...props
}: Props) {
  const disabled = state === 'disabled';
  const hintId = helper || error ? `${id}-hint` : undefined;
  return (
    <label className={`ds-field ds-field--${state} ${mobile ? 'ds-field--mobile' : ''}`} htmlFor={id}>
      <span className="ds-field__label">{label}</span>
      <input
        id={id}
        className="ds-input"
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={hintId}
        {...props}
      />
      {(error || helper) && (
        <span id={hintId} className="ds-field__hint">{error || helper}</span>
      )}
    </label>
  );
}
