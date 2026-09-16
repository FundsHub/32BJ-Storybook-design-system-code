import { useId, useState } from 'react';
import type { Fund } from './types';
import './components.css';
export function Accordion({ fund='health', question, answer, defaultOpen=false }: {fund?:Fund;question:string;answer:string;defaultOpen?:boolean}) {
 const [open,setOpen]=useState(defaultOpen); const id=useId();
 return <div className="ds-accordion" data-fund={fund} data-figma-node="1529:5872"><button aria-expanded={open} aria-controls={id} onClick={()=>setOpen(v=>!v)}><span>{question}</span><span aria-hidden>{open?'−':'+'}</span></button>{open&&<div id={id} className="ds-accordion__answer">{answer}</div>}</div>;
}
