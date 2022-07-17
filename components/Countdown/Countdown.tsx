import { Center } from '@chakra-ui/react';
import { Views } from 'components/Countdown/widgets';
import { useSecondsUntil } from 'hooks';
import { FC } from 'react';
import { contentZIndex } from 'theme/variables';

type Props = { unixTimestampTarget: number };

export const Countdown: FC<Props> = ({ unixTimestampTarget }) => {
  const secondsUntil = useSecondsUntil(unixTimestampTarget);
  return (
    <Center
      position={'relative'}
      minH={'100vh'}
      zIndex={`var(${contentZIndex})`}
      userSelect={'none'}
    >
      <Views totalSeconds={secondsUntil} />
    </Center>
  );
};
