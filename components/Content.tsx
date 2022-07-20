import { Center, forwardRef } from '@chakra-ui/react';
import { type ComponentProps } from 'react';
import { contentZIndex } from 'theme/variables';

export const Content = forwardRef<ComponentProps<typeof Center>, 'div'>(
  (props, ref) => {
    return (
      <Center
        position={'relative'}
        minH={'100vh'}
        zIndex={`var(${contentZIndex})`}
        {...props}
        ref={ref}
      />
    );
  },
);
