import { productionAssets } from './productionAssets';
import './components.css';
import './phase20.css';

type Props = {
  placeholder?: string;
  mobile?: boolean;
  id?: string;
};

export function Search({ placeholder = 'Find What You Need', mobile = false, id = 'site-search' }: Props) {
  return (
    <form className={`ds-search ${mobile ? 'ds-search--mobile' : ''}`} role="search" action="#" method="get">
      <label className="sr-only" htmlFor={id}>Search 32BJ Benefit Funds</label>
      <img className="ds-search__icon" src={productionAssets.searchIcon} alt="" aria-hidden />
      <input id={id} name="q" type="search" autoComplete="off" placeholder={placeholder} />
      <button type="submit" className="sr-only">Submit search</button>
    </form>
  );
}
