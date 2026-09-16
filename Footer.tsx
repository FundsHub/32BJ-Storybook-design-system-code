import type { Fund } from './types';
import './components.css';
import './phase20.css';

type Props = { fund?: Fund; mobile?: boolean };

const Separator = () => <span className="ds-footer__separator" aria-hidden>|</span>;

export function Footer({ fund = 'health', mobile = false }: Props) {
  return (
    <footer className={`ds-footer ${mobile ? 'ds-footer--mobile' : ''}`} data-fund={fund} data-figma-node="1752:9817">
      <div className="ds-footer__inner">
        <div className="ds-footer__notices" aria-label="Important notices">
          <a href="#"><span className="ds-footer__notice-dot" aria-hidden />Your rights and protections against surprise medical bills</a>
          <a href="#"><span className="ds-footer__notice-dot" aria-hidden />Anthem transparency in coverage notice</a>
        </div>

        <div className="ds-footer__social" aria-label="Social links">
          <a className="ds-footer__social-icon" href="#" aria-label="32BJ Benefit Funds on Facebook"><span aria-hidden>f</span></a>
          <a className="ds-footer__social-icon ds-footer__social-icon--bluesky" href="#" aria-label="32BJ Benefit Funds on Bluesky"><span aria-hidden>BS</span></a>
          <a className="ds-footer__social-icon" href="#" aria-label="32BJ Benefit Funds on Instagram"><span aria-hidden>◎</span></a>
          <a className="ds-footer__qr" href="#" aria-label="Open 32BJ Benefit Funds social links QR code"><span aria-hidden>QR</span></a>
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
