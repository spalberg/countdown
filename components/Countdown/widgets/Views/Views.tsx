import React, { FC, useCallback, useEffect, useState } from 'react';
import { getFull, getTotal, MIN, HOUR, DAY, WEEK } from 'utils';
import { Full } from './Full';
import { Weeks } from './Weeks';
import { Days } from './Days';
import { Hours } from './Hours';
import { Minutes } from './Minutes';
import { Seconds } from './Seconds';
import { Box } from '@chakra-ui/react';

const VIEWS = ['full', 'seconds', 'minutes', 'hours', 'days', 'weeks'] as const;

function getMaxValidViewIndex(totalSeconds: number) {
  if (totalSeconds < MIN) {
    return VIEWS.indexOf('seconds');
  }
  if (totalSeconds < HOUR) {
    return VIEWS.indexOf('minutes');
  }
  if (totalSeconds < DAY) {
    return VIEWS.indexOf('hours');
  }
  if (totalSeconds < WEEK) {
    return VIEWS.indexOf('days');
  }
  return VIEWS.indexOf('weeks');
}

function renderView(
  view: typeof VIEWS[number],
  total: ReturnType<typeof getTotal>,
  full: ReturnType<typeof getFull>,
) {
  switch (view) {
    case 'full':
      return <Full {...full} />;
    case 'weeks':
      return <Weeks amount={total.weeks} />;
    case 'days':
      return <Days amount={total.days} />;
    case 'hours':
      return <Hours amount={total.hours} />;
    case 'minutes':
      return <Minutes amount={total.minutes} />;
    case 'seconds':
      return <Seconds amount={total.seconds} />;
  }
}

type Props = {
  totalSeconds: number;
  initialActiveView?: typeof VIEWS[number];
};

export const Views: FC<Props> = ({
  totalSeconds,
  initialActiveView = 'full',
}) => {
  const [activeViewIndex, setActiveViewIndex] = useState(
    VIEWS.indexOf(initialActiveView),
  );
  const maxValidViewIndex = getMaxValidViewIndex(totalSeconds);

  const total = getTotal(totalSeconds);
  const full = getFull(totalSeconds);

  const nextView = useCallback(
    () =>
      setActiveViewIndex(
        (index) => (index + maxValidViewIndex) % (maxValidViewIndex + 1),
      ),
    [maxValidViewIndex],
  );

  useEffect(() => {
    setActiveViewIndex((index) => Math.min(index, maxValidViewIndex));
  }, [maxValidViewIndex]);

  return (
    <Box as="button" onClick={nextView}>
      {renderView(
        VIEWS[Math.min(activeViewIndex, maxValidViewIndex)],
        total,
        full,
      )}
    </Box>
  );
};
