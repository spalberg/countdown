const { max, floor } = Math;

export const MIN = 60;
export const HOUR = MIN * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;

const floorMin = (n: number) => max(0, floor(n));
const secondsToMinutes = (seconds: number) => floorMin(seconds / MIN);
const secondsToHours = (seconds: number) => floorMin(seconds / HOUR);
const secondsToDays = (seconds: number) => floorMin(seconds / DAY);
const secondsToWeeks = (seconds: number) => floorMin(seconds / WEEK);

export const getTotal = (seconds: number) => {
  return {
    weeks: secondsToWeeks(seconds),
    days: secondsToDays(seconds),
    hours: secondsToHours(seconds),
    minutes: secondsToMinutes(seconds),
    seconds: floorMin(seconds),
  };
};

export const getFull = (seconds: number) => {
  return {
    weeks: secondsToWeeks(seconds),
    days: secondsToDays(seconds % WEEK),
    hours: secondsToHours(seconds % DAY),
    minutes: secondsToMinutes(seconds % HOUR),
    seconds: floorMin(seconds % MIN),
  };
};
