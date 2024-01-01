import { Meta, StoryObj } from '@storybook/react';
import SignOutPage from './signout-page';

const meta = {
  title: 'Page/SignOut',
  component: SignOutPage,
} as Meta;

export default meta;

type Story = StoryObj<typeof SignOutPage>;

export const Default: Story = {
  args: {},
};
