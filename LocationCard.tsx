import './location-card.css';

type Props = {
  name: string;
  address: string;
  phone?: string;
  hours?: string;
  services?: string[];
  directionsHref?: string;
  mobile?: boolean;
};

export function LocationCard({
  name,
  address,
  phone,
  hours,
  services = [],
  directionsHref = '#directions',
  mobile = false
}: Props) {
  const phoneHref = phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : undefined;

  return (
    <article
      className={`ds-location${mobile ? ' ds-location--mobile' : ''}`}
      data-fund="training"
    >
      <div className="ds-location__pin" aria-hidden="true">
        <span />
      </div>

      <div className="ds-location__content">
        <h2>{name}</h2>

        <address>{address}</address>

        {phone && (
          <a className="ds-location__phone" href={phoneHref}>
            {phone}
          </a>
        )}

        {hours && (
          <p className="ds-location__hours">
            <strong>Hours</strong>
            <span>{hours}</span>
          </p>
        )}

        {services.length > 0 && (
          <ul className="ds-location__services" aria-label="Services available">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        )}

        <a className="ds-location__directions" href={directionsHref}>
          Get directions
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
