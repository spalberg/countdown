import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { addMinutes, getUnixTime } from 'date-fns';
import { Event } from './Event';

export default { component: Event } as ComponentMeta<typeof Event>;

type Story = ComponentStoryObj<typeof Event>;

export const In3Minutes: Story = {
  args: {
    config: {
      target: getUnixTime(addMinutes(new Date(), 3)),
      background: {
        type: 'color',
        color: '#ffd54f',
      },
      countdown: {
        type: 'default',
        color: '#333',
      },
      onTarget: {
        type: 'text',
        text: 'Liftoff',
      },
    },
  },
};
