import './components.css';

export type DocumentPattern = 'health-form' | 'claim-form' | 'beneficiary-form';
type Props = {
  title: string;
  href: string;
  pattern?: DocumentPattern;
  format?: string;
  language?: string;
  fileSize?: string;
};

export function DocumentLink({
  title,
  href,
  pattern = 'health-form',
  format = 'PDF',
  language = 'English',
  fileSize
}: Props) {
  const metadata = [format, language, fileSize].filter(Boolean).join(' · ');
  return (
    <a
      className={`ds-document-link ds-document-link--${pattern}`}
      href={href}
      aria-label={`Form: ${title}. ${metadata}`}
    >
      <span className="ds-document-link__type">Form</span>
      <strong>{title}</strong>
      <span className="sr-only">{metadata}</span>
    </a>
  );
}
