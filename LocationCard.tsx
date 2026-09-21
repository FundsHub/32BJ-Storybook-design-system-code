type Props = {
  name: string;
  address: string;
  phone?: string;
  hours?: string;
  services?: string[];
  directionsHref?: string;
};

export function LocationCard({
  name,
  address,
  phone,
  hours,
  services = [],
  directionsHref = '#directions'
}: Props) {
  return (
    <article className="ds-location" data-fund="training">
      <div className="ds-location__pin" aria-hidden="true">●</div>
      <div className="ds-location__content">
        <h2>{name}</h2>
        <address>{address}</address>
        {phone && <a href={`tel:${phone.replace(/[^\d+]/g, '')}`}>{phone}</a>}
        {hours && <p><strong>Hours:</strong> {hours}</p>}
        {services.length > 0 && (
          <ul aria-label="Services available">
            {services.map((service) => <li key={service}>{service}</li>)}
          </ul>
        )}
        <a className="ds-location__directions" href={directionsHref}>Get directions <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}
