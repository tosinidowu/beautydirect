import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { Center } from '@chakra-ui/layout';
export default function SimpleCard() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Text  fontSize={'4xl'} color={'black'}>Log in to Beauty Direct</Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          /* increase width of login form */
          w={'464px'}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={8}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                size="lg"
                bg={'red.400'}
                color={'white'}
                _hover={{
                  bg: 'pink.800',
                }}
              >
                Sign in
              </Button>
              <Stack pt={1}>
              <Text align={'center'}>
                Already a user? <Link as={RouterLink} to="/signup" color={'blue.400'}>Sign up</Link>
              </Text>
            </Stack>
              <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

