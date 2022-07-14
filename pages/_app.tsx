import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '../theme';

const App = ({ Component, pageProps }: AppProps) => {
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
