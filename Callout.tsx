import type { ReactNode } from 'react';
import './components.css';
export function Callout({ type='info', title, children, action }: {type?:'info'|'important'|'warning'|'critical';title:string;children:ReactNode;action?:ReactNode}) {
 return <aside className={`ds-callout ds-callout--${type}`} aria-label={`${type}: ${title}`}><strong>{title}</strong><div>{children}</div>{action&&<div className="ds-callout__action">{action}</div>}</aside>;
}
