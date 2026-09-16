import './components.css';
export function Search({ placeholder='Find What You Need', mobile=false }: {placeholder?:string;mobile?:boolean}) {
 return <label className={`ds-search ${mobile?'ds-search--mobile':''}`}><span className="sr-only">Search 32BJ Benefit Funds</span><span aria-hidden>⌕</span><input aria-label="Search 32BJ Benefit Funds" placeholder={placeholder}/></label>;
}
