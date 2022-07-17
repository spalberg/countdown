import { type FC } from 'react';
import Snowfall from 'react-snowfall';
import { contentZIndex } from 'theme/variables';

type Props = {};

export const SnowfallBackground: FC<Props> = ({}) => {
  return <Snowfall style={{ zIndex: `calc(var(${contentZIndex}) + 1)` }} />;
};
