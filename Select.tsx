import type { SelectHTMLAttributes } from 'react';
import type { FieldState } from './types';
import './components.css';
export function Select({ label='Select', helper, error, state='default', id='select-field', children, ...props }: SelectHTMLAttributes<HTMLSelectElement> & {label?:string;helper?:string;error?:string;state?:FieldState}) {
 return <label className={`ds-field ds-field--${state}`} htmlFor={id}><span className="ds-field__label">{label}</span><select id={id} className="ds-input" disabled={state==='disabled'} aria-invalid={!!error} aria-describedby={helper||error?`${id}-hint`:undefined} {...props}>{children}</select>{(error||helper)&&<span id={`${id}-hint`} className="ds-field__hint">{error||helper}</span>}</label>;
}
