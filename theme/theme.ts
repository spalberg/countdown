import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';
import '@fontsource/roboto-mono';

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto, -apple-system, sans-serif',
    body: 'Roboto, -apple-system, sans-serif',
    mono: `"Roboto Mono", SFMono-Regular, monospace`,
  },
});
