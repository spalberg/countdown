import { z } from 'zod';
import { BackgroundSchema } from './background';
import { CountdownSchema } from './countdown';
import { OnTargetSchema } from './onTarget';

export const EventSchema = z.object({
  background: BackgroundSchema,
  countdown: CountdownSchema,
  onTarget: OnTargetSchema,
  target: z.number(),
});
