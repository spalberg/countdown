import { Box } from '@chakra-ui/react';
import { Background } from 'components/Background';
import { Countdown } from 'components/Countdown';
import { Target } from 'components/Target';
import { EventSchema } from 'event';
import { useSecondsUntil } from 'hooks';
import { type FC } from 'react';
import { z } from 'zod';

type Props = {
  config: z.infer<typeof EventSchema>;
};

export const Event: FC<Props> = ({
  config: { target, onTarget, background, countdown },
}) => {
  const secondsUntil = useSecondsUntil(target);
  return (
    <Box position={'fixed'} top={0} right={0} bottom={0} left={0}>
      <Background config={background} />
      {secondsUntil !== 0 ? (
        <Countdown secondsUntil={secondsUntil} config={countdown} />
      ) : (
        <Target config={onTarget} />
      )}
    </Box>
  );
};
