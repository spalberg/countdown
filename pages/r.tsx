import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { getUnixTime } from 'date-fns';
import { Countdown } from 'components/Countdown';

type Props = {
  unixTimestampTarget: number;
};

const Home: NextPage<Props> = ({ unixTimestampTarget }) => {
  return (
    <main>
      <Countdown unixTimestampTarget={unixTimestampTarget} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  return {
    props: {
      unixTimestampTarget: getUnixTime(new Date()) + 180,
    },
  };
};

export default Home;
