import { FC } from 'react';
import { useSecondsUntil } from 'hooks';
import { Views } from 'components/Views';

type Props = { unixTimestampTarget: number };

export const Countdown: FC<Props> = ({ unixTimestampTarget }) => {
  const secondsUntil = useSecondsUntil(unixTimestampTarget);
  return <Views totalSeconds={secondsUntil} />;
};
