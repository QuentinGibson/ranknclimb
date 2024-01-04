import { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta = {
  title: 'Shared/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <div className="w-full md:w-[21.5rem]">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Navbar>;

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
