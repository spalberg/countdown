import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Weeks } from './Weeks';

export default { component: Weeks } as Meta;

type Story = StoryObj<ComponentProps<typeof Weeks>>;

export const Basic: Story = {
  args: { amount: 12 },
};
