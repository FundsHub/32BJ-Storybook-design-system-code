import { Button } from './Button';
import { productionAssets } from './productionAssets';
import './components.css';
import './phase20.css';

type CardType = 'member' | 'who';

type Props = {
  type?: CardType;
  imageUrl?: string;
};

export function HomepageCard({ type = 'member', imageUrl }: Props) {
  const member = type === 'member';
  const resolvedImage = imageUrl ?? (member ? productionAssets.memberPortal : productionAssets.whoWeAre);

  return (
    <article className={`ds-home-card ds-home-card--${type}`} data-figma-node="1632:438">
      <div className="ds-home-card__copy">
        <div className="ds-home-card__content">
          <h3>{member ? 'Introducing 32BJ Funds Member Portal' : 'Who We Are'}</h3>
          {member && <strong>Keeping You Connected</strong>}
          <p>{member
            ? 'Everything you need in one place to make the best use of all of your 32BJ Funds Benefits.'
            : 'We serve working people and their families with benefits that support their health, security, and future. Our team is proud to make a difference every day.'}</p>
        </div>
        <Button>{member ? 'Join Now' : 'Learn More'}</Button>
      </div>
      <div className="ds-home-card__art" aria-hidden>
        <img src={resolvedImage} alt="" />
      </div>
    </article>
  );
}
