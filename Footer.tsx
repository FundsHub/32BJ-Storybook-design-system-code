import type { Fund } from './types';
import './components.css';
import './phase20.css';

type Props = { fund?: Fund; mobile?: boolean };

export function Footer({ fund = 'health', mobile = false }: Props) {
  return (
    <footer className={`ds-footer ${mobile ? 'ds-footer--mobile' : ''}`} data-fund={fund} data-figma-node="1752:9817">
      <div className="ds-footer__inner">
        <div className="ds-footer__notices" aria-label="Important notices">
          <a href="#">Your rights and protections against surprise medical bills</a>
          <a href="#">Transparency in coverage notice</a>
        </div>

        <div className="ds-footer__contact">
          <p><strong>32BJ Benefit Funds</strong></p>
          <p>25 West 18th Street, New York, NY 10011-4676</p>
          <p><a href="tel:18005513225">Member Services: 800-551-3225</a></p>
        </div>

        <nav className="ds-footer__links" aria-label="Footer navigation">
          <a href="#">Email Us</a>
          <a href="#">Get Directions</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </nav>

        <div className="ds-footer__social" aria-label="Social links">
          <a href="#" aria-label="32BJ Benefit Funds on Facebook">Facebook</a>
          <a href="#" aria-label="32BJ Benefit Funds on Bluesky">Bluesky</a>
          <a href="#" aria-label="32BJ Benefit Funds on Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
