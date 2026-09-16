import type { ButtonHTMLAttributes } from 'react';
import type { Fund } from './types';
import './components.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { fund?: Fund; variant?: 'primary' | 'secondary' };
export function Button({ fund='health', variant='primary', className='', children, ...props }: Props) {
  return <button data-fund={fund} className={`ds-button ds-button--${variant} ${className}`} {...props}>{children}</button>;
}
