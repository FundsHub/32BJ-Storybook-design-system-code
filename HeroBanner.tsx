import './components.css';
import './phase20.css';

type Props = {
  mobile?: boolean;
  title?: string;
  body?: string;
  eyebrow?: string;
  imageLabel?: string;
};

export function HeroBanner({
  mobile = false,
  eyebrow = '32BJ Benefit Funds',
  title = 'Benefits that support you and your family',
  body = 'Important 32BJ Benefit Funds information stays readable as live text and remains visible when the banner image is cropped.',
  imageLabel = '32BJ'
}: Props) {
  return (
    <section className={`ds-hero ${mobile ? 'ds-hero--mobile' : ''}`} data-figma-node="1623:6212">
      <div className="ds-hero__visual" aria-hidden>{imageLabel}</div>
      <div className="ds-hero__content">
        <span className="ds-hero__eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
}
