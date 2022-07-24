import { Buffer } from 'buffer';
import { getUnixTime } from 'date-fns';
import { mellowYellow } from 'event/presets';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { ThemeProvider } from '../theme';

declare global {
  interface Window {
    countdown: {
      mellowYellow: (secondsUntil: number, text: string) => string;
    };
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    window.countdown = {
      mellowYellow: (secondsUntil, text) => {
        const event = mellowYellow(
          getUnixTime(new Date()) + secondsUntil,
          text,
        );
        const encoded = encodeURIComponent(
          Buffer.from(JSON.stringify(event)).toString('base64'),
        );
        return `${window.location.origin}/inline/${encoded}`;
      },
    };
  }, []);
  return (
    <ThemeProvider>
      <Head>
        <title>Countdown</title>
        <meta name="description" content="Countdown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
