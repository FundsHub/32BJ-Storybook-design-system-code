import './components.css';
export function AlertBar({ message='The Summary Annual Report (SAR) has been updated to reflect corrected information. Please click here.' }: {message?:string}) {
 return <div className="ds-alert" role="status" data-figma-node="1623:8"><span aria-hidden>▲</span><span>{message}</span></div>;
}
