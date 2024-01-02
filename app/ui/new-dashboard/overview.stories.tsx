import { Meta, StoryObj } from '@storybook/react';
import Overview from './overview';

const meta = {
  title: 'Dashboard/Overview',
  component: Overview,
  decorators: [
    (Story: any) => (
      <div className="flex items-center justify-center border border-green-800 bg-base-300">
        <Story />
      </div>
    ),
  ],
} as Meta;

export default meta;
type Story = StoryObj<typeof Overview>;
export const Default: Story = {
  args: {},
};
