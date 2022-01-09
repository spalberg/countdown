import { getUnixTime } from 'date-fns';
import { useEffect, useState } from 'react';

function now(): Date {
  return new Date();
}

function getSecondsUntil(epochTarget: number): number {
  const epochNow = getUnixTime(now());
  return Math.max(epochTarget - epochNow, 0);
}

export function useSecondsUntil(epochTarget: number) {
  const [secondsUntil, setSecondsUntil] = useState(
    getSecondsUntil(epochTarget),
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsUntil(getSecondsUntil(epochTarget));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [epochTarget]);
  return secondsUntil;
}
