import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Days } from './Days';
import { Hours } from './Hours';
import { Minutes } from './Minutes';
import { Seconds } from './Seconds';
import { Weeks } from './Weeks';

type DetailProps = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  weeks: number;
};

export const Full: FC<DetailProps> = ({
  seconds,
  minutes,
  hours,
  days,
  weeks,
}) => {
  const showWeeks = weeks > 0;
  const showDays = showWeeks || days > 0;
  const showHours = showDays || hours > 0;
  const showMinutes = showHours || minutes > 0;
  return (
    <Flex>
      {showWeeks && <Weeks amount={weeks} />}
      {showDays && <Days amount={days} padLeft={showWeeks ? 2 : 0} />}
      {showHours && <Hours amount={hours} padLeft={showDays ? 2 : 0} />}
      {showMinutes && <Minutes amount={minutes} padLeft={showHours ? 2 : 0} />}
      <Seconds amount={seconds} padLeft={showMinutes ? 2 : 0} />
    </Flex>
  );
};
