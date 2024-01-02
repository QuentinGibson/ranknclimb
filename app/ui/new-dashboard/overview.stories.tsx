import { Meta, StoryObj } from '@storybook/react';
import Overview from './overview';
import { matchUp } from '@/app/lib/definitions';

const meta = {
  title: 'Dashboard/Overview',
  component: Overview,
  decorators: [
    (Story: any) => (
      <div className="flex items-center justify-center bg-base-300 py-10 px-10">
        <div className=" w-[650px]">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta;

export default meta;
type Story = StoryObj<typeof Overview>;
const toughestMatchupsMock = [
  {
    championName: 'Aatrox',
    championIcon: '/champion/Aatrox.png',
    winRate: 32
  },
  {
    championName: 'Ahri',
    championIcon: '/champion/Ahri.png',
    winRate: 33
  },
  {
    championName: 'Akali',
    championIcon: '/champion/Akali.png',
    winRate: 37
  },
  {
    championName: 'Akshan',
    championIcon: '/champion/Akshan.png',
    winRate: 40
  }
]
export const Default: Story = {
  args: {
    masteredCards: 831,
    completionRate: 75,
    toughestMatchups: toughestMatchupsMock
  },
};

export const Main: Story = {
  args: {
    masteredCards: 103,
    completionRate: 99,
    toughestMatchups: toughestMatchupsMock,
    main: {
      name: 'Annie',
      icon: '/champion/Annie.png',
    }
  }
}
