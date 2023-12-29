import { Meta, StoryObj } from '@storybook/react';
import Sidenav from './sidenav';

const meta = {
  title: 'Shared/Sidenav',
  component: Sidenav,
  decorators: [
    (Story) => (
      <div className="w-full flex-none md:w-64">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Sidenav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    signOut: () => {
      return new Promise(() => {});
    },
  },
};

export const LoggedOut: Story = {
  args: {
    signOut: () => {
      return new Promise(() => {});
    },
  },
};
