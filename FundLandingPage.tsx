import { useId, useState, type ReactNode } from 'react';
import { Footer } from './Footer';
import { productionAssets } from './productionAssets';
import './fund-landing-page.css';

const healthNavigation = [
  'Home',
  'Health Plans',
  '5 Star Centers',
  'Lantern Surgery Care',
  'Reproductive Health',
  'Behavioral Health',
  'Other Benefits',
  'Forms'
] as const;

const missionCards = [
  {
    title: 'OUR MISSION',
    lead: 'Our mission tells you who we are, what we do—and how.',
    body: 'To improve the lives of hard-working people by providing sustained access to affordable, high-quality healthcare'
  },
  {
    title: 'OUR PURPOSE',
    lead: 'Our purpose tells you why we do what we do.',
    body: 'To maximize the value of our healthcare dollars so that members and employers have the flexibility to allocate resources to other critical needs.'
  },
  {
    title: 'OUR VISION',
    lead: 'Our vision tell you where we want to go.',
    body: 'To create a more just society by making access to quality health services easy and affordable.'
  }
] as const;

type Props = {
  mobile?: boolean;
};

function FundPageHeader({ mobile }: { mobile: boolean }) {
  const id = useId().replace(/:/g, '');
  const mobileMenuId = `health-fund-menu-${id}`;
  const mobileSearchId = `health-fund-search-${id}`;
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="ds-fund-page-header" data-figma-node="922:5420">
      <div className="ds-fund-page-header__announcement">
        <span aria-hidden="true">▸</span>
        <a href="#careers">Discover Your Next Role at 32BJ Funds — Explore Opportunities now!</a>
        <a className="ds-fund-page-header__language" href="#language">Language <span aria-hidden="true">›</span></a>
      </div>

      <div className="ds-fund-page-header__blue">
        <div className="ds-fund-page-header__brand-row">
          <a className="ds-fund-page-header__brand" href="#health-fund-home" aria-label="32BJ Benefit Funds home">
            <img src={productionAssets.logo} alt="" aria-hidden="true" />
            <span>32BJ Benefit Funds</span>
          </a>

          <form className="ds-fund-page-header__search ds-fund-page-header__search--desktop" role="search" action="/" method="get">
            <label className="sr-only" htmlFor={`health-fund-desktop-search-${id}`}>Search 32BJ Benefit Funds</label>
            <img src={productionAssets.searchIcon} alt="" aria-hidden="true" />
            <input id={`health-fund-desktop-search-${id}`} name="s" type="search" placeholder="Find What You Need" />
          </form>

          <div className="ds-fund-page-header__mobile-actions">
            <button
              type="button"
              aria-expanded={searchOpen}
              aria-controls={mobileSearchId}
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
              aria-controls={mobileMenuId}
              onClick={() => {
                setMenuOpen((current) => !current);
                setSearchOpen(false);
              }}
            >Menu</button>
          </div>
        </div>

        <div id={mobileSearchId} className="ds-fund-page-header__mobile-search" hidden={!searchOpen}>
          <form className="ds-fund-page-header__search" role="search" action="/" method="get">
            <label className="sr-only" htmlFor={`health-fund-mobile-search-${id}`}>Search 32BJ Benefit Funds</label>
            <img src={productionAssets.searchIcon} alt="" aria-hidden="true" />
            <input id={`health-fund-mobile-search-${id}`} name="s" type="search" placeholder="Find What You Need" />
          </form>
        </div>

        <nav
          id={mobileMenuId}
          className="ds-fund-page-header__nav"
          aria-label="Health Fund navigation"
          hidden={mobile && !menuOpen}
        >
          {healthNavigation.map((item) => <a href="#" key={item}>{item}</a>)}
        </nav>
      </div>
    </header>
  );
}

function SidebarSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="ds-fund-sidebar__section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function SidebarLink({ children }: { children: ReactNode }) {
  return <a className="ds-fund-sidebar__link" href="#"><span aria-hidden="true" />{children}</a>;
}

