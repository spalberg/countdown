import { type BackgroundConfig } from 'event/background';
import { type FC } from 'react';
import {
  ColorBackground,
  FireworksBackground,
  SnowfallBackground,
} from './widgets';

type Props = {
  config: BackgroundConfig;
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
