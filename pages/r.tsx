import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { getUnixTime } from 'date-fns';
import { Countdown } from 'components/Countdown';

type Props = {
  unixTimestampTarget: number;
};

const Home: NextPage<Props> = ({ unixTimestampTarget }) => {
  return (
    <div>
      <Head>
        <title>Countdown</title>
        <meta name="description" content="Countdown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Countdown unixTimestampTarget={unixTimestampTarget} />
      </main>
    </div>
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
