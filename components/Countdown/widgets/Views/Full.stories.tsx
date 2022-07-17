import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Full } from './Full';

export default { component: Full } as Meta;

type Story = StoryObj<ComponentProps<typeof Full>>;

export const Basic: Story = {
  args: { weeks: 2, days: 7, hours: 12, minutes: 54, seconds: 3 },
};
