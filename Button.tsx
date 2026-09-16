import type { ButtonHTMLAttributes } from 'react';
import type { Fund } from './types';
import './components.css';

export type ButtonState = 'default' | 'hover' | 'focus' | 'disabled';
type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> & {
  fund?: Fund;
  variant?: 'primary' | 'secondary';
  state?: ButtonState;
  disabled?: boolean;
};

export function Button({
  fund = 'health',
  variant = 'primary',
  state = 'default',
  disabled = false,
  className = '',
  children,
  ...props
}: Props) {
  const isDisabled = disabled || state === 'disabled';
  return (
    <button
      data-fund={fund}
      data-state={state}
      className={`ds-button ds-button--${variant} ${className}`.trim()}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
}
