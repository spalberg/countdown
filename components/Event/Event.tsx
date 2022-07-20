import { Box } from '@chakra-ui/react';
import { Background } from 'components/Background';
import { Countdown } from 'components/Countdown';
import { Target } from 'components/Target';
import { type EventConfig } from 'event';
import { useSecondsUntil } from 'hooks';
import { type FC } from 'react';

type Props = {
  unixTimestampTarget: number;
  config: EventConfig;
};

export const Event: FC<Props> = ({ unixTimestampTarget, config }) => {
  const secondsUntil = useSecondsUntil(unixTimestampTarget);
  return (
    <Box position={'fixed'} top={0} right={0} bottom={0} left={0}>
      <Background config={config.background} />
      {secondsUntil !== 0 ? (
        <Countdown secondsUntil={secondsUntil} config={config.countdown} />
      ) : (
        <Target config={config.onTarget} />
      )}
    </Box>
  );
};
