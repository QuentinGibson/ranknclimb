import { Meta, StoryObj } from '@storybook/react';
import AccountStatistics from './AccountStatistics';

const meta = {
  title: 'dashboard/AccountStatistics',
  component: AccountStatistics,
  decorators: [
    (Story: any) => (
      <div className="flex items-center justify-center bg-base-300">
        <div className="w-[350px] py-10">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta;

export default meta;
type Story = StoryObj<typeof AccountStatistics>;

export const Default: Story = {
  args: {
    accountName: 'Account Name',
    winRate: 50,
    mainPlayRate: 50,
    mainWinRate: 50,
    currentRank: '/rank/emerald-icon.png',
  },
};
