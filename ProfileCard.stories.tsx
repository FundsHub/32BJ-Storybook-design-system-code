import { productionAssets } from './productionAssets';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './index';

// A single source-backed card documents the reusable pattern.
const example = {
    name: 'Steve Jenkins',
    role: 'Deputy Executive Director',
    figmaNode: '976:6082',
    imageSrc: productionAssets.leadershipSteveJenkins,
    imageAlt: 'Steve Jenkins',
    bio: `As Deputy Executive Director for 32BJ Benefit Funds, Steve Jenkins works with Fund and Department Directors to plan and manage key program objectives. Mr. Jenkins started with 32BJ Funds in January 2018. Prior to joining the Funds he worked for fourteen years for SEIU Local 32BJ in several capacities including Director of Operations and Director of the Contract and Grievance Center. Mr. Jenkins has also worked with Make the Road New York and The Door’s Legal Services Center. Mr. Jenkins holds a J.D. from Northeastern University and a B.A. in Film from the University of Michigan.`
  };

const meta: Meta<typeof ProfileCard> = {
  title: 'Patterns/Leadership Team',
  component: ProfileCard,
  tags: ['autodocs'],
  args: example
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};
export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'mobile390' } }
};
