import './components.css';
export function DocumentLink({ title, meta='PDF' }: {title:string;meta?:string}) { return <a className="ds-resource ds-resource--document" href="#"><span><strong>{title}</strong><small>{meta}</small></span><span aria-hidden>↓</span></a>; }
