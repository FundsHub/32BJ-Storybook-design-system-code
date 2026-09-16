import type { Fund } from './types';
import { Search } from './Search';
import './components.css';
const sections: Record<Fund,string[]> = {
 health:['Home','Health Plans','5 Star Centers','Lantern Surgery Care','Other Benefits','Forms','Reproductive Health','Behavioral Health'],
 training:['Home','Locations','Courses','Greening The Future','Employers'],
 retirement:['Home','Retirement Plans','Retirement Savings (401K)','Glossary','Summary Plan Descriptions (SPD)','FAQS','Forms','Contact Us'],
 legal:['Home','Legal Plans','Glossary','Ask a Question','FAQ’S']
};
const global=['Home','Health','Training','Pension','Retirement Savings (401K)','Legal'];
export function Header({fund='health',mobile=false,open=false}:{fund?:Fund;mobile?:boolean;open?:boolean}) {
 return <header className={`ds-header ${mobile?'ds-header--mobile':''}`} data-fund={fund} data-figma-node="1707:8700"><div className="ds-header__utility"><nav aria-label="Fund navigation">{global.map(x=><a href="#" key={x}>{x}</a>)}</nav><button className="ds-header__language">Language ›</button></div><div className="ds-header__brand"><div className="ds-header__brandrow"><a className="ds-logo" href="#"><span className="ds-logo__mark">32BJ</span><span>32BJ Benefit Funds</span></a>{mobile?<button className="ds-menu" aria-expanded={open}>Menu</button>:<Search/>}</div>{(!mobile||open)&&<nav className="ds-header__section" aria-label={`${fund} section navigation`}>{sections[fund].map(x=><a href="#" key={x}>{x}</a>)}</nav>}</div></header>;
}
