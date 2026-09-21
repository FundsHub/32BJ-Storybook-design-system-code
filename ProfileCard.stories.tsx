import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './index';

const meta: Meta<typeof ProfileCard> = { title: 'Patterns/Leadership + Trustee Profiles', component: ProfileCard, tags: ['autodocs'], args: { name: 'Jordan Rivera', role: 'Fund Trustee', group: 'Board of Trustees', bio: 'Jordan supports the Funds’ work to provide members and their families with clear, dependable access to benefits.' } };
export default meta;
type Story = StoryObj<typeof ProfileCard>;
export const Default: Story = {};
export const LeadershipGrid: Story = { render: () => <div className="ds-profile-grid"><ProfileCard name="Jordan Rivera" role="Fund Trustee" group="Board of Trustees" bio="Jordan supports the Funds’ work to provide members and their families with clear, dependable access to benefits." /><ProfileCard name="Morgan Lee" role="Executive Director" group="Fund Leadership" bio="Morgan leads programs and services across the Health, Training, Retirement, and Legal Funds." /></div> };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile390' } } };
