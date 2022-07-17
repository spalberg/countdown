import { Background } from './background';

type EventCountdown = never;

type EventOnTarget = never;

export type Config = {
  background: Background;
  countdown: EventCountdown;
  onTarget: EventOnTarget;
};
