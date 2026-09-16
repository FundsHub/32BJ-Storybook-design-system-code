import type { Meta, StoryObj } from '@storybook/react'; import { Footer, Header, NestedNavigation, Translation } from './index';
const meta:Meta={title:'Components/Navigation',tags:['autodocs']};export default meta;type Story=StoryObj;
export const Headers:Story={render:()=> <div className="sb-section">{(['health','training','retirement','legal'] as const).map(f=><Header key={f} fund={f}/>)}</div>};
export const MobileHeaders:Story={parameters:{viewport:{defaultViewport:'mobile390'}},render:()=> <div className="sb-section">{(['health','training','retirement','legal'] as const).map(f=><Header key={f} fund={f} mobile open/>)}</div>};
export const NestedMenus:Story={render:()=> <div className="sb-section"><NestedNavigation fund="health"/><NestedNavigation fund="retirement"/><NestedNavigation fund="legal"/></div>};
export const TranslationMenu:Story={render:()=> <div className="sb-row"><Translation/><Translation mobile/></div>};
export const Footers:Story={render:()=> <div className="sb-section">{(['health','training','retirement','legal'] as const).map(f=><Footer key={f} fund={f}/>)}</div>};
