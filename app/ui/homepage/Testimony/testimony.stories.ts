import type { Meta, StoryObj } from '@storybook/react';
import Testimony from './testimony';

const meta = {
  title: 'Homepage/Testimony',
  component: Testimony,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Testimony>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    messages: [
      'ipsum sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. ',
      'sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.',
    ],
  },
};
