import { type OnTargetConfig } from 'event/onTarget';
import { type FC } from 'react';
import { TextTarget } from './widgets';

type Props = {
  config: OnTargetConfig;
};

export const Target: FC<Props> = ({ config }) => {
  switch (config.type) {
    case 'text':
      return <TextTarget text={config.text} color={config.color} />;
    case 'markdown':
      return <TextTarget text={config.markdown} />;
    case 'youtube':
      return <TextTarget text={config.url} />;
    case 'redirect':
      return <TextTarget text={config.url} />;
  }
};
