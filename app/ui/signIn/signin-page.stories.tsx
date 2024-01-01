import { Meta, StoryObj } from '@storybook/react';

import SignInPage from './signin-page';

const meta = {
  title: 'Page/SignIn',
  component: SignInPage,
  decorators: [
    (Story: any) => (
      <div className="flex items-center justify-center my-10 md:w-screen">
        <Story />
      </div>
    ),
  ],
} as Meta;

export default meta;
type Story = StoryObj<typeof SignInPage>;

export const EmptyForm: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    errorMessage: 'Something went wrong!',
  },
};
