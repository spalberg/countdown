import { Wrap, WrapItem } from '@chakra-ui/react';
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
    <Wrap spacing="5" direction={{ base: 'column', md: 'row' }}>
      {showWeeks && (
        <WrapItem>
          <Weeks amount={weeks} />
        </WrapItem>
      )}
      {showDays && (
        <WrapItem>
          <Days amount={days} padLeft={showWeeks ? 2 : 0} />
        </WrapItem>
      )}
      {showHours && (
        <WrapItem>
          <Hours amount={hours} padLeft={showDays ? 2 : 0} />
        </WrapItem>
      )}
      {showMinutes && (
        <WrapItem>
          <Minutes amount={minutes} padLeft={showHours ? 2 : 0} />
        </WrapItem>
      )}
      <WrapItem>
        <Seconds amount={seconds} padLeft={showMinutes ? 2 : 0} />
      </WrapItem>
    </Wrap>
  );
};
