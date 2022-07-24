import { Event as EventComponent } from 'components/Event';
import { getUnixTime } from 'date-fns';
import { EventSchema } from 'event';
import { mellowYellow } from 'event/presets';
import { GetServerSideProps, NextPage } from 'next';
import { z } from 'zod';

type Props = {
  config: z.infer<typeof EventSchema>;
};

const Event: NextPage<Props> = ({ config }) => {
  return (
    <main>
      <EventComponent config={config} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  return {
    props: {
      config: mellowYellow(getUnixTime(new Date()) + 10, '🚀 Liftoff 🚀'),
    },
  };
};

export default Event;
