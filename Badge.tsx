import type { ReactNode } from 'react';
import './components.css';

export type BadgePattern = 'cleaning' | 'security';
export function Badge({ children, pattern = 'cleaning' }: { children: ReactNode; pattern?: BadgePattern }) {
  return <span className={`ds-badge ds-badge--${pattern}`}>{children}</span>;
}
