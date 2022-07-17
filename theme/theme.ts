import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';
import '@fontsource/roboto-mono';
import { variables } from './variables';

export const theme = extendTheme({
  styles: {
    global: {
      ':root': {
        ...variables,
      },
    },
  },
  fonts: {
    heading: 'Roboto, -apple-system, sans-serif',
    body: 'Roboto, -apple-system, sans-serif',
    mono: `"Roboto Mono", SFMono-Regular, monospace`,
  },
});
