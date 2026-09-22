import { useId, useState } from 'react';
import { HeroCarousel, type HeroSlide } from './HeroCarousel';
import { HomepageCard } from './HomepageCard';
import { productionAssets } from './productionAssets';
import './homepage.css';

const sectionNavigation = [
  'home',
  'Health Plans',
  '5 Star Centers',
  'Lantern Surgery Care',
  'Reproductive Health',
  'Behavioral Health',
  'Other Benefits',
  'Forms'
] as const;

const benefitLinks = [
  { label: 'Health', image: productionAssets.homeBenefitHealth },
  { label: 'Retirement', image: productionAssets.homeBenefitRetirement },
  { label: 'Legal', image: productionAssets.homeBenefitLegal },
  { label: 'Training', image: productionAssets.homeBenefitTraining }
] as const;

const newsItems = [
  'Long-Term Disability changes go into effect July 1.',
  'Review important dates and next steps for your LTD benefits.',
  'Learn what this update means for your coverage.',
  'Contact Member Services if you need help.',
  'Log in to the Member Portal to check your benefits.'
] as const;

const heroSlides: HeroSlide[] = [
  {
    id: 'hospital-billing',
    imageUrl: productionAssets.heroBanner,
    alt: "Don't pay more than you should",
    href: '#hospital-billing'
  },
  {
    id: 'hospital-billing-secondary',
    imageUrl: productionAssets.heroBanner,
    alt: "Don't pay more than you should",
    href: '#hospital-billing'
  }
];

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
    <header className="ds-homepage-header" data-figma-node="1373:8716">
      <div className="ds-homepage-header__utility">
        <a className="ds-homepage-header__language" href="#language">
          Language <span aria-hidden="true">›</span>
        </a>
      </div>

      <div className="ds-homepage-header__blue">
        <div className="ds-homepage-header__brand-row">
          <a className="ds-homepage-header__brand" href="#homepage-main" aria-label="32BJ Benefit Funds home">
            <img src={productionAssets.logo} alt="" aria-hidden="true" />
            <span>32BJ Benefit Funds</span>
          </a>

          <form className="ds-homepage-header__search ds-homepage-header__search--desktop" role="search" action="/">
            <label className="sr-only" htmlFor={`homepage-desktop-search-${id}`}>Search 32BJ Benefit Funds</label>
            <img src={productionAssets.searchIcon} alt="" aria-hidden="true" />
            <input id={`homepage-desktop-search-${id}`} name="s" type="search" placeholder="Find What You Need" />
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
            >
              Menu
            </button>
          </div>
        </div>

        <div id={searchId} className="ds-homepage-header__mobile-search" hidden={!searchOpen}>
          <form className="ds-homepage-header__search" role="search" action="/">
            <label className="sr-only" htmlFor={`homepage-mobile-search-${id}`}>Search 32BJ Benefit Funds</label>
            <img src={productionAssets.searchIcon} alt="" aria-hidden="true" />
            <input id={`homepage-mobile-search-${id}`} name="s" type="search" placeholder="Find What You Need" />
          </form>
        </div>

        <nav id={menuId} className="ds-homepage-header__nav" aria-label="Homepage navigation" hidden={mobile && !menuOpen}>
          {sectionNavigation.map((item) => <a href="#" key={item}>{item}</a>)}
        </nav>
      </div>
    </header>
  );
}

function HomepageButton({ children, href }: { children: string; href: string }) {
  return <a className="ds-homepage-button" href={href}>{children}</a>;
}

