import { type BackgroundConfig } from './background';
import { type CountdownConfig } from './countdown';
import { type OnTargetConfig } from './onTarget';

export type EventConfig = {
  background: BackgroundConfig;
  countdown: CountdownConfig;
  onTarget: OnTargetConfig;
};
