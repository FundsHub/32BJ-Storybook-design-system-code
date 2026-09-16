import type { Fund } from './types';
import './components.css';

type Props = {
  mobile?: boolean;
  fund?: Fund;
  title?: string;
  phone?: string;
  hours?: string;
  location?: string;
  phoneHref?: string;
  chatHref?: string;
  directionsHref?: string;
};

export function MemberServices({
  mobile = false,
  fund = 'health',
  title = 'Need help? Member Services is here for you.',
  phone = '800-551-3225',
  hours = 'Monday-Friday, 8:30am-8pm · Saturday, 9am-5pm',
  location = 'Welcome Center · 25 West 18th Street, 5th Floor, Manhattan',
  phoneHref = 'tel:+18005513225',
  chatHref = 'https://www.32bjmemberportal.org/',
  directionsHref = 'https://32bjfunds.org/contact-us'
}: Props) {
  return (
    <section className={`ds-member-services ${mobile ? 'ds-member-services--mobile' : ''}`} data-fund={fund}>
      <h2>{title}</h2>
      <a className="ds-member-services__phone" href={phoneHref}>{phone}</a>
      <p>{hours}</p>
      <p>{location}</p>
      <div className="ds-member-services__actions">
        <a className="ds-button ds-button--primary" data-fund={fund} href={phoneHref}>Call Member Services</a>
        <a className="ds-button ds-button--primary" data-fund={fund} href={chatHref}>Live Chat</a>
        <a className="ds-button ds-button--primary" data-fund={fund} href={directionsHref}>Get Directions</a>
      </div>
    </section>
  );
}
