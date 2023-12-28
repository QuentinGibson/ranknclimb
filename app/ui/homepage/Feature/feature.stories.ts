
import type { Meta, StoryObj } from '@storybook/react';
import { Feature } from './feature';

const meta = {
  title: 'Homepage/Feature',
  component: Feature,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    flip: false,
    title: 'Feature',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.',
    image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    altText: 'Feature image',
  },
};