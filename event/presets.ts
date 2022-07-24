import { z } from 'zod';
import { EventSchema } from './event';

type Preset = (target: number, text: string) => z.infer<typeof EventSchema>;

export const mellowYellow: Preset = (target, text) => {
  return {
    target,
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
      text,
      color: '#333',
    },
  };
};
