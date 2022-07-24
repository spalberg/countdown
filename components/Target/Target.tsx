import { OnTargetSchema } from 'event/onTarget';
import { type FC } from 'react';
import { z } from 'zod';
import { TextTarget } from './widgets';

type Props = {
  config: z.infer<typeof OnTargetSchema>;
};

export const Target: FC<Props> = ({ config }) => {
  switch (config.type) {
    case 'text':
      return (
        <TextTarget text={config.text} color={config.color ?? undefined} />
      );
    case 'markdown':
      return <TextTarget text={config.markdown} />;
    case 'youtube':
      return <TextTarget text={config.url} />;
    case 'redirect':
      return <TextTarget text={config.url} />;
  }
};
