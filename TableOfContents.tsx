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
  return (
    <nav className="ds-toc" aria-labelledby="table-of-contents-title">
      <h2 id="table-of-contents-title">{title}</h2>
      <ol>
        {items.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>)}
      </ol>
    </nav>
  );
}