export function FundLandingPage({ mobile = false }: Props) {
  return (
    <div
      className={`ds-fund-landing${mobile ? ' ds-fund-landing--mobile' : ''}`}
      data-fund="health"
      data-figma-node="548:3795"
    >
      <FundPageHeader mobile={mobile} />

      <main className="ds-fund-landing__canvas" id="main-content">
        <section className="ds-fund-landing__banner" aria-label="Featured Health Fund announcements">
          <button type="button" aria-label="Previous announcement">‹</button>
          <p>Scrolling Banner</p>
          <button type="button" aria-label="Next announcement">›</button>
        </section>

        <div className="ds-fund-landing__layout">
          <aside className="ds-fund-sidebar" aria-label="Health Fund quick information">
            <SidebarSection title="Looking For a Doctor?">
              <p>We have tens of thousands of excellent primary and specialty doctors in our network. Staying in network always saves you money, and our 5 Star Centers offer great care at the lowest cost to you.</p>
              <SidebarLink>Find A Doctor</SidebarLink>
              <SidebarLink>Find A 5 Star Center</SidebarLink>
            </SidebarSection>

            <SidebarSection title="Make An Appointment at UHC.">
              <SidebarLink>In Network Hospitals</SidebarLink>
              <div className="ds-fund-sidebar__qr" aria-label="QR code placeholder">QR Code</div>
              <p>There are hundreds of <strong>preferred hospitals</strong> in our network where you always pay a lower copay.</p>
              <p><strong>Nonpreferred hospitals</strong> are in network but may send you a bill for more than your copay. If you get a bill, call <strong>Health Services at 866.230.3225.</strong></p>
              <SidebarLink>Find a Preferred Hospital</SidebarLink>
              <SidebarLink>Non-preferred Hospital List</SidebarLink>
            </SidebarSection>

            <SidebarSection title="All New York-Presbyterian facilities and their doctors are out of network">
              <SidebarLink>See FAQ</SidebarLink>
            </SidebarSection>

            <SidebarSection title="What about emergency care?">
              <p>In an emergency, you can go to any hospital ER and pay the same low copay.</p>
            </SidebarSection>

            <SidebarSection title="Need help? Member Services is here for you!">
              <p>Call Member Services at <strong>800.551.3225</strong>, Monday-Friday, 8:30am-8pm, and Saturday, 9am-5pm.</p>
              <p>You can also chat with them live through the <strong>32BJ Member Portal</strong> or visit their Welcome Center at 25 West 18th Street, 5th Floor, in Manhattan.</p>
            </SidebarSection>
          </aside>

          <div className="ds-fund-landing__content">
            <section className="ds-fund-welcome">
              <div className="ds-fund-welcome__copy">
                <h1>Welcome to the 32BJ Health Fund</h1>
                <strong>You work hard, so we work hard for you.</strong>
                <p>32BJ members are at the center of everything we do. We know that healthcare in the US is very expensive, which is why we are always looking for new and better ways to make sure you and your family can get top-quality healthcare that is affordable to you—whenever you need it.</p>
              </div>
              <img className="ds-fund-welcome__image" src={productionAssets.healthFundTeam} alt="Three 32BJ Benefit Funds staff members" />
            </section>

            <section className="ds-fund-mission-grid" aria-label="Health Fund mission, purpose, and vision">
              {missionCards.map((card) => (
                <article className="ds-fund-mission-card" key={card.title}>
                  <h2>{card.title}</h2>
                  <strong>{card.lead}</strong>
                  <p>{card.body}</p>
                </article>
              ))}
            </section>

            <section className="ds-fund-portal">
              <div>
                <h2>32BJ Member Portal: All your benefits,<br />all in one place</h2>
                <strong>Keeping You Connected</strong>
                <p>Find all your benefits, what they cover, and what your copays are. Find doctors, confirm your 401(k) balance, register for training courses, and much more. See your Summary Plan Description (SPD) on the member portal or this website for complete benefit details.</p>
                <a className="ds-fund-portal__button" href="#member-portal">Join Now</a>
              </div>
              <img src={productionAssets.memberPortal} alt="Member using the 32BJ Member Portal" />
            </section>

            <div className="ds-fund-landing__lower-grid">
              <article className="ds-fund-costs">
                <h2>High healthcare costs squeeze your paycheck<br />—and what we’re doing about it</h2>
                <p className="ds-fund-costs__eyebrow">32 BJ Is Fighting To</p>
                <h3>Lower Healthcare Costs For You And Your Employer- And Stop The Paycheck Squeeze</h3>
                <img src={productionAssets.healthcareCosts} alt="Three illustrations explaining how rising healthcare costs reduce worker compensation" />
                <p>Your employer contributes to the cost of your health benefits based on the contract they reached with the Union through the collective bargaining process. Employers have to make hard decisions about how they spend their money to run their businesses. If your employer has to keep paying more for your benefits because of rising healthcare costs, they will have less money to pay you each week—and that’s not right.</p>
                <p>That’s why we are fighting to lower healthcare costs for you, workers like you, and your employers. The biggest cause of high healthcare costs is out-of-control hospital prices. Hospitals keep getting richer and bigger and more powerful—but they are not spending that money on making sure their patients get better care. That’s also not right. <a href="#healthcare-costs">Learn more here.</a></p>
              </article>

              <aside className="ds-fund-resources" aria-label="Health Fund resources">
                <section className="ds-fund-resource-card ds-fund-resource-card--benefits">
                  <h2>Know Your<br />Health Benefits</h2>
                  <div className="ds-fund-resource-card__icons" aria-hidden="true">
                    <span className="is-health">✚<small>Health</small></span>
                    <span className="is-retirement">●<small>Retirement</small></span>
                    <span className="is-legal">⚖<small>Legal</small></span>
                    <span className="is-training">▣<small>Training</small></span>
                  </div>
                  <a href="#benefits-video">Watch The Video</a>
                </section>

                <section className="ds-fund-resource-card">
                  <h2>Health Glossary</h2>
                  <a className="ds-fund-resource-card__text-link" href="#health-glossary"><span aria-hidden="true" />Better understand health insurance terms.</a>
                </section>

                <section className="ds-fund-resource-card">
                  <h2>Forms</h2>
                  <a className="ds-fund-resource-card__text-link" href="#forms"><span aria-hidden="true" />Download health and life insurance forms.</a>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <Footer fund="health" mobile={mobile} />
    </div>
  );
}
