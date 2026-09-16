import { productionAssets } from './productionAssets';
import './components.css';
import './phase20.css';

type HeroMode = 'figma' | 'liveText';

type Props = {
  mobile?: boolean;
  mode?: HeroMode;
  title?: string;
  body?: string;
  eyebrow?: string;
  imageUrl?: string;
};

export function HeroBanner({
  mobile = false,
  mode,
  eyebrow = '32BJ Benefit Funds',
  title = 'Don\'t pay more than you should',
  body = 'When you go to Northwell Health, NYU Langone, and Westchester Medical Center for care covered by your health plan, you only have to pay your copay. But these hospitals may bill you for more money than you owe.',
  imageUrl
}: Props) {
  const resolvedMode: HeroMode = mode ?? (mobile ? 'liveText' : 'figma');

  if (resolvedMode === 'figma') {
    return (
      <section className="ds-hero ds-hero--figma" data-figma-node="1623:6212">
        <img className="ds-hero__banner" src={imageUrl ?? productionAssets.heroBanner} alt="" aria-hidden />
        <span className="sr-only">{title}. {body} Don&apos;t pay more than you should. Here&apos;s how.</span>
      </section>
    );
  }

  return (
    <section className={`ds-hero ds-hero--live ${mobile ? 'ds-hero--mobile' : ''}`} data-figma-node="1623:6212">
      <div className="ds-hero__visual" aria-hidden>
        <img className="ds-hero__image" src={imageUrl ?? productionAssets.heroVisual} alt="" />
      </div>
      <div className="ds-hero__content">
        <span className="ds-hero__eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
}
