import { z } from 'zod';
import { BackgroundSchema } from 'event/background';
import { type FC } from 'react';
import {
  ColorBackground,
  FireworksBackground,
  SnowfallBackground,
} from './widgets';

type Props = {
  config: z.infer<typeof BackgroundSchema>;
};

export const Background: FC<Props> = ({ config }) => {
  switch (config.type) {
    case 'color':
      return <ColorBackground bg={config.color} />;
    case 'gradient':
      return <ColorBackground bg={config.gradient} />;
    case 'image':
    case 'video':
      return null;
    case 'fireworks':
      return <FireworksBackground />;
    case 'snowfall':
      return <SnowfallBackground />;
  }
};
