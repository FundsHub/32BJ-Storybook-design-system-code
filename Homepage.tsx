import { useId, useState, type ReactNode } from 'react';
import { productionAssets } from './productionAssets';
import './homepage.css';

const primaryNavigation = ['Home', 'Health', 'Training', 'Pension', 'Retirement Savings (401K)', 'Legal'] as const;

const benefitLinks = [
  { label: 'Health', image: productionAssets.homeBenefitHealth },
  { label: 'Retirement', image: productionAssets.homeBenefitRetirement },
  { label: 'Legal', image: productionAssets.homeBenefitLegal },
  { label: 'Training', image: productionAssets.homeBenefitTraining }
] as const;

const alerts = [
  'Summary Annual Report (SAR) Updated',
  'Important Long-Term Disability Update',
  'Health Fund changes effective July 1',
  'New Member Portal is now available',
  'Protect yourself from benefit scams'
] as const;

type Props = {
  mobile?: boolean;
};

function HomepageHeader({ mobile }: { mobile: boolean }) {
  const id = useId().replace(/:/g, '');
  const menuId = `homepage-menu-${id}`;
  const searchId = `homepage-search-${id}`;
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="ds-header ds-homepage-header">
      <div className="ds-homepage-alert">
        <img src={productionAssets.homeSpeaker} alt="" aria-hidden="true" />
        <a href="#long-term-disability"><strong>Important Long-Term Disability Update:</strong> Changes effective July 1.</a>
        <a className="ds-homepage-alert__button" href="#long-term-disability">View Update</a>
        <a className="ds-homepage-alert__language" href="#language">Language <span aria-hidden="true">›</span></a>
      </div>

      <div className="ds-homepage-header__blue">
        <div className="ds-homepage-header__brand-row">
          <a className="ds-homepage-header__brand" href="#homepage-main" aria-label="32BJ Benefit Funds home">
            <img src={productionAssets.logo} alt="" aria-hidden="true" />
            <span>32BJ Benefit Funds</span>
          </a>

          <form className="ds-homepage-header__search ds-homepage-header__search--desktop" role="search">
            <label className="sr-only" htmlFor={`homepage-desktop-search-${id}`}>Search 32BJ Benefit Funds</label>
            <img src={productionAssets.searchIcon} alt="" aria-hidden="true" />
            <input id={`homepage-desktop-search-${id}`} type="search" placeholder="Find What You Need" />
          </form>

          <div className="ds-homepage-header__mobile-actions">
            <button
              type="button"
              aria-expanded={searchOpen}
              aria-controls={searchId}
              onClick={() => {
                setSearchOpen((current) => !current);
                setMenuOpen(false);
              }}
            >
              <img src={productionAssets.searchIcon} alt="" aria-hidden="true" />
              <span className="sr-only">Search</span>
            </button>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => {
                setMenuOpen((current) => !current);
                setSearchOpen(false);
              }}
            >Menu</button>
          </div>
        </div>

        <div id={searchId} className="ds-homepage-header__mobile-search" hidden={!searchOpen}>
          <form className="ds-homepage-header__search" role="search">
            <label className="sr-only" htmlFor={`homepage-mobile-search-${id}`}>Search 32BJ Benefit Funds</label>
            <img src={productionAssets.searchIcon} alt="" aria-hidden="true" />
            <input id={`homepage-mobile-search-${id}`} type="search" placeholder="Find What You Need" />
          </form>
        </div>

        <nav id={menuId} className="ds-homepage-header__nav" aria-label="Main navigation" hidden={mobile && !menuOpen}>
          {primaryNavigation.map((item) => <a href="#" key={item}>{item}</a>)}
        </nav>
      </div>
    </header>
  );
}

function ArrowLink({ children, href = '#' }: { children: ReactNode; href?: string }) {
  return <a className="ds-homepage-arrow-link" href={href}><span aria-hidden="true" />{children}</a>;
}

