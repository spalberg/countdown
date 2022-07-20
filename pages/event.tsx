import { Event as EventComponent } from 'components/Event';
import { getUnixTime } from 'date-fns';
import { EventConfig } from 'event';
import { GetServerSideProps, NextPage } from 'next';

type Props = {
  unixTimestampTarget: number;
  config: EventConfig;
};

const Event: NextPage<Props> = ({ unixTimestampTarget, config }) => {
  return (
    <main>
      <EventComponent
        unixTimestampTarget={unixTimestampTarget}
        config={config}
      />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  return {
    props: {
      unixTimestampTarget: getUnixTime(new Date()) + 120, // 18000,
      config: {
        background: {
          type: 'color',
          color: '#ffd54f',
        },
        countdown: {
          type: 'default',
          color: '#333',
        },
        onTarget: {
          type: 'text',
          text: 'Liftoff',
          color: '#333',
        },
      },
    },
  };
};

export default Event;
