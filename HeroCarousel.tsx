import { useEffect, useId, useState } from 'react';

export type HeroSlide = {
  id: string;
  eyebrow?: string;
  title: string;
  summary: string;
  actionLabel: string;
  href?: string;
  tone?: 'blue' | 'navy' | 'teal';
};

type Props = {
  slides: HeroSlide[];
  autoPlay?: boolean;
  interval?: number;
  ariaLabel?: string;
};

export function HeroCarousel({
  slides,
  autoPlay = false,
  interval = 7000,
  ariaLabel = 'Featured information'
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const headingId = useId();
  const count = slides.length;

  useEffect(() => {
    if (!autoPlay || paused || count < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % count), interval);
    return () => window.clearInterval(timer);
  }, [autoPlay, count, interval, paused]);

  if (!count) return null;
  const slide = slides[activeIndex];
  const goTo = (index: number) => setActiveIndex((index + count) % count);

  return (
    <section className="ds-carousel" role="region" aria-roledescription="carousel" aria-label={ariaLabel} data-tone={slide.tone || 'blue'}>
      <div className="ds-carousel__content" aria-live="polite" aria-atomic="true">
        <p className="ds-carousel__eyebrow">{slide.eyebrow}</p>
        <h2 id={headingId}>{slide.title}</h2>
        <p>{slide.summary}</p>
        <a className="ds-carousel__action" href={slide.href || '#'}>{slide.actionLabel}</a>
      </div>
      <div className="ds-carousel__art" aria-hidden="true"><span>32BJ</span></div>
      {count > 1 && (
        <div className="ds-carousel__controls">
          <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous slide">←</button>
          <div className="ds-carousel__dots" aria-label="Choose a slide">
            {slides.map((item, index) => (
              <button
                type="button"
                key={item.id}
                aria-label={`Show slide ${index + 1}: ${item.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next slide">→</button>
          {autoPlay && <button className="ds-carousel__pause" type="button" onClick={() => setPaused((value) => !value)}>{paused ? 'Resume' : 'Pause'}</button>}
        </div>
      )}
    </section>
  );
}