export function Homepage({ mobile = false }: Props) {
  return (
    <div className={`ds-homepage${mobile ? ' ds-homepage--mobile' : ''}`} data-figma-node="1110:6811">
      <HomepageHeader mobile={mobile} />

      <main id="homepage-main" className="ds-homepage__main">
        <h1 className="sr-only">32BJ Benefit Funds</h1>

        <a className="ds-homepage-hero" href="#healthcare-costs">
          <img src={productionAssets.heroBanner} alt="Don't pay more than you should" />
        </a>

        <section className="ds-homepage-intro-grid" aria-label="About your benefits">
          <article className="ds-homepage-feature ds-homepage-feature--portal">
            <div>
              <h2>Introducing 32BJ Funds Member Portal</h2>
              <strong>Keeping You Connected</strong>
              <p>Everything you need in one place to make the best use of all of your 32BJ Funds Benefits.</p>
              <a className="ds-homepage-button" href="#member-portal">Join Now</a>
            </div>
            <img src={productionAssets.memberPortal} alt="Member using the 32BJ Funds Member Portal" />
          </article>

          <article className="ds-homepage-feature ds-homepage-feature--who">
            <div>
              <h2>Who We Are</h2>
              <p>We serve working people and their families with benefits that support their health, security, and future.</p>
              <a className="ds-homepage-button" href="#who-we-are">Learn More</a>
            </div>
            <img src={productionAssets.whoWeAre} alt="32BJ Benefit Funds team members" />
          </article>

          <article className="ds-homepage-benefits-card">
            <h2>What Are My Benefits?</h2>
            <p>Explore your benefits and find the information you need.</p>
            <div className="ds-homepage-benefits-card__links">
              {benefitLinks.map((benefit) => (
                <a href="#" key={benefit.label}>
                  <img src={benefit.image} alt="" aria-hidden="true" />
                  <span>{benefit.label}</span>
                </a>
              ))}
            </div>
          </article>
        </section>

        <section className="ds-homepage-help-grid" aria-label="Member help and updates">
          <article className="ds-homepage-help-card">
            <h2>Need Help?</h2>
            <h3>Member Services</h3>
            <p>Our team is here to help you understand and use your benefits.</p>
            <p><strong>Call 800-551-3225</strong><br />Monday-Friday, 8:30am-8pm<br />Saturday, 9am-5pm</p>
            <ArrowLink href="#member-services">Contact Member Services</ArrowLink>
          </article>

          <article className="ds-homepage-benefit-matters">
            <img src={productionAssets.benefitMatters} alt="Benefit Matters" />
            <h2>Benefit Matters</h2>
            <p>Get helpful benefit information, news, and practical tips for you and your family.</p>
            <ArrowLink href="#benefit-matters">Read the latest issue</ArrowLink>
          </article>

          <article className="ds-homepage-news">
            <h2>News &amp; Member Alerts</h2>
            <ul>
              {alerts.map((alert) => (
                <li key={alert}>
                  <img src={productionAssets.homeAlertIcon} alt="" aria-hidden="true" />
                  <a href="#">{alert}</a>
                </li>
              ))}
            </ul>
            <ArrowLink href="#news">View all news and alerts</ArrowLink>
          </article>
        </section>

        <section id="long-term-disability" className="ds-homepage-ltd">
          <div className="ds-homepage-ltd__heading">
            <p>Important Member Update</p>
            <h2>Long-Term Disability Benefits are changing</h2>
          </div>
          <div className="ds-homepage-ltd__content">
            <p>Changes to the Long-Term Disability Plan are effective July 1. Review the update to understand what this means for you.</p>
            <div className="ds-homepage-ltd__tags" aria-label="Update topics">
              <span>Effective July 1</span><span>Plan information</span><span>Member action</span>
            </div>
          </div>
          <a className="ds-homepage-button ds-homepage-button--dark" href="#ltd-update">View Update</a>
        </section>

        <section className="ds-homepage-story-grid" aria-label="Programs and support">
          <article className="ds-homepage-story-card ds-homepage-story-card--staff">
            <div className="ds-homepage-story-card__copy">
              <p className="ds-homepage-eyebrow">Member Support</p>
              <h2>Staff Helping Members</h2>
              <p>Meet the people who help members navigate their benefits and get the care and support they need.</p>
              <ArrowLink href="#staff-helping-members">Read their stories</ArrowLink>
            </div>
            <img src={productionAssets.homeStaff} alt="32BJ Benefit Funds staff member helping a member" />
          </article>

          <article className="ds-homepage-story-card ds-homepage-story-card--seminars">
            <img src={productionAssets.homeSeminar} alt="Members attending a seminar" />
            <div className="ds-homepage-story-card__copy">
              <p className="ds-homepage-eyebrow">Learn With Us</p>
              <h2>Upcoming Seminars and Workshops</h2>
              <p>Find classes and events that help you make informed decisions about your benefits.</p>
              <ArrowLink href="#seminars">View the schedule</ArrowLink>
            </div>
          </article>
        </section>

        <section className="ds-homepage-bottom-grid" aria-label="Videos, social media, and careers">
          <article className="ds-homepage-video-card">
            <p className="ds-homepage-eyebrow">Featured Video</p>
            <h2>Watch the Latest from 32BJ Funds</h2>
            <a className="ds-homepage-video-card__screen" href="#latest-video" aria-label="Play the latest 32BJ Funds video">
              <span aria-hidden="true">▶</span>
            </a>
            <ArrowLink href="#videos">View all videos</ArrowLink>
          </article>

          <article className="ds-homepage-social-card">
            <h2>Stay Connected</h2>
            <p>Follow 32BJ Benefit Funds for important news, reminders, and helpful benefit information.</p>
            <div className="ds-homepage-social-card__content">
              <div className="ds-homepage-social-card__icons">
                <a href="#facebook" aria-label="32BJ Benefit Funds on Facebook"><img src={productionAssets.facebook} alt="" /></a>
                <a href="#bluesky" aria-label="32BJ Benefit Funds on Bluesky"><img src={productionAssets.bluesky} alt="" /></a>
                <a href="#instagram" aria-label="32BJ Benefit Funds on Instagram"><img src={productionAssets.instagram} alt="" /></a>
              </div>
              <img className="ds-homepage-social-card__qr" src={productionAssets.footerQr} alt="QR code for 32BJ Benefit Funds online" />
            </div>
          </article>

          <article className="ds-homepage-careers-card">
            <div>
              <p className="ds-homepage-eyebrow">Join Our Team</p>
              <h2>Careers at 32BJ Funds</h2>
              <p>Build a career that makes a difference for working people and their families.</p>
              <a className="ds-homepage-button" href="#careers">Explore Careers</a>
            </div>
            <img src={productionAssets.homeCareers} alt="32BJ Benefit Funds employee" />
          </article>
        </section>
      </main>

      <footer className="ds-homepage-footer">
        <nav aria-label="Footer navigation">
          <a href="#contact">Contact Us</a><a href="#directions">Get Directions</a><a href="#terms">Terms of Use</a><a href="#privacy">Privacy Policy</a>
        </nav>
        <p>25 West 18th Street, New York, NY 10011-4676 &nbsp; | &nbsp; Member Services: <a href="tel:18005513225">800-551-3225</a></p>
      </footer>
    </div>
  );
}
