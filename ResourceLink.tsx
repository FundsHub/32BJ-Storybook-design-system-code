import './components.css';
export function ResourceLink({ title, description, type='internal' }: {title:string;description?:string;type?:'internal'|'external'|'download'}) { const mark=type==='download'?'↓':type==='external'?'↗':'→'; return <a className="ds-resource" href="#"><span><strong>{title}</strong>{description&&<small>{description}</small>}</span><span aria-hidden>{mark}</span></a>; }
