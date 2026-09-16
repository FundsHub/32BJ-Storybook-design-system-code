import type { Meta, StoryObj } from '@storybook/react'; import { HeroBanner, HomepageCard, MemberServices, NewsMemberAlert } from '../components';
const meta:Meta={title:'Components/Content',tags:['autodocs']};export default meta;type Story=StoryObj;
export const Hero:Story={render:()=> <div className="sb-section"><HeroBanner/><HeroBanner mobile/></div>};
export const HomepageCards:Story={render:()=> <div className="sb-row"><HomepageCard/><HomepageCard type="who"/></div>};
export const NewsAndAlerts:Story={render:()=> <div className="sb-section"><NewsMemberAlert date="September 2026" title="Benefit Matters update" summary="Read the latest benefit news."/><NewsMemberAlert type="alert" title="Member Alert" summary="Important update for members."/></div>};
export const MemberSupport:Story={render:()=> <div className="sb-section"><MemberServices/><MemberServices mobile/></div>};
