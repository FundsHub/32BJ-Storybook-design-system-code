import type { Fund } from './types';
import './components.css';
const groups: Partial<Record<Fund,{label:string;items:string[]}[]>> = {
 health:[{label:'Health Plans',items:['Health Plans','UHC 5 Star Center','More 5 Star Centers','Lantern surgery care']},{label:'Health resources',items:['Reproductive Health','Behavioral Health','Other Benefits','Forms']}],
 retirement:[{label:'Retirement Plans',items:['Program A','Program B','Program C','Program D','Connecticut Pension','Massachusetts Pension','Broadway League','North Pension','School Workers Pension']},{label:'Resources',items:['SRSP','Glossary','Summary Plan Descriptions','FAQs','Forms','Contact Us']}],
 legal:[{label:'Legal Plans',items:['32BJ Legal Services Fund','32BJ North Legal Services Fund']},{label:'Resources',items:['Glossary','Ask a Question','FAQs','Contact']}]
};
export function NestedNavigation({fund='health',mobile=false}:{fund?:Exclude<Fund,'training'>;mobile?:boolean}) { return <nav className={`ds-nested ${mobile?'ds-nested--mobile':''}`} data-fund={fund}>{groups[fund]?.map(g=><section key={g.label}><strong>{g.label}</strong>{g.items.map(i=><a href="#" key={i}>{i}</a>)}</section>)}</nav>; }
