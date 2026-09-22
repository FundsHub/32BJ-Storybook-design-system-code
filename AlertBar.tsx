import './components.css';
import './phase20.css';

type Props = {
  message?: string;
  href?: string;
  linkLabel?: string;
};

export function AlertBar({
  message = 'The Summary Annual Report (SAR) has been updated to reflect corrected information.',
  href = '#sar',
  linkLabel = 'Please click here.'
}: Props) {
  return (
    <div className="ds-alert" role="status" data-figma-node="1623:8">
      <span className="ds-alert__icon" aria-hidden>!</span>
      <span className="ds-alert__message">{message} <a href={href}>{linkLabel}</a></span>
    </div>
  );
}
