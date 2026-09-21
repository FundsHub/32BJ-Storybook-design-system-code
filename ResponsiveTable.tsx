import type { ReactNode } from 'react';
import './components.css';

export type ResponsiveTableColumn<Row> = {
  key: string;
  header: string;
  render: (row: Row) => ReactNode;
};

type Props<Row extends { id: string }> = {
  caption: string;
  columns: Array<ResponsiveTableColumn<Row>>;
  rows: Row[];
  className?: string;
};

export function ResponsiveTable<Row extends { id: string }>({ caption, columns, rows, className = '' }: Props<Row>) {
  return (
    <div className={`ds-table-scroll ${className}`.trim()} tabIndex={0} role="region" aria-label={caption}>
      <table className="ds-responsive-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>{columns.map((column) => <th key={column.key} scope="col">{column.header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => <td key={column.key} data-label={column.header}>{column.render(row)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
