import { Meta, StoryObj } from '@storybook/react';
import { addMinutes, getUnixTime } from 'date-fns';
import { ComponentProps } from 'react';
import { Countdown } from './Countdown';

export default { component: Countdown } as Meta;

type Story = StoryObj<ComponentProps<typeof Countdown>>;

export const in3Minutes: Story = {
  args: { unixTimestampTarget: getUnixTime(addMinutes(new Date(), 3)) },
};
