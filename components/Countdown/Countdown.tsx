import React, { FC } from 'react';
import { useSecondsUntil } from 'hooks';
import { Views } from 'components/Views';
import { Center } from '@chakra-ui/react';

type Props = { unixTimestampTarget: number };

export const Countdown: FC<Props> = ({ unixTimestampTarget }) => {
  const secondsUntil = useSecondsUntil(unixTimestampTarget);
  return (
    <Center height="100vh">
      <Views totalSeconds={secondsUntil} />
    </Center>
  );
};