export function Homepage({ mobile = false }: Props) {
  return (
    <div
      className={`ds-homepage${mobile ? ' ds-homepage--mobile' : ''}`}
      data-fund="health"
      data-figma-node="1373:8715"
    >
      <HomepageHeader mobile={mobile} />

      <main id="homepage-main" className="ds-homepage__main">
        <h1 className="sr-only">32BJ Benefit Funds</h1>

        <section className="ds-homepage-hero-section" data-figma-node="1373:8717" aria-label="Featured information">
          <HeroCarousel slides={heroSlides} mobile={mobile} ariaLabel="Featured information" />
        </section>

        <section className="ds-homepage-primary" data-figma-node="1373:8718" aria-label="About your benefits">
          <HomepageCard type="member" mobile={mobile} />
          <HomepageCard type="who" mobile={mobile} />

          <article className="ds-homepage-benefits-card" data-figma-node="1374:8850">
            <h2>What Are My Benefits</h2>
            <p>These benefits were made for you—explore what’s possible.</p>
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

        <section className="ds-homepage-ltd-section" data-figma-node="1373:8720">
          <article id="long-term-disability" className="ds-homepage-ltd" data-figma-node="1374:9071">
            <div className="ds-homepage-ltd__icon" aria-hidden="true">!</div>
            <div className="ds-homepage-ltd__copy">
              <h2>Long-Term Disability Benefit Increase Effective July 1, 2026.</h2>
              <p>Review the benefit increase, effective date, and important next steps.</p>
            </div>
            <HomepageButton href="#ltd-update">View Update</HomepageButton>
          </article>
        </section>

        <section className="ds-homepage-support" data-figma-node="1373:8719" aria-label="Member help and updates">
          <article className="ds-homepage-help" data-figma-node="1374:9031">
            <h2>Need Help?</h2>
            <h3>Member Services is Here for You</h3>
            <p>By phone and live chat through the member portal: Monday-Friday, 8:30am-8pm, and Saturday, 9am-5pm.</p>
            <p>In person at the Welcome Center in Manhattan: Monday-Friday, 8:30am-6pm.</p>
            <div className="ds-homepage-help__links">
              <a href="#email">Email us</a><span aria-hidden="true">|</span><a href="#directions">Get Directions</a>
            </div>
          </article>

          <article className="ds-homepage-benefit-matters" data-figma-node="1374:9037">
            <img src={productionAssets.benefitMatters} alt="Benefit Matters" />
            <p>Be in the know! Every bi-monthly issue provides you with updates and information about your benefits.</p>
            <HomepageButton href="#benefit-matters">Read Now</HomepageButton>
          </article>

          <article className="ds-homepage-news" data-figma-node="1374:9048">
            <div className="ds-homepage-news__heading">
              <img src={productionAssets.homeAlertIcon} alt="" aria-hidden="true" />
              <h2>News &amp; Member Alerts</h2>
            </div>
            <ul>
              {newsItems.map((item) => (
                <li key={item}>
                  <img src={productionAssets.homeAlertIcon} alt="" aria-hidden="true" />
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="ds-homepage-stories" data-figma-node="1373:8721" aria-label="Stories and seminars">
          <article className="ds-homepage-staff" data-figma-node="1374:9082">
            <div className="ds-homepage-staff__copy">
              <h2>Staff Helping Members</h2>
              <p>From benefits to workplace challenges, our staff are on the front lines helping members navigate it all. Meet the people who care deeply about your success and well-being.</p>
              <HomepageButton href="#staff-helping-members">Read Their Stories</HomepageButton>
            </div>
            <img src={productionAssets.homeStaff} alt="32BJ Benefit Funds staff helping members" />
          </article>

          <div className="ds-homepage-seminars">
            <div className="ds-homepage-seminars__image" data-figma-node="1374:9098">
              <img src={productionAssets.homeSeminar} alt="Members attending a seminar" />
            </div>
            <article className="ds-homepage-seminars__copy" data-figma-node="1374:9102">
              <h2>Upcoming Seminars<br />and Workshops</h2>
              <p>Get the most out of your benefits. Join an upcoming session to learn, ask questions, and get support from our team. In-person and virtual options available.</p>
              <HomepageButton href="#seminars">View Schedule</HomepageButton>
            </article>
          </div>
        </section>

        <section className="ds-homepage-media" data-figma-node="1373:8722" aria-label="Videos, social media, and careers">
          <article className="ds-homepage-video" data-figma-node="1374:9109">
            <h2>Watch the Latest from<br />32BJ Funds</h2>
            <p>Watch informational videos about your benefits. Hear fellow 32BJ Members’ stories. Stay informed and learn what's new</p>
            <HomepageButton href="#videos">Watch Now</HomepageButton>
          </article>

          <article className="ds-homepage-social" data-figma-node="1374:9118">
            <h2>Stay Connected with 32BJ Funds</h2>
            <h3>Get the latest updates and info</h3>
            <div className="ds-homepage-social__links" aria-label="Social links">
              <a href="#facebook" aria-label="32BJ Benefit Funds on Facebook"><img src={productionAssets.facebook} alt="" /></a>
              <a href="#bluesky" aria-label="32BJ Benefit Funds on Bluesky"><img src={productionAssets.bluesky} alt="" /></a>
              <a href="#instagram" aria-label="32BJ Benefit Funds on Instagram"><img src={productionAssets.instagram} alt="" /></a>
              <a href="#website" aria-label="32BJ Benefit Funds website"><img src={productionAssets.footerQr} alt="" /></a>
            </div>
          </article>

          <article className="ds-homepage-careers" data-figma-node="1399:12806">
            <div className="ds-homepage-careers__copy">
              <h2>Careers at 32BJ Funds</h2>
              <p>Join a team that makes a real difference for working people and their families. Grow your career in a supportive environment where your work truly matters.</p>
              <HomepageButton href="#careers">See Careers</HomepageButton>
            </div>
            <img src={productionAssets.homeCareers} alt="32BJ Benefit Funds team member" />
          </article>
        </section>
      </main>

      <footer className="ds-homepage-footer" data-figma-node="1373:8723">
        <nav className="ds-homepage-footer__primary" aria-label="Footer navigation">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#sitemap">Site Map</a>
          <a href="#terms">Terms of Use</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#seiu">32BJ SEIU</a>
        </nav>
        <nav className="ds-homepage-footer__secondary" aria-label="Legal navigation">
          <a href="#terms">Terms of Use</a>
          <a href="#privacy">Privacy Policy</a>
        </nav>
      </footer>
    </div>
  );
}
