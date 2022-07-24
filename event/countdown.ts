import { z } from 'zod';

export const CountdownSchema = z.object({
  type: z.literal('default'),
  color: z.string().nullish(),
});
