import { Meta, StoryObj } from '@storybook/react';
import SignUpPage2 from './signup-page2';

const meta = {
  title: 'Page/SignUp2',
  component: SignUpPage2,
} as Meta;

export default meta;
type Story = StoryObj<typeof SignUpPage2>;
export const Default: Story = {
  args: {},
};
