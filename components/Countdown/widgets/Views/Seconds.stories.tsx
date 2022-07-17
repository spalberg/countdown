import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Seconds } from './Seconds';

export default { component: Seconds } as Meta;

type Story = StoryObj<ComponentProps<typeof Seconds>>;

export const Basic: Story = {
  args: { amount: 12 },
};
