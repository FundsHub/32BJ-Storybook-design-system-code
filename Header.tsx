import type { Fund } from './types';
import { Search } from './Search';
import { productionAssets } from './productionAssets';
import './components.css';
import './phase20.css';

const sections: Record<Fund, string[]> = {
  health: ['Home', 'Health Plans', '5 Star Centers', 'Lantern Surgery Care', 'Other Benefits', 'Forms', 'Reproductive Health', 'Behavioral Health'],
  training: ['Home', 'Locations', 'Courses', 'Greening The Future', 'Employers'],
  retirement: ['Home', 'Retirement Plans', 'Retirement Savings (401K)', 'Glossary', 'Summary Plan Descriptions (SPD)', 'FAQS', 'Forms', 'Contact Us'],
  legal: ['Home', 'Legal Plans', 'Glossary', 'Ask a Question', 'FAQ’S']
};

const global = ['Home', 'Health', 'Training', 'Pension', 'Retirement Savings (401K)', 'Legal'];

type Props = {
  fund?: Fund;
  mobile?: boolean;
  open?: boolean;
  searchOpen?: boolean;
};

export function Header({ fund = 'health', mobile = false, open = false, searchOpen = false }: Props) {
  return (
    <header className={`ds-header ${mobile ? 'ds-header--mobile' : ''}`} data-fund={fund} data-figma-node="1707:8700">
      <div className="ds-header__utility">
        <nav aria-label="Benefit fund navigation">
          {global.map((item) => <a href="#" key={item}>{item}</a>)}
        </nav>
        <button className="ds-header__language" type="button" aria-label="Choose language">Language <span aria-hidden>›</span></button>
      </div>

      <div className="ds-header__brand">
        <div className="ds-header__brandrow">
          <a className="ds-logo" href="#" aria-label="32BJ Benefit Funds home">
            <img className="ds-logo__image" src={productionAssets.logo} alt="" aria-hidden />
            <span>32BJ Benefit Funds</span>
          </a>

          {mobile ? (
            <div className="ds-header__mobile-actions">
              <button className="ds-header__search-toggle" type="button" aria-expanded={searchOpen} aria-controls="mobile-site-search">
                <span aria-hidden>⌕</span><span className="sr-only">Search</span>
              </button>
              <button className="ds-menu" type="button" aria-expanded={open} aria-controls="mobile-section-navigation">Menu</button>
            </div>
          ) : <Search />}
        </div>

        {mobile && searchOpen && <div id="mobile-site-search" className="ds-header__mobile-search"><Search mobile /></div>}

        {(!mobile || open) && (
          <nav id={mobile ? 'mobile-section-navigation' : undefined} className="ds-header__section" aria-label={`${fund} section navigation`}>
            {sections[fund].map((item) => <a href="#" key={item}>{item}</a>)}
          </nav>
        )}
      </div>
    </header>
  );
}
