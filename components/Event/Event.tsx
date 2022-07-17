import { Box } from '@chakra-ui/react';
import { Background } from 'components/Background';
import { Countdown } from 'components/Countdown';
import { type Config } from 'event';
import { createContext, type FC } from 'react';

type EventContext = {};

const Context = createContext<EventContext>({});

type Props = {
  unixTimestampTarget: number;
  config: Config;
};

export const Event: FC<Props> = ({ unixTimestampTarget, config }) => {
  return (
    <Context.Provider value={{}}>
      <Box position={'fixed'} top={0} right={0} bottom={0} left={0}>
        <Background config={config.background} />
        <Countdown unixTimestampTarget={unixTimestampTarget} />
      </Box>
    </Context.Provider>
  );
};
