import { Text } from '@chakra-ui/react';
import { Content } from 'components/Content';
import { type FC } from 'react';

type Props = {
  text: string;
  color?: string;
};

export const TextTarget: FC<Props> = ({ text, color }) => {
  return (
    <Content>
      <Text color={color}>{text}</Text>
    </Content>
  );
};
