import { Content } from 'components/Content';
import { Views } from 'components/Countdown/widgets';
import { CountdownSchema } from 'event/countdown';
import { FC } from 'react';
import { z } from 'zod';

type Props = { secondsUntil: number; config: z.infer<typeof CountdownSchema> };

export const Countdown: FC<Props> = ({ secondsUntil, config: { color } }) => {
  return (
    <Content userSelect={'none'} color={color ?? undefined}>
      <Views totalSeconds={secondsUntil} />
    </Content>
  );
};
