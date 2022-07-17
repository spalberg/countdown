import { BackgroundConfig } from './background';

type EventCountdown = null;

type EventOnTarget = null;

export type Config = {
  background: BackgroundConfig;
  countdown: EventCountdown;
  onTarget: EventOnTarget;
};
