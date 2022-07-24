import { Event as EventComponent } from 'components/Event';
import { EventSchema } from 'event';
import { GetServerSideProps, NextPage } from 'next';
import { z } from 'zod';

type Props = {
  config: z.infer<typeof EventSchema>;
};

type Query = {
  event: string;
};

const InlineEvent: NextPage<Props> = ({ config }) => {
  return (
    <main>
      <EventComponent config={config} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Query> = async (
  context,
) => {
  try {
    const encodedEvent = context.params?.event;
    const unparsedConfigString = Buffer.from(
      decodeURIComponent(encodedEvent ?? ''),
      'base64',
    ).toString();
    const unparsedConfig = JSON.parse(unparsedConfigString);
    const config = await EventSchema.parseAsync(unparsedConfig);
    return {
      props: {
        config,
      },
    };
  } catch (error) {
    // TODO error handling
    throw error;
  }
};

export default InlineEvent;
