import type { ReactNode } from 'react'; import './components.css';
export function FormFieldGroup({legend,children,help}:{legend:string;children:ReactNode;help?:string}) { return <fieldset className="ds-field-group"><legend>{legend}</legend>{help&&<p>{help}</p>}<div className="ds-field-group__content">{children}</div></fieldset>; }
