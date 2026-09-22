import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
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
  const instanceId = useId().replace(/:/g, '');
  const navigationId = `mobile-section-navigation-${instanceId}`;
  const searchPanelId = `mobile-site-search-${instanceId}`;
  const searchInputId = `mobile-site-search-input-${instanceId}`;
  const desktopSearchInputId = `desktop-site-search-input-${instanceId}`;
  const [menuExpanded, setMenuExpanded] = useState(open);
  const [searchExpanded, setSearchExpanded] = useState(searchOpen);
  const menuButton = useRef<HTMLButtonElement>(null);
  const searchButton = useRef<HTMLButtonElement>(null);
  const searchPanel = useRef<HTMLDivElement>(null);

  useEffect(() => setMenuExpanded(open), [open]);
  useEffect(() => setSearchExpanded(searchOpen), [searchOpen]);

  useEffect(() => {
    if (!mobile || !searchExpanded) return;
    searchPanel.current?.querySelector<HTMLInputElement>('input[type="search"]')?.focus();
  }, [mobile, searchExpanded]);

  function handleEscape(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== 'Escape') return;
    if (searchExpanded) {
      setSearchExpanded(false);
      searchButton.current?.focus();
    } else if (menuExpanded) {
      setMenuExpanded(false);
      menuButton.current?.focus();
    }
  }

  return (
    <header className={`ds-header ${mobile ? 'ds-header--mobile' : ''}`} data-fund={fund} data-figma-node="1707:8700" onKeyDown={handleEscape}>
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
              <button
                className="ds-header__search-toggle"
                type="button"
                aria-expanded={searchExpanded}
                aria-controls={searchPanelId}
                ref={searchButton}
                onClick={() => {
                  setSearchExpanded((current) => !current);
                  setMenuExpanded(false);
                }}
              >
                <img className="ds-header__search-icon" src={productionAssets.searchIcon} alt="" aria-hidden />
                <span className="sr-only">Search</span>
              </button>
              <button
                className="ds-menu"
                type="button"
                aria-expanded={menuExpanded}
                aria-controls={navigationId}
                ref={menuButton}
                onClick={() => {
                  setMenuExpanded((current) => !current);
                  setSearchExpanded(false);
                }}
              >
                Menu
              </button>
            </div>
          ) : <Search id={desktopSearchInputId} />}
        </div>

        {mobile && (
          <div id={searchPanelId} className="ds-header__mobile-search" ref={searchPanel} hidden={!searchExpanded}>
            <Search mobile id={searchInputId} />
          </div>
        )}

        <nav
          id={mobile ? navigationId : undefined}
          className="ds-header__section"
          aria-label={`${fund} section navigation`}
          hidden={mobile && !menuExpanded}
        >
          {sections[fund].map((item) => <a href="#" key={item}>{item}</a>)}
        </nav>
      </div>
    </header>
  );
}
