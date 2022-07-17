import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Days } from './Days';

export default { component: Days } as Meta;

type Story = StoryObj<ComponentProps<typeof Days>>;

export const Basic: Story = {
  args: { amount: 12 },
};
