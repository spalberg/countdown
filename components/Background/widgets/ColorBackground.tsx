import { Box } from '@chakra-ui/react';
import { type FC } from 'react';

type Props = {
  bg: string;
};

export const ColorBackground: FC<Props> = ({ bg }) => {
  return (
    <Box position={'absolute'} top={0} right={0} bottom={0} left={0} bg={bg} />
  );
};
