import React from 'react';
import { NextPage } from 'next';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

type Props = {};

const Create: NextPage<Props> = () => {
  return (
    <Center minH="100vh">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Create your countdown</Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="unixTimestampTarget">
              <FormLabel>Target</FormLabel>
            </FormControl>
            <Stack spacing={3} direction={{ base: 'column', md: 'row' }}>
              <Button>Preview</Button>
              <Button>Create</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Center>
  );
};

export default Create;
