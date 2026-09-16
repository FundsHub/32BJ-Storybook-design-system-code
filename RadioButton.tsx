import type { InputHTMLAttributes } from 'react';
import './components.css';
export function RadioButton({ label='Option', ...props }: InputHTMLAttributes<HTMLInputElement> & {label?:string}) {
 return <label className="ds-choice"><input type="radio" {...props}/><span>{label}</span></label>;
}
