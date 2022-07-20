import { Content } from 'components/Content';
import { Views } from 'components/Countdown/widgets';
import { CountdownConfig } from 'event/countdown';
import { FC } from 'react';

type Props = { secondsUntil: number; config: CountdownConfig };

export const Countdown: FC<Props> = ({ secondsUntil, config: { color } }) => {
  return (
    <Content userSelect={'none'} color={color}>
      <Views totalSeconds={secondsUntil} />
    </Content>
  );
};
