import type { Fund } from './types';
import { productionAssets } from './productionAssets';
import './components.css';
import './phase20.css';

type Props = { fund?: Fund; mobile?: boolean };

const Separator = () => <span className="ds-footer__separator" aria-hidden>|</span>;

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.023 1.792-4.692 4.533-4.692 1.312 0 2.686.236 2.686.236v2.968h-1.513c-1.491 0-1.956.93-1.956 1.884v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.25"/></svg>;
}

function BlueskyIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden><path d="M5.3 4.5C7.9 6.45 10.7 10.4 12 12.8c1.3-2.4 4.1-6.35 6.7-8.3 1.9-1.42 5-2.52 5 1 0 .7-.4 5.9-.65 6.74-.84 2.84-3.9 3.56-6.63 3.12 4.76.78 5.97 3.37 3.36 5.96-4.96 4.91-7.13-1.23-7.69-2.81-.1-.29-.15-.43-.09-.31-.06-.12-.11.02-.21.31-.56 1.58-2.73 7.72-7.69 2.81-2.61-2.59-1.4-5.18 3.36-5.96-2.73.44-5.79-.28-6.63-3.12C.58 11.4.18 6.2.18 5.5c0-3.52 3.22-2.42 5.12-1z"/></svg>;
}

export function Footer({ fund = 'health', mobile = false }: Props) {
  return (
    <footer className={`ds-footer ${mobile ? 'ds-footer--mobile' : ''}`} data-fund={fund} data-figma-node="1752:9817">
      <div className="ds-footer__inner">
        <div className="ds-footer__notices" aria-label="Important notices">
          <a href="#"><span className="ds-footer__notice-dot" aria-hidden />Your rights and protections against surprise medical bills</a>
          <a href="#"><span className="ds-footer__notice-dot" aria-hidden />Anthem transparency in coverage notice</a>
        </div>

        <div className="ds-footer__social" aria-label="Social links">
          <a className="ds-footer__social-icon" href="#" aria-label="32BJ Benefit Funds on Facebook"><FacebookIcon /></a>
          <a className="ds-footer__social-icon" href="#" aria-label="32BJ Benefit Funds on Bluesky"><BlueskyIcon /></a>
          <a className="ds-footer__social-icon" href="#" aria-label="32BJ Benefit Funds on Instagram"><InstagramIcon /></a>
          <a className="ds-footer__qr" href="https://32bjfunds.org/" aria-label="Open 32BJ Benefit Funds website">
            <img src={productionAssets.footerQr} alt="" />
          </a>
        </div>

        <p className="ds-footer__contact">
          <span>25 West 18th Street, New York, NY 10011-4676</span>
          <Separator />
          <a href="tel:18005513225">Member Services: 800-551-3225</a>
        </p>

        <nav className="ds-footer__links" aria-label="Footer navigation">
          <a href="#">Email Us</a><Separator />
          <a href="#">Get Directions</a><Separator />
          <a href="#">Terms of Use</a><Separator />
          <a href="#">Privacy Policy</a><Separator />
          <a href="#">32BJ Health Fund Notice Of Privacy Practices</a><Separator />
          <a href="#">32BJ North Health Fund Notice Of Privacy Practices</a>
        </nav>
      </div>
    </footer>
  );
}
