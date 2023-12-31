import { Meta, StoryObj } from '@storybook/react';

import SignInForm from './siginInForm';

const meta = {
  title: 'Page/SignInForm',
  component: SignInForm,
  decorators: [
    (Story: any) => (
      <div className="my-10 flex items-center justify-center md:h-screen md:w-screen">
        <Story />
      </div>
    ),
  ],
} as Meta;

export default meta;
type Story = StoryObj<typeof SignInForm>;

export const EmptyForm: Story = {
  args: {},
};
