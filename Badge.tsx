import type { ReactNode } from 'react';
import './components.css';
export function Badge({ children, tone='neutral' }: { children: ReactNode; tone?: 'neutral'|'info' }) {
  return <span className={`ds-badge ds-badge--${tone}`}>{children}</span>;
}
