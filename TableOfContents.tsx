import { useId } from 'react';
import './components.css';

export type TableOfContentsItem = {
  id: string;
  label: string;
};

type Props = {
  items: TableOfContentsItem[];
  title?: string;
};

export function TableOfContents({ items, title = 'On this page' }: Props) {
  // Several examples can share a Docs page. Each navigation needs its own label.
  const titleId = useId();

  return (
    <nav className="ds-toc" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
