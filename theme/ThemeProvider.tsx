import { ChakraProvider } from '@chakra-ui/react';
import { type FC, type ReactNode } from 'react';
import { theme } from './theme';

type Props = {
  children: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
