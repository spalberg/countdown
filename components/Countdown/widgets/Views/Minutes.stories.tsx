import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Minutes } from './Minutes';

export default { component: Minutes } as Meta;

type Story = StoryObj<ComponentProps<typeof Minutes>>;

export const Basic: Story = {
  args: { amount: 12 },
};
