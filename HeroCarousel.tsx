import { useState } from 'react';
import { productionAssets } from './productionAssets';
import './hero-carousel.css';

export type HeroSlide = {
  id: string;
  imageUrl?: string;
  alt?: string;
  href?: string;
  mobileTitle?: string;
  mobileBody?: string;
  mobileLinkLabel?: string;
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

  return (
    <section
      className="ds-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="ds-carousel__desktop">
        <div className="ds-carousel__frame">
          <img
            className="ds-carousel__image"
            src={slide.imageUrl ?? productionAssets.heroBanner}
            alt={slide.alt ?? ''}
          />

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
      </div>

      <div className="ds-carousel__mobile" data-figma-node="1715:132">
        <div className="ds-carousel__mobile-graphic" aria-hidden="true">
          <span className="ds-carousel__mobile-dollar">$</span>
          <span className="ds-carousel__mobile-slash" />
        </div>

        <h2 className="ds-carousel__mobile-title">
          {slide.mobileTitle ?? "DON'T PAY MORE THAN YOU SHOULD"}
        </h2>

        <p className="ds-carousel__mobile-body">
          {slide.mobileBody ??
            'When you go to Northwell Health, NYU Langone, and Westchester Medical Center for care covered by your health plan, you only have to pay your copay. But these hospitals may bill you for more money than you owe.'}
        </p>

        <a className="ds-carousel__mobile-link" href={slide.href || '#'}>
          {slide.mobileLinkLabel ??
            "Don't pay more than you should. Here's how."}
        </a>
      </div>
    </section>
  );
}
