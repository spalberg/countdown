import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Countdown } from './Countdown';

export default { component: Countdown } as Meta;

type Story = StoryObj<ComponentProps<typeof Countdown>>;

export const In3Minutes: Story = {
  args: { secondsUntil: 180 },
};
