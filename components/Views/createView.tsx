import { Text, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

type TimeUnitProps = {
  amount: number;
  padLeft?: number;
};

export function createView(label: string): FC<TimeUnitProps> {
  const view: FC<TimeUnitProps> = ({ amount, padLeft = 0 }) => {
    return (
      <Flex direction="column" fontFamily="mono">
        <Text as="span" fontSize="7xl">
          {amount.toString().padStart(padLeft, '0')}
        </Text>
        <Text as="span" fontSize="2xl" casing="uppercase">
          {label}
        </Text>
      </Flex>
    );
  };
  view.displayName = label;
  return view;
}
