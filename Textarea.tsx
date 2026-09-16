import type { TextareaHTMLAttributes } from 'react';
import type { FieldState } from './types';
import './components.css';
export function Textarea({ label='Question', helper, error, state='default', id='textarea-field', maxLength=500, value, defaultValue, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & {label?:string;helper?:string;error?:string;state?:FieldState}) {
 const count=typeof value==='string'?value.length:typeof defaultValue==='string'?defaultValue.length:0;
 return <label className={`ds-field ds-field--${state}`} htmlFor={id}><span className="ds-field__label">{label}</span><textarea id={id} className="ds-textarea" disabled={state==='disabled'} aria-invalid={!!error} maxLength={maxLength} value={value} defaultValue={defaultValue} {...props}/><span className="ds-textarea__meta"><span>{error||helper}</span><span aria-live="polite">{count}/{maxLength}</span></span></label>;
}
