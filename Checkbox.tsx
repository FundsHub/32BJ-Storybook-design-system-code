import type { InputHTMLAttributes } from 'react';
import './components.css';
export function Checkbox({ label='I agree', helper, ...props }: InputHTMLAttributes<HTMLInputElement> & {label?:string;helper?:string}) {
 return <label className="ds-choice ds-choice--checkbox"><input type="checkbox" {...props}/><span><strong>{label}</strong>{helper&&<small>{helper}</small>}</span></label>;
}
