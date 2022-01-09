import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Center } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Countdown</title>
        <meta name="description" content="Countdown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>Countdown</Center>
    </div>
  );
};

export default Home;
