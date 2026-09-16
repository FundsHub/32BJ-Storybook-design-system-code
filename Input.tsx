import type { InputHTMLAttributes } from 'react';
import type { FieldState } from './types';
import './components.css';
export function Input({ label='Label', helper, error, state='default', id='field', ...props }: InputHTMLAttributes<HTMLInputElement> & {label?:string;helper?:string;error?:string;state?:FieldState}) {
 const disabled=state==='disabled';
 return <label className={`ds-field ds-field--${state}`} htmlFor={id}><span className="ds-field__label">{label}</span><input id={id} className="ds-input" disabled={disabled} aria-invalid={!!error} aria-describedby={helper||error?`${id}-hint`:undefined} {...props}/>{(error||helper)&&<span id={`${id}-hint`} className="ds-field__hint">{error||helper}</span>}</label>;
}
