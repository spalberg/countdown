import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Hours } from './Hours';

export default { component: Hours } as Meta;

type Story = StoryObj<ComponentProps<typeof Hours>>;

export const Basic: Story = {
  args: { amount: 12 },
};
