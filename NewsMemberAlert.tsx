import './components.css';
export function NewsMemberAlert({ type='news', date, title, summary }: {type?:'news'|'alert';date?:string;title:string;summary?:string}) { return <a className={`ds-news ds-news--${type}`} href="#"><span className="ds-news__meta">{date|| (type==='alert'?'MEMBER ALERT':'NEWS')}</span><strong>{title}</strong>{summary&&<span>{summary}</span>}</a>; }
