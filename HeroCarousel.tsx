import { useState } from 'react';
import { productionAssets } from './productionAssets';
import './hero-carousel.css';

export type HeroSlide = {
  id: string;
  imageUrl?: string;
  alt?: string;
  href?: string;
};

type Props = {
  slides: HeroSlide[];
  ariaLabel?: string;
};

export function HeroCarousel({
  slides,
  ariaLabel = 'Featured information'
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = slides.length;

  if (!count) return null;

  const slide = slides[activeIndex];
  const goTo = (index: number) => setActiveIndex((index + count) % count);

  const image = (
    <img
      className="ds-carousel__image"
      src={slide.imageUrl ?? productionAssets.heroBanner}
      alt={slide.alt ?? ''}
    />
  );

  return (
    <section
      className="ds-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="ds-carousel__frame">
        {slide.href ? (
          <a className="ds-carousel__image-link" href={slide.href}>
            {image}
          </a>
        ) : (
          image
        )}

        {count > 1 && (
          <>
            <button
              className="ds-carousel__arrow ds-carousel__arrow--prev"
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous slide"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <button
              className="ds-carousel__arrow ds-carousel__arrow--next"
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next slide"
            >
              <span aria-hidden="true">›</span>
            </button>
          </>
        )}
      </div>
    </section>
  );
}
