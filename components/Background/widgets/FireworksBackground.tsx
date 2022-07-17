import Fireworks from '@fireworks-js/react';
import { type FC } from 'react';
import { contentZIndex } from 'theme/variables';

type Props = {};

export const FireworksBackground: FC<Props> = ({}) => {
  return (
    <Fireworks
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000',
        zIndex: `calc(var(${contentZIndex}) - 1)`,
      }}
    />
  );
};
