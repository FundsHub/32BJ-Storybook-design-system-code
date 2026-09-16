import { productionAssets } from './productionAssets';
import './components.css';
import './phase20.css';

type Props = {
  mobile?: boolean;
  title?: string;
  body?: string;
  eyebrow?: string;
  imageUrl?: string;
};

export function HeroBanner({
  mobile = false,
  eyebrow = '32BJ Benefit Funds',
  title = 'Don\'t pay more than you should',
  body = 'Important benefit information stays readable as live text while the production campaign artwork remains intact.',
  imageUrl = productionAssets.heroVisual
}: Props) {
  return (
    <section className={`ds-hero ${mobile ? 'ds-hero--mobile' : ''}`} data-figma-node="1623:6212">
      <div className="ds-hero__visual" aria-hidden>
        <img className="ds-hero__image" src={imageUrl} alt="" />
      </div>
      <div className="ds-hero__content">
        <span className="ds-hero__eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
}
