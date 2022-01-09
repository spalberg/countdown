import { Box, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

type TimeUnitProps = {
  amount: number;
  padLeft?: number;
};

export function createView(label: string): FC<TimeUnitProps> {
  return ({ amount, padLeft = 0 }) => {
    return (
      <Flex direction="column">
        <Box>{amount.toString().padStart(padLeft, '0')}</Box>
        <Box>{label}</Box>
      </Flex>
    );
  };
}
